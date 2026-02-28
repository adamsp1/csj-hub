import SourceCard from "@/components/ui/SourceCard";
import { sources } from "@/data/sources";

export default function SourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Sources Library</h1>
      {/* TODO: Add filters and search */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
    </div>
  );
}
