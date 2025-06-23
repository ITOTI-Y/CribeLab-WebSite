import { PublicationItem } from "@/lib/api";
import Image from "next/image";
import ReadMoreMoveButton from "@/components/custom/ReadMoreMoveButton";
import NextLink from "next/link";

export default function PublicationDetailCard({ publication }: { publication: PublicationItem }) {
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
            <div className="@container text-md font-bold py-2 h-24 w-full">
                <h2 className="[font-size:clamp(4px,4.5cqi,32px)] leading-tight h-full w-full">
                    {publication.title}
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 py-2">
                <div className="flex flex-col text-sm font-thin italic">
                    <span className="font-bold">Authors:</span>
                    <div className="@container pt-1 h-12 w-full overflow-hidden">
                        <p
                            className="[font-size:clamp(8px,4cqi,12px)]"
                        >
                            {publication.authors}
                        </p>
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
                <ReadMoreMoveButton
                    href={`/publications/${publication.slug}`}
                    text="Read More"
                    className=""
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