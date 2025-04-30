"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ReadMoreButtonProps {
    href: string;
    text?: string;
}

export default function ReadMoreButton({ href, text }: ReadMoreButtonProps) {
    return (
        <Link 
            href={href}
            className="relative inline-flex items-center cursor-pointer outline-none border-0 bg-transparent p-0 font-inherit text-inherit w-48 group">
            <span className="relative flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full transition-all duration-300 ease-in-out group-hover:w-full">
                <div className="absolute left-0 group-hover:left-2 flex items-center justify-center w-12 h-12 transition-all duration-300 ease-in-out">
                    <ArrowRight className="w-5 h-5" />
                </div>
            </span>
            <span className="absolute left-16 text-[#282936] font-bold leading-normal text-center uppercase transition-all duration-800 ease-in-out group-hover:text-white">
                {text || "Read More"}
            </span>
        </Link>
    )
}
