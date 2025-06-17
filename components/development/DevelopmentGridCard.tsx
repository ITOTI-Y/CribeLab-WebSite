"use client"

import { useState } from "react";
import { DevelopmentItem } from "@/lib/api";
import { ExternalLink, Zap } from 'lucide-react';
import DevelopmentDetailModal from "./DevelopmentDetailModal";
import Link from "next/link";
import Image from "next/image";


export default function DevelopmentGrid({ developmentData }: { developmentData: DevelopmentItem[] }) {
    const [selectedProject, setSelectedProject] = useState<DevelopmentItem | null>(null);

    const handleOpenModal = (project: DevelopmentItem) => {
        setSelectedProject(project);
    }

    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    return (
        <section className="w-full h-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 p-8">
            {developmentData.map((item) => (
                <div 
                key={item.id}
                onClick={() => handleOpenModal(item)}
                onKeyDown={(e) => e.key === "Enter" && handleOpenModal(item)}
                role="button"
                tabIndex={0}
                className="relative bg-gray-900 rounded-lg w-full cursor-pointer border-[1px] border-gray-600 overflow-hidden group
                hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300">
                    <div className="relative top-0 left-0 w-full h-48 overflow-hidden">
                        <Image src={item.image} alt={item.title} fill sizes="99vw" className="object-cover transition-all opacity-90 duration-300 group-hover:scale-105 group-hover:opacity-100" />
                        <div className="absolute bg-neutral-900 left-3 bottom-2 w-fit py-2 px-4 opacity-90 border-[1px] border-gray-600 rounded-md z-10">
                            <div className="flex items-center justify-center h-full">
                                <Zap className="w-4 h-4 mr-2" />
                                <span className="text-sm font-bold">
                                    Energy
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-white p-6 flex flex-col">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold line-clamp-2">{item.title}</h2>
                            <Link href={item.url ?? ""}>
                                <div className="w-8 h-8 hover:bg-neutral-400 rounded-md flex items-center justify-center transition-all duration-300 group/external">
                                    <ExternalLink className="w-4 h-4 opacity-50 group-hover/external:opacity-100" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-6 mt-2">
                            {item.description}
                        </p>
                        <div className="flex items-center justify-end mt-4">
                            <div className="text-black font-bold p-2 bg-white rounded-md hover:scale-105 transition-all duration-300">
                                View Details
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <DevelopmentDetailModal 
                isOpen={!!selectedProject}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </section>
    )
}