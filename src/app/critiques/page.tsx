import CritiqueCard from "@/components/ui/CritiqueCard";
import { critiques } from "@/data/critiques";

export default function CritiquesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Critiques</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {critiques.map((critique) => (
          <CritiqueCard key={critique.id} critique={critique} />
        ))}
      </div>
    </div>
  );
}
