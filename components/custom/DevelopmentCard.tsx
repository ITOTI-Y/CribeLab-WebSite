"use client"
import Image from "next/image";
import { DevelopmentItem } from "@/lib/api";
import Link from "next/link";

export default function DevelopmentCard({ item }: { item: DevelopmentItem }) {

    return (
        <div className="flex flex-col w-80 h-96 mx-auto p-2">
            <Link href={item.url || ""}>
            <div className="relative w-full h-56 mx-auto rounded-lg overflow-hidden mb-6">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="99vw"
                />
            </div>
            <div>
                <h3 className='text-2xl font-bold line-clamp-1'>
                    {item.title}
                </h3>
                <p className="text-sm text-neutral-200 line-clamp-2 mt-4">
                    {item.description}
                </p>
            </div>
            </Link>
            {/* <div className="flex justify-start items-center mt-6 group/button">
                <Link
                    href={item.url || ""}
                    className="inline-flex items-center justify-center mt-3 px-6 py-3 border 
                        border-white text-sm font-medium rounded-full text-white 
                        hover:bg-white hover:text-black transition-colors duration-200"
                >
                    LEARN MORE
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                </Link>
            </div> */}
        </div>
    )
}