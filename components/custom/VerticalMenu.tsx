"use client";
import { MeanItem } from "@/lib/api";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function VerticalMenu({
    meanItems,
    toggleMenu,
    isMenuOpen,
}: {
    meanItems: MeanItem[];
    toggleMenu: () => void;
    isMenuOpen: boolean;
}) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <div className="lg:hidden bg-black">
            <div
                className={`transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                                        onClick={toggleMenu}
                                        className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md font-roboto font-medium cursor-pointer"
                                    >
                                        {item.label}
                                    </ScrollLink>
                                );
                            } else {
                                return (
                                    <NextLink
                                        key={item.id}
                                        href={item.sub_href}
                                        onClick={toggleMenu}
                                        className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md font-roboto font-medium cursor-pointer"
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
                                    onClick={toggleMenu}
                                    className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md font-roboto font-medium cursor-pointer"
                                >
                                    {item.label}
                                </NextLink>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
