import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type TopicEngagement = {
  id: number;
  topic: string;
  agree: number;
  disagree: number;
  no_opinion: number;
  total_engagement: number;
};