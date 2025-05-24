"use client";

import { Link as ScrollLink } from "react-scroll";
import { MeanItem } from "@/lib/api";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

export default function Navigation({ meanItems }: { meanItems: MeanItem[] }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <nav className="hidden lg:flex space-x-8">
            {meanItems.map((item: MeanItem) => {
                if (isHomePage) {
                    if (item.sub_href.startsWith('/') && item.sub_href.includes('#')) {
                        return (
                            <ScrollLink
                                key={item.id}
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                                className="text-white hover:text-gray-300 px-2 py-1 transition-colors font-roboto font-medium cursor-pointer"
                            >
                                {item.label}
                            </ScrollLink>
                        );
                    } else {
                        return (
                            <NextLink
                                key={item.id}
                                href={item.sub_href}
                                className="text-white hover:text-gray-300 px-2 py-1 transition-colors font-roboto font-medium cursor-pointer"
                            >
                                {item.label}
                            </NextLink>
                        );
                    }
                } else {
                    return (
                        <NextLink
                            key={item.id}
                            href={item.sub_href}
                            className="text-white hover:text-gray-300 px-2 py-1 transition-colors font-roboto font-medium cursor-pointer"
                        >
                            {item.label}
                        </NextLink>
                    );
                }
            })}
        </nav>
    );
}
