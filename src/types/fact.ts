import { LucideIcon } from 'lucide-react';

export interface TopicFact {
  icon: React.ReactNode;
  title: string;
  content: string;
  emotional: string;
  color: string;
  textColor: string;
}

export interface TopicFacts {
  topicId: number;
  facts: TopicFact[];
}