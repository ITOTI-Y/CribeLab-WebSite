"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/custom/Logo";
import VerticalMenu from "@/components/custom/VerticalMenu";
import { getMeanData, MeanItem} from "@/lib/api";
import Navigation from "@/components/custom/Navigation";
import NavigationButton from "@/components/custom/NavigationButton";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [meanItems, setMeanItems] = useState<MeanItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMeanData();
                setMeanItems(data);
            } catch (error) {
                console.error("Failed to fetch mean data:", error);
            }
        };
        fetchData();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Logo />
                    <Navigation meanItems={meanItems}/>
                    <NavigationButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
            {isMenuOpen && (
                    <VerticalMenu meanItems={meanItems} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            )}
        </header>
    );
};