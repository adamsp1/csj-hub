export default function HomePage() {
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Critical Social Justice Hub</h1>
        <p className="text-lg text-gray-600">
          An information hub for critical viewpoints on progressive ideological frameworks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for TopicCard */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Topic 1</h3>
            <p>A brief description of the topic.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Topic 2</h3>
            <p>A brief description of the topic.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Topic 3</h3>
            <p>A brief description of the topic.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <div className="space-y-4">
          {/* Placeholder for CritiqueCard or SourceCard */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">New Critique Added</h3>
            <p>A summary of the new critique.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">New Source Added</h3>
            <p>A summary of the new source.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
