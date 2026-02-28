import Link from 'next/link';
import { Ideology } from '@/lib/types';

interface IdeologyCardProps {
  ideology: Ideology;
}

export default function IdeologyCard({ ideology }: IdeologyCardProps) {
  return (
    <Link href={`/ideologies/${ideology.id}`}>
      <div className="border rounded-lg p-4 h-full hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-2">{ideology.title}</h2>
        <p className="text-gray-600">{ideology.description}</p>
      </div>
    </Link>
  );
}
