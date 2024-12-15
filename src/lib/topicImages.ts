const topicImages = {
  'Climate Change Impact': 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce',
  'Future of AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  'Remote Work Culture': 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2',
  'Digital Privacy': 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
  'Space Exploration': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
  'Sustainable Energy': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
};

export function getTopicImage(topic: string): string {
  return (topicImages as Record<string, string>)[topic] || 'https://images.unsplash.com/photo-1557683316-973673baf926';
}