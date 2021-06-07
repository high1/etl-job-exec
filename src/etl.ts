import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { connect, disconnect } from 'database';
import { fetch } from 'shared';
import { ShiftModel } from 'database/shift/shift.model';
import { BreakModel } from 'database/break/break.model';
import { AllowanceModel } from 'database/allowance/allowance.model';
import { AwardInterpretationModel } from 'database/award-interpretation/award-interpretation.model';
import type { Shift } from 'types';
import type { EtlRequest } from 'types/api';

dayjs.extend(utc);
dayjs.extend(timezone);

const timeZone = 'America/New_York';
const etlDataGenerator = 'http://etl-data-gen:3000/shifts';
const tz = (dateLike: number) => dayjs.tz(dateLike * 1000, timeZone).format();

export const extractTransformLoad = async (body: EtlRequest): Promise<boolean> => {
  try {
    if (!body) return false;
    const queryParameters = Object.entries(body).reduce(
      (accumulator, [key, value], index) => `${accumulator}${index === 0 ? '?' : '&'}${key}=${value}`,
      '',
    );
    const shifts = await fetch<Shift[]>(`${etlDataGenerator}${queryParameters}`);

    await connect();

    for (const shift of shifts) {
      const {
        id: shift_id,
        date: shift_date,
        timesheet_id: sheet_id,
        approved_at,
        last_costed_at,
        start,
        finish,
        breaks,
        allowances,
        award_interpretation: award_interpretations,
        ...strippedShift
      } = shift;
      for (const {
        id: breakID,
        start: breakStart,
        finish: breakFinish,
        updated_at: breakUpdated,
        ...strippedBreak
      } of breaks || [])
        await BreakModel.create({
          break_id: breakID,
          shift_date,
          sheet_id,
          ...strippedBreak,
          start: tz(breakStart),
          finish: tz(breakFinish),
          updated_at: tz(breakUpdated),
        });
      for (const { id: allowance_id, updated_at: allowanceUpdated, ...strippedAllowance } of allowances || [])
        await AllowanceModel.create({
          allowance_id,
          shift_id,
          shift_date,
          sheet_id,
          ...strippedAllowance,
          updated_at: tz(allowanceUpdated),
        });
      for (const { from, to, ...stripedAwardInterpretation } of award_interpretations || [])
        await AwardInterpretationModel.create({
          shift_id,
          shift_date,
          sheet_id,
          ...stripedAwardInterpretation,
          from: tz(from),
          to: tz(to),
        });
      await ShiftModel.create({
        shift_id,
        date: shift_date,
        timesheet_id: sheet_id,
        start: tz(start),
        finish: tz(finish),
        ...strippedShift,
        ...(approved_at && { approved_at: tz(approved_at) }),
        last_costed_at: tz(last_costed_at),
      });
    }

    console.log(
      `Written ${shifts.length} shifts, ${shifts.reduce<number>(
        (accumulator, shift) => accumulator + (shift.breaks?.length || 0),
        0,
      )} breaks, ${shifts.reduce<number>(
        (accumulator, shift) => accumulator + (shift.allowances?.length || 0),
        0,
      )} allowances and ${shifts.reduce<number>(
        (accumulator, shift) => accumulator + (shift.award_interpretation?.length || 0),
        0,
      )} award interpretations to the database.`,
    );
    return true;
  } catch (error: unknown) {
    console.log(error instanceof Error ? `${error.name} ${error.message}` : error);
    return false;
  } finally {
    await disconnect();
  }
};
