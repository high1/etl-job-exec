import { model } from 'mongoose';
import { BreakDocument } from 'database/break/break.types';
import BreakSchema from 'database/break/break.schema';

export const BreakModel = model<BreakDocument>('break', BreakSchema);
