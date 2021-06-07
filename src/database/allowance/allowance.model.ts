import { model } from 'mongoose';
import { AllowanceDocument } from 'database/allowance/allowance.types';
import AllowanceSchema from 'database/allowance/allowance.schema';

export const AllowanceModel = model<AllowanceDocument>('allowance', AllowanceSchema);
