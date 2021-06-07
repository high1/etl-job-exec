import { Schema } from 'mongoose';
import dayjs from 'dayjs';

const AllowanceSchema = new Schema({
  allowance_id: Number,
  shift_id: Number,
  shift_date: String,
  sheet_id: Number,
  name: String,
  value: Number,
  cost: Number,
  updated_at: String,
});

export default AllowanceSchema;
