import { Document, Model } from 'mongoose';

export type Allowance = {
  allowance_id: number;
  name: string;
  value: number;
  updated_at: number;
  cost: number;
};

export interface AllowanceDocument extends Allowance, Document {}

export type AllowanceModel = Model<AllowanceDocument>;
