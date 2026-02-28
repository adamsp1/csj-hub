import { glossary } from "@/data/glossary";

export default function GlossaryPage() {
  return (
    <div className="prose">
      <h1>Glossary</h1>
      <dl>
        {glossary.map((entry) => (
          <div key={entry.term} className="mb-4">
            <dt className="font-bold">{entry.term}</dt>
            <dd>{entry.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
