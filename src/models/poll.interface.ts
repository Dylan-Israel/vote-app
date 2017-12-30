import { Options } from './';

export interface Poll {
  _id?: string;
  pollId?: number;
  question: string;
  options: Options[];
  createdBy: string;
}
