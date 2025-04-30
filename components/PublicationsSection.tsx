"use client";

import { useState, useEffect} from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SubTitle from "@/components/custom/SubTitle";
import type { PublicationItem } from "@/lib/api";
import SelectedPublicationFrame from "@/components/custom/SelectedPublicationFrame";
import AllPublicationFrame from "@/components/custom/AllPublicationFrame";

interface PublicationsSectionProps {
    publications: PublicationItem[];
}

const PublicationsSection = ({ publications }: PublicationsSectionProps) => {
    const subtitle = "Publications";
    const selectedPublications = publications
        .filter((pub) => pub.is_selected)
        .slice(0, 5);
    return (
        <section id="publications" className="w-full py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SubTitle content={subtitle} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Selected Publications */}
                    <SelectedPublicationFrame selectedPublications={selectedPublications} />

                    {/* All Publications with Year Filter */}
                    <AllPublicationFrame publications={publications} />
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/publications"
                        className="inline-flex items-center justify-center px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                    >
                        READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PublicationsSection;
