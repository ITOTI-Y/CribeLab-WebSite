import { TeamMemberItem } from "@/lib/api";
import { Code } from "lucide-react";
import Image from "next/image";

export default function ContributorCard({ member }: { member: TeamMemberItem }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative bg-neutral-700 rounded-full border-2 border-neutral-600 w-16 aspect-square">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Image src={member.image} alt={member.name} fill className="w-full h-full object-cover" />
                </div>
                <div className="absolute z-10 right-0 -bottom-1 w-6 aspect-square border-2 border-black rounded-full bg-neutral-600 p-1">
                    <Code className="w-full h-full text-white" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-white text-sm font-bold">{member.name}</h3>
                <p className="text-neutral-400 text-xs">{member.development_role}</p>
            </div>
        </div>

    );
}