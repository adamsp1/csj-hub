import { critiques } from "@/data/critiques";
import { sources } from "@/data/sources";
import SourceCard from "@/components/ui/SourceCard";
import { notFound } from "next/navigation";

export default function CritiqueDetailPage({ params }: { params: { id: string } }) {
  const critique = critiques.find((c) => c.id === params.id);

  if (!critique) {
    notFound();
  }

  const relatedSources = sources.filter((s) => critique.sourceIds?.includes(s.id));

  return (
    <div className="prose">
      <h1>{critique.title}</h1>
      <p className="lead">{critique.summary}</p>
      
      <h2>Argument</h2>
      <p>{critique.argument}</p>

      {critique.evidence && (
        <>
          <h2>Evidence</h2>
          <ul>
            {critique.evidence.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {critique.counterpoints && (
        <>
          <h2>Counterpoints</h2>
          <ul>
            {critique.counterpoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      
      {relatedSources.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Related Sources</h2>
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedSources.map((source) => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
