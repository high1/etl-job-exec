import { model } from 'mongoose';
import { ShiftDocument } from 'database/shift/shift.types';
import ShiftSchema from 'database/shift/shift.schema';

export const ShiftModel = model<ShiftDocument>('shift', ShiftSchema);
