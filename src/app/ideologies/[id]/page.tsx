import { Image } from '@/components/ui/image';
import { ideologies } from '@/data/ideologies';
import { critiques } from '@/data/critiques';
import { Ideology } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return ideologies.map((ideology) => ({
    id: ideology.id,
  }));
}

export default async function IdeologyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ideology = ideologies.find((i) => i.id === id);

  if (!ideology) {
    notFound();
  }

  const relatedCritiques = critiques.filter((c) => c.ideologyId === id);
  const otherIdeologies = ideologies.filter((i) => i.id !== id);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Title Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
          <h1 className="text-2xl font-bold text-gray-900">{ideology?.ideologyName}</h1>
        </div>
      </div>

      <div className="w-full min-h-[600px]">
        <>
          {/* Hero Section */}
            {ideology?.ideologyImage && (
              <section className="w-full bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white">
                    {ideology.ideologyName}
                  </h1>
                </div>
              </section>
            )}

            {/* Content Section with Side Panel */}
            <section className="w-full py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  {/* Side Panel Navigation - Left */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Other Ideologies</h3>
                      <nav className="space-y-2">
                        {otherIdeologies.map((ideo) => (
                          <Link
                            key={ideo.id}
                            href={`/ideologies/${ideo.id}`}
                            className="block p-3 rounded text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
                          >
                            {ideo.title}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-3">
                    <div className="mb-8">
                      <Link 
                        href="/ideologies"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Ideologies
                      </Link>
                    </div>

                    {!ideology?.ideologyImage && (
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                        {ideology?.ideologyName}
                      </h1>
                    )}

                    {/* Ideology Description */}
                    <div className="prose lg:prose-xl mb-12">
                      {ideology?.mainConcepts && (
                        <div>
                          <h2>Main Concepts</h2>
                          <p>{ideology?.mainConcepts}</p>
                        </div>
                      )}

                      {ideology?.coreTheoriesDescription && (
                        <div>
                          <h2>Core Theories</h2>
                          <p>{ideology?.coreTheoriesDescription}</p>
                        </div>
                      )}

                      {ideology?.politicalAgendas && (
                        <div>
                          <h2>Political Agendas</h2>
                          <p>{ideology?.politicalAgendas}</p>
                        </div>
                      )}
                    </div>

                    {/* Critiques Section */}
                    {relatedCritiques.length > 0 && (
                      <div className="mt-16 pt-12 border-t-2 border-gray-300">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Critiques</h2>
                        <div className="space-y-8">
                          {relatedCritiques.map((critique) => (
                            <div key={critique.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                              <h3 className="text-2xl font-bold mb-2 text-gray-900">{critique.title}</h3>
                              <p className="text-gray-700 mb-4">{critique.summary}</p>
                              
                              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400 mb-4">
                                <p className="text-gray-800"><strong>Argument:</strong> {critique.argument}</p>
                              </div>

                              {critique.evidence && critique.evidence.length > 0 && (
                                <div className="mb-4">
                                  <p className="font-semibold text-gray-900 mb-2">Evidence:</p>
                                  <ul className="list-disc list-inside text-gray-700">
                                    {critique.evidence.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {critique.counterpoints && critique.counterpoints.length > 0 && (
                                <div>
                                  <p className="font-semibold text-gray-900 mb-2">Counterpoints:</p>
                                  <ul className="list-disc list-inside text-gray-700">
                                    {critique.counterpoints.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
      </div>
    </div>
  );
}
