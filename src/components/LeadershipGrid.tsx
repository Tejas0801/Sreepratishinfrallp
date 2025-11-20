import React from "react";
import { LEADERS } from "../data/leaders.ts";

export default function LeadershipGrid() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6">Meet Our Leadership</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {LEADERS.map((l) => (
          <div key={l.id} className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-start gap-4">
              <img src={l.photo} alt={l.name} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-medium">{l.name}</h3>
                <p className="text-sm text-gray-600">{l.title}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">{l.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
