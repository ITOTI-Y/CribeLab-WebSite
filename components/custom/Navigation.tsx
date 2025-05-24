"use client";

import { Link as ScrollLink } from "react-scroll";
import { MeanItem } from "@/lib/api";

export default function Navigation({ meanItems }: { meanItems: MeanItem[] }) {
  return (
    <nav className="hidden lg:flex space-x-8">
      {meanItems.map((item: MeanItem) => (
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
      ))}
    </nav>
  );
}
