import { Schema } from 'mongoose';

const BreakSchema = new Schema({
  break_id: Number,
  shift_id: Number,
  shift_date: String,
  sheet_id: Number,
  shift_mongo_id: Object,
  start: String,
  finish: String,
  length: Number,
  paid: Boolean,
  updated_at: String,
});

export default BreakSchema;
