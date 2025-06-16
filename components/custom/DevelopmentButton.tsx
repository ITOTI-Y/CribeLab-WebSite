import React from "react";
import Link from "next/link";

interface ButtonProps {
    href: string;
    content: string;
    className?: string;
}

const DevelopmentButton: React.FC<ButtonProps> = ({ href, content, className }) => {
    return (
        <div className={`${className} w-full flex justify-center items-center`}>
            <div className="font-bold text-xl relative group">
                <div className="absolute left-0 bottom-0.5 w-full h-full bg-black group-hover:-translate-y-full transition-all duration-300 ease-in-out" />
                <div className="absolute left-1.5 right-1.5 bottom-0.5 h-full bg-black delay-200 group-hover:scale-x-0 transition-all duration-300" />

                <Link href={href}>
                <div className="mx-1 border-2">
                    <p className="relative mx-3 my-3 z-50">
                        {content}
                    </p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default DevelopmentButton;