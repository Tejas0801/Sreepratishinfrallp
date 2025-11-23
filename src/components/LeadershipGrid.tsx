import React, { useState } from "react";
import { LEADERS } from "../data/leaders"; // keep your existing path

export default function LeadershipGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-serif font-bold mb-8">Meet Our Leadership</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {LEADERS.map((l) => {
          const isExpanded = expandedId === l.id;

          // If not expanded, show a shorter preview, otherwise full text
          const text =
            !isExpanded && l.bio && l.bio.length > 220
              ? l.bio.slice(0, 220).trimEnd() + "..."
              : l.bio;

          // Simple initials fallback if photo is missing / broken
          const initials = l.name
            .split(" ")
            .filter(Boolean)
            .map((n: string) => n[0])
            .join("");

          return (
            <article
              key={l.id}
              className="bg-white rounded-2xl p-6 shadow transition-shadow cursor-pointer hover:shadow-lg"
              onClick={() => setExpandedId(isExpanded ? null : l.id)}
            >
              <div className="flex items-start gap-4">
                {l.photo ? (
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-16 h-16 rounded-full object-cover bg-neutral-100"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {initials}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold">{l.name}</h3>
                  <p className="text-sm text-gray-600">{l.title}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-sm whitespace-pre-line">
                {text}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // don’t trigger card click twice
                  setExpandedId(isExpanded ? null : l.id);
                }}
                className="mt-3 text-sm font-semibold text-primary hover:underline"
              >
                {isExpanded ? "Show less" : "Read full profile"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
