"use client";

import { glossary } from "@/data/glossary";
import { useState, useEffect, useRef } from "react";

export default function GlossaryPage() {
  const [activeTerm, setActiveTerm] = useState<string>("");
  const suppressUntilRef = useRef<number>(0);

  useEffect(() => {
    if (glossary.length > 0) {
      setActiveTerm(glossary[0].term);
    }

    // use the component-level ref for suppression

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -20% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      // If we've recently clicked to navigate, ignore observer updates
      if (Date.now() < suppressUntilRef.current) return;

      // From intersecting entries pick the one with the largest intersectionRatio
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        let chosen = visible[0];
        for (const v of visible) {
          if ((v.intersectionRatio ?? 0) > (chosen.intersectionRatio ?? 0)) {
            chosen = v;
          }
        }
        const termId = chosen.target.id;
        const term = termId.replace("term-", "");
        setActiveTerm(term);
        return;
      }

      // Fallback: if no entries intersect and we're at the very bottom, mark last
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (documentHeight - scrollPosition < 120 && glossary.length > 0) {
        setActiveTerm(glossary[glossary.length - 1].term);
      }
    }, observerOptions);

    // expose suppress ref so click handler can update it
    (window as any).__glossarySuppress = suppressUntilRef;
    (window as any).__glossaryObserver = observer;

    glossary.forEach((entry) => {
      const element = document.getElementById(`term-${entry.term}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      glossary.forEach((entry) => {
        const element = document.getElementById(`term-${entry.term}`);
        if (element) {
          observer.unobserve(element);
        }
      });
      try {
        delete (window as any).__glossaryObserver;
        delete (window as any).__glossarySuppress;
      } catch (e) {}
    };
  }, []);

  // Scroll listener to synchronize active term during manual scrolling
  useEffect(() => {
    const refY = 120; // offset from top to consider "active"
    let ticking = false;

    const onScrollCheck = () => {
      if (Date.now() < suppressUntilRef.current) return;

      let closest: string | null = null;
      let closestDistance = Infinity;
      for (const entry of glossary) {
        const el = document.getElementById(`term-${entry.term}`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - refY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = entry.term;
        }
      }
      if (closest && closest !== activeTerm) {
        setActiveTerm(closest);
      }
    };

    const handler = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          onScrollCheck();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    // run once to initialize
    onScrollCheck();

    return () => window.removeEventListener("scroll", handler);
  }, [activeTerm]);

  const handleScroll = (term: string) => {
    // Immediately set the active term and suppress observer updates while scrolling
    setActiveTerm(term);
    const suppress = (window as any).__glossarySuppress as { current: number } | undefined;
    if (suppress) suppress.current = Date.now() + 900;

    const element = document.getElementById(`term-${term}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      {/* Left Floating Panel */}
      <div className="fixed left-6 top-32 z-30 bg-white rounded-lg border border-gray-200 shadow-lg p-4 w-48 max-h-[calc(100vh-150px)] overflow-y-auto">
        <h3 className="text-sm font-bold text-gray-900 mb-4 px-2">Terms</h3>
        <nav className="space-y-1">
          {glossary.map((entry) => (
            <button
              key={entry.term}
              onClick={() => handleScroll(entry.term)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTerm === entry.term
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {entry.term}
            </button>
          ))}
        </nav>
      </div>

      <div className="pl-0 lg:pl-64">
        <h1 className="text-3xl font-bold mb-8">Glossary</h1>

        <div className="space-y-6">
          {glossary.map((entry) => (
            <section
              key={entry.term}
              id={`term-${entry.term}`}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm scroll-mt-20"
            >
              <dt className="text-2xl font-bold text-gray-900 mb-3">{entry.term}</dt>
              <dd className="text-gray-700 leading-relaxed">{entry.definition}</dd>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
