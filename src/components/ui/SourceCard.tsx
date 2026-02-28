import Link from 'next/link';
import { Source } from '@/lib/types';

interface SourceCardProps {
  source: Source;
}

export default function SourceCard({ source }: SourceCardProps) {
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null;
  };

  const embedUrl = source.url ? getEmbedUrl(source.url) : null;

  return (
    <div className="border rounded-lg overflow-hidden h-full hover:shadow-lg transition-shadow">
      {embedUrl ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ) : source.thumbnailUrl ? (
        <Link href={source.url || '#'} target="_blank" rel="noopener noreferrer">
          <img src={source.thumbnailUrl} alt={source.title} className="w-full h-48 object-contain bg-gray-100" />
        </Link>
      ) : null}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">
          <Link href={source.url || '#'} target="_blank" rel="noopener noreferrer">
            {source.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-2">by {source.author}</p>
        <p className="text-sm text-gray-500 mb-4">{source.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{source.type}</span>
           {(source.topicIds || []).map(topicId => (
             <span key={topicId} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
               Topic {topicId}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
}
