import Link from 'next/link';
import { Critique } from '@/lib/types';

interface CritiqueCardProps {
  critique: Critique;
}

export default function CritiqueCard({ critique }: CritiqueCardProps) {
  return (
    <Link href={`/critiques/${critique.id}`}>
      <div className="border rounded-lg p-4 h-full hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-2">{critique.title}</h2>
        <p className="text-gray-600">{critique.summary}</p>
      </div>
    </Link>
  );
}
