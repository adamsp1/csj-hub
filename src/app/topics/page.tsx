import TopicCard from "@/components/ui/TopicCard";
import { topics } from "@/data/topics";

export default function TopicsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
