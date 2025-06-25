"use client";

import Image from "next/image";
import MemberModal from "./MemberModal";
import { useDisclosure, Button } from "@heroui/react";
import { TeamMemberItem } from "@/lib/api";

export default function MemberCard({ member }: { member: TeamMemberItem }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div className="flex flex-col items-center justify-center">
            <Button onPress={onOpen} className="relative w-fit h-fit rounded-full bg-white p-0">
                <div className="relative w-32 lg:w-40 xl:w-48 aspect-square rounded-full overflow-hidden cursor-pointer">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover hover:scale-110 transition-all duration-300"
                    />
                </div>
            </Button>
            <MemberModal isOpen={isOpen} onOpenChange={onOpenChange} member={member} />
        </div>



        // <Button onPress={onOpen} className="group relative cursor-pointer">
        //     <div className="relative w-32 lg:w-40 xl:w-48 aspect-square rounded-full overflow-hidden mx-auto">
        //         <Image src={member.image} alt={member.name} fill sizes="99vw" className="object-cover mx-auto" />
        //     </div>

        //     <div className="absolute invisble hover:visible w-full h-full top-0 left-0 bg-neutral-50 rounded-lg duration-500 opacity-0 group-hover:opacity-70 transition-all">
        //         <div className="flex flex-col items-center justify-center h-full overflow-hidden p-4">
        //             <h3 className="text-2xl font-bold text-black">{member.name}</h3>
        //             <p className="text-sm text-black">{member.role}</p>
        //             <p className="text-sm text-black line-clamp-3">{member.description}</p>
        //         </div>
        //     </div>
        // </Button>
    );
}
