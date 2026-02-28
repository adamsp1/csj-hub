import { topics } from "@/data/topics";
import { critiques } from "@/data/critiques";
import { sources } from "@/data/sources";
import CritiqueCard from "@/components/ui/CritiqueCard";
import SourceCard from "@/components/ui/SourceCard";
import { notFound } from "next/navigation";

export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const topic = topics.find((t) => t.id === params.id);

  if (!topic) {
    notFound();
  }

  const relatedCritiques = critiques.filter((c) => c.topicId === topic.id);
  const featuredSources = sources.filter((s) => s.topicIds.includes(topic.id));

  return (
    <div>
      <div className="prose mb-12">
        <h1>{topic.title}</h1>
        <p className="lead">{topic.description}</p>

        {topic.keyConcepts && (
          <>
            <h2>Key Concepts</h2>
            <ul>
              {topic.keyConcepts.map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>
          </>
        )}

        {topic.claims && (
          <>
            <h2>Core Claims</h2>
            <ul>
              {topic.claims.map((claim, index) => (
                <li key={index}>{claim}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {relatedCritiques.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Related Critiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCritiques.map((critique) => (
              <CritiqueCard key={critique.id} critique={critique} />
            ))}
          </div>
        </section>
      )}

      {featuredSources.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSources.map((source) => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
