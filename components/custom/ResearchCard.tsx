"use client";
import { Image } from "@heroui/image";
// import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";
import { ResearchItem } from "@/lib/api";

const ResearchCard = ({ area }: { area: ResearchItem }) => {
  return (
    <div
      key={area.id}
      className="bg-neutral-900 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="h-48 relative bg-neutral-800 overflow-hidden">
        {area.image && (
          <Image
            src={area.image}
            alt={area.title}
            isZoomed
            width={384}
            height={192}
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 relative flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{area.description}</p>
        <ReadMoreButton href={`/research/${area.id}`} text="READ MORE" />
      </div>
    </div>
  );
};

export default ResearchCard;
