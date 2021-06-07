import { Schema } from 'mongoose';

const AwardInterpretationSchema = new Schema({
  shift_id: Number,
  shift_date: String,
  sheet_id: Number,
  units: Number,
  date: String,
  export_name: String,
  secondary_export_name: String,
  ordinary_hours: Boolean,
  cost: Number,
  from: String,
  to: String,
});

export default AwardInterpretationSchema;
