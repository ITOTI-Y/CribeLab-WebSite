'use client';
import Image from "next/image";
import { TeamMemberItem } from "@/lib/api";

export default function FeaturedMemberCard({ member }: { member: TeamMemberItem }) {
    return (
        <div className="grid grid-cols-3 grid-rows-4 col-span-3 row-span-4 gap-4">
            <div className="flex flex-col col-span-3 row-span-1 gap-1">
                <span className="text-white text-md font-normal">
                    Mainly major in Parametric green building design research.
                </span>
                <span className="text-white text-md font-light">
                    · Building performance and thermal comfort
                </span>
                <span className="text-white text-md font-light">
                    · Climate Change and Urban Climate adaptability
                </span>
                <span className="text-white text-md font-light">
                    · Artificial intelligence and machine learning
                </span>
            </div>
            <div className="col-span-3 row-span-3 w-full h-[368px] relative rounded-lg bg-[rgba(95,99,109,0.4)] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="overflow-hidden w-full h-full">
                    <div className="relative w-full h-full -bottom-10 -right-5">
                        {member.image && (
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-contain object-right-top"
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>
                <div className="absolute top-0 left-0 mt-28 ml-10 flex items-center justify-center h-fit">
                    <h3 className="text-2xl font-bold text-white">
                        {member.name}
                    </h3>
                </div>
            </div>
        </div>)
}