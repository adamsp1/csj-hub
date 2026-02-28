import Link from 'next/link';
import { Topic } from '@/lib/types';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`}>
      <div className="border rounded-lg p-4 h-full hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
        <p className="text-gray-600">{topic.description}</p>
      </div>
    </Link>
  );
}
