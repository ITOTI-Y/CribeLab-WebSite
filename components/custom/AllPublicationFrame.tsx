"use client";

import { useState } from "react";
import { PublicationItem } from "@/lib/api";

export default function AllPublicationFrame({
  publications,
}: {
  publications: PublicationItem[];
}) {
  const [selectedYear, setSelectedYear] = useState("all");
  const years = [...new Set(publications.map((pub) => pub.year))].sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  const filteredPublications =
    selectedYear === "all"
      ? publications.sort((a, b) => parseInt(b.year) - parseInt(a.year))
      : publications.filter((pub) => pub.year === selectedYear);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">All Publications</h3>
        <div className="flex space-x-3">
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-2 py-1 text-sm ${selectedYear === "all" ? "text-white bg-neutral-800" : "text-gray-400"}`}
          >
            ALL
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2 py-1 text-sm ${selectedYear === year ? "text-white bg-neutral-800" : "text-gray-400"}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredPublications.map((pub) => (
          <div key={pub.id} className="py-4 border-b border-gray-800">
            <p className="text-sm text-gray-300 mb-1">{pub.title}</p>
            <p className="text-xs text-gray-500">
              {pub.authors} ({pub.year})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
