"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResearchItem } from "@/lib/api";

// const ResearchCard = ({ area }: { area: ResearchItem }) => {
//     return (
//         <div
//             key={area.id}
//             className="bg-neutral-900 rounded-lg overflow-hidden flex flex-col"
//         >
//             <div className="h-48 relative bg-neutral-800 overflow-hidden">
//                 {area.image && (
//                     <Image
//                         src={area.image}
//                         alt={area.title}
//                         fill
//                         className="object-cover"
//                     />
//                 )}
//             </div>
//             <div className="p-6 relative flex-1 flex flex-col justify-between">
//                 <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
//                 <p className="text-gray-400 text-sm mb-6">{area.description}</p>
//                 <ReadMoreButton href={`/research/${area.id}`} text="READ MORE" />
//             </div>
//         </div>
//     );
// };

const ResearchCard = ({ area }: { area: ResearchItem }) => {
    return (
        <div className="bg-black border border-neutral-700 
            w-96 h-136 flex flex-col rounded-lg text-white shadow-md mx-auto p-6">
            <div className="relative w-full h-80 overflow-hidden rounded-lg flex items-center justify-center mb-6">
                <Image
                    src={area.image}
                    alt={area.title}
                    width={330}
                    height={216}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-neutral-100">{area.title}</h3>
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-neutral-600 rounded-sm overflow-hidden">
                        {area.icon || <div className="w-full h-full" />}
                    </div>
                </div>
                <p className="text-sm text-neutral-400 overflow-hidden text-ellipsis">
                    {area.description}
                </p>

            </div>
            <div className="mt-auto border-t border-neutral-800 text-center">
                <Link
                    href={`/research/${area.id}`}
                    className="inline-flex items-center justify-center mt-3 px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                >
                    READ MORE <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </div>
    )
}

export default ResearchCard;
