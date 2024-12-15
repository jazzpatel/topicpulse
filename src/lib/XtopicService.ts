import { TopicEngagement, VoteType } from './types';
import { initialTopics } from './mockData';

class TopicService {
  private topics: TopicEngagement[] = [...initialTopics];

  async getTopics(): Promise<TopicEngagement[]> {
    // Simulate network delay
    // await new Promise(resolve => setTimeout(resolve, 800));
    return [...this.topics].sort((a, b) => b.total_engagement - a.total_engagement);
  }

  async incrementVote(topicId: number, voteType: VoteType): Promise<void> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const topic = this.topics.find(t => t.id === topicId);
    if (!topic) throw new Error('Topic not found');

    topic[voteType] += 1;
    topic.total_engagement += 1;
  }
}

export const topicService = new TopicService();