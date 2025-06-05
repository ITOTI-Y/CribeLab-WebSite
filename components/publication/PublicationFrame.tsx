"use client";

import { useState } from "react";
import YearSelector from "./YearSelector";
import { PublicationItem } from "@/lib/api";
import PublicationDetailCard from "./PublicationDetailCard";

export default function PublicationFrame({ 
    publications 
}: { 
    publications: PublicationItem[];
}) {
    const [selectedYear, setSelectedYear] = useState("All");
    
    const uniqueYears = [...new Set(publications.map((pub) => pub.year))].sort(
        (a, b) => parseInt(b) - parseInt(a),
    );
    const years = ["All", ...uniqueYears];
    
    // 根据选择的年份过滤出版物
    const filteredPublications =
        selectedYear === "All"
            ? publications.sort((a, b) => parseInt(b.year) - parseInt(a.year))
            : publications.filter((pub) => pub.year === selectedYear);

    return (
        <section className="w-full py-12 bg-black">
            <div className="flex flex-col font-roboto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
                <YearSelector 
                    years={years}
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 w-fit">
                    {filteredPublications.map((publication) => (
                        <PublicationDetailCard key={publication.id} publication={publication} />
                    ))}
                </div>
                
                {/* 这里可以添加展示 filteredPublications 的组件 */}
                <div className="mt-8">
                    {/* 示例：展示过滤后的出版物数量 */}
                    <p className="text-white">
                        {selectedYear === "All" 
                            ? `Show all  ${filteredPublications.length} publications`
                            : `Show ${filteredPublications.length} publications for ${selectedYear} year`
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}