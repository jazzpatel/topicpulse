import { TopicEngagement } from '../types/topic';
import { fetchTopicsFromClaude } from './claude.service';
import { getTopicFacts } from './facts.service';

/**
 * This function generates a list of TopicEngagement objects based on the topics received from Claude.
 * @returns 
 */
export async function generateTopicEngagements(): Promise<TopicEngagement[]> {
  try {
    const { topics, error } = await fetchTopicsFromClaude();
    
    if (error || !topics.length) {
      throw new Error(error || 'No topics received');
    }

    return topics.map((topic, index) => ({
      id: index + 1,
      topic,
      facts: getTopicFacts(index, topic).facts,

      // Generate random initial engagement numbers
      agree: Math.floor(Math.random() * 200) + 50,
      disagree: Math.floor(Math.random() * 100) + 20,
      no_opinion: Math.floor(Math.random() * 50) + 10,
      get total_engagement() {
        return this.agree + this.disagree + this.no_opinion;
      }
    }));
  } catch (error) {
    console.error('Error generating topic engagements:', error);
    return [];
  }
}

export function updateTopicEngagement(
  topics: TopicEngagement[],
  topicId: number,
  type: 'agree' | 'disagree' | 'no_opinion'
): TopicEngagement[] {
  return topics.map(topic => {
    if (topic.id === topicId) {
      const updatedTopic = {
        ...topic,
        [type]: topic[type] + 1
      };
      return {
        ...updatedTopic,
        total_engagement: updatedTopic.agree + updatedTopic.disagree + updatedTopic.no_opinion
      };
    }
    return topic;
  });
}