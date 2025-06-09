"use client";
import { NewItem } from "@/lib/api";
import Image from "next/image";

export default function NewCard({ newItem }: { newItem: NewItem }) {
    return (
        <div className="w-80 aspect-square bg-neutral-900">
            <div className="relative w-full h-60">
                <Image
                    src={newItem.image}
                    alt={newItem.title}
                    fill
                    sizes="99vw"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-1 mt-2 px-2">
                <h3 className="text-xl text-neutral-400 line-clamp-1">
                    {newItem.title}
                </h3>
                <p className="text-sm text-neutral-700 line-clamp-1">
                    {newItem.date}
                </p>
            </div>
        </div>
    );
}