"use client";
import Image from "next/image";
import { TeamMemberItem } from "@/lib/api";

export default function MemberCard({ member }: { member: TeamMemberItem }) {
    console.log(member);
    return (
        <div className="relative col-span-1 row-span-1 bg-slate-900 rounded-md overflow-hidden">
            {member.image && (
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            )}
        </div>
    );
}
