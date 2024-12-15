import { TopicCard } from "../components/TopicCard";
import { VoteType } from "../lib/types";
import { BarChart } from "lucide-react";
import { useTopics } from "../hooks/useTopics";

/**
 * This is the main page of the application. It displays a list of topics and allows users to vote on them.
 */
export function Home() {
  const { topics, loading, error, handleEngagement } = useTopics();

  // const [topics, setTopics] = useState<TopicEngagement[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetchTopics();
  // }, []);

  // async function fetchTopics() {
  //   try {
  //     const data = await topicService.getTopics();
  //     setTopics(data);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "An error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function handleVote(topicId: number, vote: VoteType) {
  //   try {
  //     await topicService.incrementVote(topicId, vote);
  //     await fetchTopics();
  //   } catch (err) {
  //     console.error("Error voting:", err);
  //   }
  // }

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin text-blue-500">
          <BarChart className="w-12 h-12" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">Error loading topics</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Topic Engagement Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Share your opinion on various topics and facts.
            <br />
            See what your fellow Americans think.
          </p>
        </header>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onVote={async (type: VoteType) =>
                await handleEngagement(topic.id, type)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
