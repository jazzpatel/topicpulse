import { TopicFact } from "../types/fact";

export type VoteType = 'agree' | 'disagree' | 'no_opinion';

export type TopicEngagement = {
  id: number;
  topic: string;
  facts: TopicFact[];
  agree: number;
  disagree: number;
  no_opinion: number;
  total_engagement: number;
};