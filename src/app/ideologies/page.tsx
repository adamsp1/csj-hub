import IdeologyCard from "@/components/ui/IdeologyCard";
import { ideologies } from "@/data/ideologies";

export default function IdeologiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Ideologies</h1>
      <p className="text-gray-600 mb-8">
        Click on any ideology to explore its definition, core theories, political implications, and related critiques.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideologies.map((ideology) => (
          <IdeologyCard key={ideology.id} ideology={ideology} />
        ))}
      </div>
    </div>
  );
}
