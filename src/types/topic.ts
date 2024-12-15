import { TopicFact } from './fact';

/**
 * Describes the type of card that will be displayed in the card view.
 */
export enum CardTypes {
    TopicEngagement = 'topic_engagement',
    TopicFact = 'topic_fact',
    NewsAlert = 'news_alert',
  }

export interface CardType {
    id: number;
    type: CardTypes;    
}

export interface TopicFactCard extends CardType {
    topic: string;
    facts: TopicFact[];
}

export interface TopicEngagementCard extends TopicFactCard {
  agree: number;
  disagree: number;
  no_opinion: number;
  total_engagement: number;
}


export interface NewsAlertCard extends CardType {
    title: string;
    content: string;
    url: string;
    imageUrl: string;
}

export interface CardDeck {
    cards: CardType[];
}

  
export interface ClaudeResponse {
  topics: string[];
  error?: string;
}