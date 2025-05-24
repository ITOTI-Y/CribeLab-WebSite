"use client";
import { Search, Menu, X, Earth } from "lucide-react";

export default function NavigationButton({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="flex items-center space-x-3">
      <button className="text-white hover:text-gray-300 transition-colors">
        <Search size={20} />
      </button>
      <button className="text-white hover:text-gray-300 transition-colors">
        <Earth size={20} />
      </button>
      <button
        className="lg:hidden text-white hover:text-gray-300 transition-colors"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
