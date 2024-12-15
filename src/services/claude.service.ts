import { ClaudeResponse } from '../types/topic';
import { getTopicFacts } from './facts.service';

export async function fetchTopicsFromClaude(): Promise<ClaudeResponse> {
  try {
    // Note: This is a mock implementation since we don't have actual Claude API access
    // In a real implementation, you would make an API call to Claude here
    const mockTopics = [
      "Climate Change and Environmental Policy",
      "Economic Inequality and Wealth Distribution",
      "Healthcare System Reform",
      "National Security and Defense",
      "Education System Reform",
      "Immigration Policy",
      "Technology Regulation and Privacy", 
      "Infrastructure Development",
      "International Trade Relations",
      "Energy Policy and Renewable Resources"
    ];

    return {
      topics: mockTopics,
      
    }
  } catch (error) {
    console.error('Error fetching topics from Claude:', error);
    return {
      topics: [],
      error: 'Failed to fetch topics from Claude'
    };
  }
}