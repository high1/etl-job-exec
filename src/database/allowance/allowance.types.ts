import { Document, Model } from 'mongoose';
import type { Allowance as OriginalAllowance } from 'types';

export type Allowance = {
  allowance_id: number;
} & Omit<OriginalAllowance, 'id'>;

export interface AllowanceDocument extends Allowance, Document {}

export type AllowanceModel = Model<AllowanceDocument>;
