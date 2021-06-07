import { Document, Model } from 'mongoose';

export type AwardInterpretation = {
  units: number;
  date: string;
  export_name: string;
  secondary_export_name?: string;
  ordinary_hours?: boolean;
  cost: number;
  from?: number;
  to?: number;
};

export interface AwardInterpretationDocument extends AwardInterpretation, Document {}

export type AwardInterpretationModel = Model<AwardInterpretationDocument>;
