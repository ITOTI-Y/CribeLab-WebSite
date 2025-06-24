"use client";

import { useState } from "react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { PublicationItem } from "@/lib/api";
import YearSelector from "./YearSelector";
import Link from "next/link";

export default function AllPublicationFrame({ publications,}: { publications: PublicationItem[];}) {
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
            <div className="flex justify-between items-center mb-6 gap-x-4">
                <h3 className="text-xl w-fit font-semibold text-white">
                    All Publications
                </h3>
                <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} years={years} />
                {/* <div className="grid grid-cols-4 md:grid-cols-9 gap-x-2 gap-y-1">
                    <button
                        onClick={() => setSelectedYear("all")}
                        className={`px-2 py-1 rounded-md text-sm ${selectedYear === "all" ? "text-white bg-neutral-800" : "text-gray-400"} cursor-pointer hover:bg-neutral-700 transition-colors duration-300`}
                    >
                        ALL
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-1 py-1 rounded-md text-sm ${selectedYear === year ? "text-white bg-neutral-800" : "text-gray-400"} cursor-pointer hover:bg-neutral-700 transition-colors duration-300`}
                        >
                            {year}
                        </button>
                    ))}
                </div> */}
            </div>

            <div className="space-y-6">
                <ScrollArea className="h-96 md:h-128 w-full pr-4">
                    {filteredPublications.map((pub) => (
                        pub.url ? (
                            <Link
                                key={pub.id}
                                href={`/publications/${pub.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-4 border-b border-gray-800 group"
                            >
                                <p className="text-sm text-gray-300 mb-1 group-hover:text-white transition-colors duration-200">{pub.title}</p>
                                <p className="text-xs text-gray-500">
                                    {pub.authors} ({pub.year})
                                </p>
                            </Link>
                        ) : (
                            <div
                                key={pub.id}
                                className="py-4 border-b border-gray-800"
                            >
                                <p className="text-sm text-gray-300 mb-1">{pub.title}</p>
                                <p className="text-xs text-gray-500">
                                    {pub.authors} ({pub.year})
                                </p>
                            </div>
                        )
                    ))}
                </ScrollArea>
            </div>
        </div>
    )
}
