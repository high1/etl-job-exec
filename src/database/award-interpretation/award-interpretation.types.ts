import { Document, Model } from 'mongoose';
import type { AwardInterpretation } from 'types';

export interface AwardInterpretationDocument extends AwardInterpretation, Document {}

export type AwardInterpretationModel = Model<AwardInterpretationDocument>;
