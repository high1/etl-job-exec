import { Document, Model } from 'mongoose';

export type Break = {
  break_id: number;
  shift_id: number;
  start: number;
  finish: number;
  length: number;
  paid: boolean;
  updated_at: number;
};

export interface BreakDocument extends Break, Document {}

export type BreakModel = Model<BreakDocument>;
