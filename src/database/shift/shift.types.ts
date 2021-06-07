import { Document, Model } from 'mongoose';
import type { Shift as OriginalShift } from 'types';

export type Shift = {
  shift_id: number;
} & Omit<OriginalShift, 'id'>;

export interface ShiftDocument extends Shift, Document {}

export type ShiftModel = Model<ShiftDocument>;
