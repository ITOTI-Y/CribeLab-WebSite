"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResearchItem } from "@/lib/api";

const ResearchCard = ({ area }: { area: ResearchItem }) => {
    return (
        <div className="bg-black border border-neutral-700 
            w-80 h-136 flex flex-col rounded-lg text-white shadow-md p-6">
            <div className="relative w-full h-64 rounded-lg mb-6">
                <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="99vw"
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <div className="flex flex-col h-48">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-neutral-100 line-clamp-2">{area.title}</h3>
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-neutral-600 rounded-sm overflow-hidden">
                        {area.icon || <div className="w-full h-full" />}
                    </div>
                </div>
                <div className="@container h-24 w-full ">
                    <p className="text-sm text-neutral-400 line-clamp-5">
                        {area.description}
                    </p>
                </div>

            </div>
            <div className="mt-auto border-t border-neutral-800 text-center group/button">
                <Link
                    href={`/research/${area.id}`}
                    className="inline-flex items-center justify-center mt-3 px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                >
                    READ MORE <ArrowRight className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </div>
    )
}

export default ResearchCard;
