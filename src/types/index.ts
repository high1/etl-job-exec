export type Break = {
  id: number;
  shift_id: number;
  start: number;
  finish: number;
  length: number;
  paid: boolean;
  updated_at: number;
};

export type Allowance = {
  id: number;
  name: string;
  value: number;
  updated_at: number;
  cost: number;
};

export type AwardInterpretation = {
  units: number;
  date: string;
  export_name: string;
  secondary_export_name?: string;
  ordinary_hours?: boolean;
  cost: number;
  from: number;
  to: number;
};

export type CostBreakdown = {
  award_cost: number;
  allowance_cost: number;
};

export type Shift = {
  id: number;
  timesheet_id: number;
  user_id: number;
  date: string;
  start: number;
  breaks?: Break[];
  finish: number;
  department_id: number;
  // sub_cost_centre?: number;
  // tag?: string;
  // tag_id?: string;
  status: 'PENDING' | 'COMPLETED';
  metadata?: string;
  leave_request_id?: number;
  allowances?: Allowance[];
  shift_feedback_id?: number;
  approved_by?: number;
  approved_at?: number;
  award_interpretation?: AwardInterpretation[];
  cost: number;
  cost_breakdown: CostBreakdown;
  updated_at: number;
  record_id: number;
  last_costed_at: number;
};
