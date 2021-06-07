import { Document, Model } from 'mongoose';
import type { Break as OriginalBreak } from 'types';

export type Break = {
  break_id: number;
} & Omit<OriginalBreak, 'id'>;

export interface BreakDocument extends Break, Document {}

export type BreakModel = Model<BreakDocument>;
