"use client";

import { useMemo, useState, useEffect } from "react";
import SourceCard from "@/components/ui/SourceCard";
import { sources } from "@/data/sources";

const DISPLAY_TYPES: { key: string; label: string }[] = [
  { key: "book", label: "Books" },
  { key: "article", label: "Articles" },
  { key: "video", label: "Videos" },
];

export default function SourcesPage() {
  const [activeSection, setActiveSection] = useState<string>("book");

  const grouped = useMemo(() => {
    return sources.reduce<Record<string, typeof sources>>((acc, s) => {
      (acc[s.type] ||= []).push(s);
      return acc;
    }, {} as Record<string, typeof sources>);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -66% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const typeKey = sectionId.replace("section-", "");
          setActiveSection(typeKey);
          break;
        }
      }
    }, observerOptions);

    DISPLAY_TYPES.forEach((t) => {
      const element = document.getElementById(`section-${t.key}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      DISPLAY_TYPES.forEach((t) => {
        const element = document.getElementById(`section-${t.key}`);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleScroll = (typeKey: string) => {
    const element = document.getElementById(`section-${typeKey}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      {/* Left Floating Panel */}
      <div className="fixed left-6 top-32 z-30 bg-white rounded-lg border border-gray-200 shadow-lg p-4 w-48">
        <h3 className="text-sm font-bold text-gray-900 mb-4 px-2">Source type</h3>
        <nav className="space-y-2">
          {DISPLAY_TYPES.map((t) => (
            <button
              key={t.key}
              onClick={() => handleScroll(t.key)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === t.key
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="pl-0 lg:pl-64">
        <h1 className="text-3xl font-bold mb-8">Sources Library</h1>

        {/* Grouped Sections */}
        <div className="space-y-12">
          {DISPLAY_TYPES.map((t) => {
            const items = grouped[t.key] || [];
            if (!items || items.length === 0) return null;

            return (
              <section
                key={t.key}
                id={`section-${t.key}`}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm scroll-mt-20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">{t.label}</h2>
                  <span className="text-sm text-gray-500">{items.length} items</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((source) => (
                    <SourceCard key={source.id} source={source} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
