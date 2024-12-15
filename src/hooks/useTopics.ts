import { useState, useEffect } from 'react';
import { TopicEngagement } from '../types/topic';
import { generateTopicEngagements, updateTopicEngagement } from '../services/topic.service';

export function useTopics() {
  const [topics, setTopics] = useState<TopicEngagement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTopics() {
      try {
        const generatedTopics = await generateTopicEngagements();
        setTopics(generatedTopics);
      } catch (err) {
        setError('Failed to load topics');
      } finally {
        setLoading(false);
      }
    }

    loadTopics();
  }, []);

  const handleEngagement = (topicId: number, type: 'agree' | 'disagree' | 'no_opinion') => {
    setTopics(currentTopics => updateTopicEngagement(currentTopics, topicId, type));
  };

  return {
    topics,
    loading,
    error,
    handleEngagement
  };
}