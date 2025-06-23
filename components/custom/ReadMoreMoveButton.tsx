import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ReadMoreButtonProps {
    href: string;
    text?: string;
    className?: string;
}

export default function ReadMoreMoveButton({ href, text, className }: ReadMoreButtonProps) {
    return (
        <Link
            href={href}
            className={`flex justify-center gap-1 items-center shadow-xl text-sm bg-netural-500 
            backdrop-blur-md isolation-auto border-gray-50 relative font-light 
            px-4 py-2 overflow-hidden border-1 rounded-full group bg-white text-black w-fit ${className}`}>
            {text || "Read More"}
            <div className="flex ml-2 w-5 h-5 justify-center items-center border-1 rounded-full 
                border-neutral-800 bg-white group-hover:border-white transition-all duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-600" />
            </div>
            <div className="absolute top-0 left-0 bg-emerald-500 w-0 group-hover:w-full h-full transition-all duration-300 -z-10" />
        </Link>
    );
}
