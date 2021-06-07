import { Document, Model } from 'mongoose';
import type { CostBreakdown } from 'types';

export type Shift = {
  shift_id: number;
  timesheet_id: number;
  user_id: number;
  date: string;
  start: number;
  finish: number;
  department_id: number;
  // sub_cost_centre?: number;
  // tag?: string;
  // tag_id?: string;
  status: 'PENDING' | 'COMPLETED';
  metadata?: string;
  leave_request_id?: number;
  shift_feedback_id?: number;
  approved_by?: number;
  approved_at?: number;
  cost: number;
  cost_breakdown: CostBreakdown;
  updated_at: number;
  record_id: number;
  last_costed_at: number;
};

export interface ShiftDocument extends Shift, Document {}

export type ShiftModel = Model<ShiftDocument>;
