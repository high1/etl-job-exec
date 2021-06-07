import { Schema } from 'mongoose';

const ShiftSchema = new Schema({
  shift_id: {
    type: Number,
    required: true,
  },
  timesheet_id: Number,
  user_id: Number,
  date: String,
  start: String,
  finish: String,
  department_id: Number,
  status: String,
  metadata: String,
  leave_request_id: Number,
  shift_feedback_id: Number,
  approved_by: Number,
  approved_at: String,
  cost: Number,
  cost_breakdown: {
    award_cost: Number,
    allowance_cost: Number,
  },
  updated_at: Number,
  record_id: Number,
  last_costed_at: String,
});

export default ShiftSchema;
