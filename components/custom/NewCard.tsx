"use client";
import { NewItem } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function NewCard({ newItem }: { newItem: NewItem }) {
    return (
        <div className="w-80 aspect-square bg-neutral-900 rounded-md overflow-hidden cursor-pointer group
            ">
            <Link href={`/new/${newItem.id}`} target="_blank" aria-label={newItem.title}>
            <div className="relative w-full h-60 group-hover:scale-102 transition-all duration-200 ease-in-out">
                <Image
                    src={newItem.image}
                    alt={newItem.title}
                    fill
                    sizes="99vw"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-1 mt-2 px-2 ">
                <h3 className="text-md font-bold text-neutral-400 line-clamp-1 
                group-hover:text-neutral-100 transition-all duration-200 ease-in-out">
                    {newItem.title}
                </h3>
                <p className="text-sm text-neutral-700 line-clamp-1
                group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
                    {newItem.date}
                </p>
            </div>
            </Link>
        </div>
    );
}