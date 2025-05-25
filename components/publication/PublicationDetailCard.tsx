import { PublicationItem } from "@/lib/api";
import Image from "next/image";
import { useState } from "react";
import { Textfit } from 'react-textfit';
import PublicationReadMoreButton from "@/components/publication/PublicationReadMoreButton";
import NextLink from "next/link";

export default function PublicationDetailCard({ publication }: { publication: PublicationItem }) {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div
            className="flex flex-col w-[360px] h-[528px] py-4 px-4
            bg-neutral-800 text-white
            hover:bg-gray-100 rounded-sm transition-colors duration-300
            hover:text-black"
        >
            <div className="text-sm font-thin italic h-4">
                {publication.year} | {publication.journal}
            </div>
            <div className="text-md font-bold py-2 h-24 w-full">
                <Textfit
                    mode="multi" // For multi-line text
                    max={32}     // Optional: maximum font size in px
                    min={8}      // Optional: minimum font size in px
                    style={{ height: '100%', width: '100%' }} // Textfit will fill this container
                // className="font-bold" // You can apply styling to Textfit too
                >
                    {publication.title}
                </Textfit>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex flex-col text-sm font-thin italic">
                    <span className="font-bold">Authors:</span>
                    <div className="pt-1 h-12 w-full overflow-hidden">
                        <Textfit
                            mode="multi" // For multi-line text
                            max={12}     // Optional: maximum font size in px
                            min={8}      // Optional: minimum font size in px
                            style={{ height: '100%', width: '100%' }} // Textfit will fill this container
                        // className="font-bold" // You can apply styling to Textfit too
                        >
                            {publication.authors}
                        </Textfit>
                    </div>
                </div>
                <div className="flex flex-col text-sm font-thin italic">
                    <span className="font-bold">Categories:</span>
                    <div className="pt-1 h-12 w-full overflow-hidden">
                        <Textfit
                            mode="multi" // For multi-line text
                            max={12}     // Optional: maximum font size in px
                            min={8}      // Optional: minimum font size in px
                            style={{ height: '100%', width: '100%' }} // Textfit will fill this container
                        // className="font-bold" // You can apply styling to Textfit too
                        >
                            {publication.categories}
                        </Textfit>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-sm h-[200px]">
                <Image
                    src={publication.thumbnail}
                    alt={publication.title}
                    fill
                    className="object-hidden" />
            </div>
            <div className="flex justify-between items-center py-8 px-1">
                <PublicationReadMoreButton 
                    href={publication.url || ""}
                    text="Read More"
                />
                <NextLink 
                    href={publication.pdf || ""}
                    className="py-2 px-4 rounded-md text-sm bg-neutral-700 text-white font-extralight cursor-pointer">
                    Download
                </NextLink>
            </div>
        </div>
    );
}