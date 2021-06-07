import { model } from 'mongoose';
import { AwardInterpretationDocument } from 'database/award-interpretation/award-interpretation.types';
import AwardInterpretationSchema from 'database/award-interpretation/award-interpretation.schema';

export const AwardInterpretationModel = model<AwardInterpretationDocument>(
  'award-interpretation',
  AwardInterpretationSchema,
);
