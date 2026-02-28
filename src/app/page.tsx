import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Critical Social Justice Hub</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            An information hub exploring key philosophical and political frameworks that shape contemporary discourse. Understand ideologies, examine critiques, and access academic sources.
          </p>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📚 Ideologies</h3>
              <p className="text-gray-600 mb-4">
                Explore philosophical and political frameworks including Postmodernism, Critical Race Theory, and more. Each ideology includes core theories, main concepts, and constructive critiques.
              </p>
              <Link href="/ideologies" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                View Ideologies →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📖 Sources</h3>
              <p className="text-gray-600 mb-4">
                Access academic sources, books, articles, and videos that discuss ideologies and provide evidence for critiques. A curated library of research and analysis.
              </p>
              <Link href="/sources" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Browse Sources →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔤 Glossary</h3>
              <p className="text-gray-600 mb-4">
                Understand key terms and concepts used in academic and political discourse. A growing resource for learning the language of critical scholarship.
              </p>
              <Link href="/glossary" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                View Glossary →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Help Improve This Resource</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have a source, critique, or perspective to share? Contribute to the hub and help build a comprehensive resource for understanding ideologies and their critiques.
          </p>
          <Link href="/submit" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Submit Content
          </Link>
        </div>
      </section>
    </div>
  );
}
