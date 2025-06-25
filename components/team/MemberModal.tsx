"use client";

import Image from "next/image";
import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { X } from "lucide-react";
import { TeamMemberItem } from "@/lib/api";

function CloseButton({ onClose }: { onClose: () => void }) {
    return (
        <Button isIconOnly onPress={onClose}>
            <div className="group relative w-8 aspect-square hover:bg-black/80 cursor-pointer
            transition-all duration-300 ease-in-out
            rounded-full flex items-center justify-center">
                <X
                    className="aspect-square text-black group-hover:text-white
                group-hover:rotate-180 transition-all duration-300 ease-in-out" />
            </div>
        </Button>
    )
}


export default function MemberModal({ isOpen, onOpenChange, member }: { isOpen: boolean, onOpenChange: () => void, member: TeamMemberItem }) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur" hideCloseButton={true}>
            <ModalContent
                className="bg-neutral-100 w-128 min-h-96 rounded-lg">
                {(onClose) => (
                    <div className="relative flex flex-col items-center justify-center p-6">
                        <div className="absolute top-0 right-0 p-2">
                            <CloseButton onClose={onClose} />
                        </div>
                        <div className="relative w-32 aspect-square rounded-full overflow-hidden">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <ModalHeader className="flex flex-col items-center justify-center pb-0">
                            <h1 className="text-2xl font-bold">{member.name}</h1>
                        </ModalHeader>
                        <ModalBody className="flex flex-col items-center justify-center">
                            {member.further_information ? (
                                <p className="text-sm text-center font-bold">
                                    {member.further_information}
                                </p>
                            ) : null}
                            <p className="text-sm text-gray-500 text-center">{member.role}</p>
                            <p className="text-md mt-6 text-center">
                                {member.description}
                            </p>
                        </ModalBody>
                        <ModalFooter className="flex flex-row items-center justify-center gap-8">
                            {member.email ? (
                                <Link href={`mailto:${member.email}`} className="flex flex-col items-center justify-center gap-1">
                                    <div className='w-6 h-6'>
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3108" fill="currentColor">
                                            <path d="M854.016 342.016l0-86.016-342.016 214.016-342.016-214.016 0 86.016 342.016 212.010667zM854.016 169.984q34.005333 0 59.008 25.984t25.002667 59.989333l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-683.989333 0q-34.005333 0-59.008-25.984t-25.002667-59.989333l0-512q0-34.005333 25.002667-59.989333t59.008-25.984l683.989333 0z" p-id="3109">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className='text-sm'>
                                        Email
                                    </span>
                                </Link>
                            ) : null}
                            {member.scholar ? (
                                <Link href={member.scholar} className="flex flex-col items-center justify-center gap-1">
                                    <div className='w-6 h-6'>
                                        <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                            <path d="M781.8 597s0 0.2 0.2 0.2c18.4 38.8 28.8 82.2 28.8 128C810.6 890.2 677 1024 512 1024s-298.6-133.8-298.6-298.6c0-45.8 10.4-89.2 28.8-128 3.4-7.2 7.2-14.4 11.2-21.4 8.8-15.2 18.8-29.4 30-42.6 54.8-65.2 137-106.6 228.8-106.6 67.2 0 129.2 22.2 179.2 59.8 18.2 13.8 34.8 29.4 49.6 47 11.2 13.2 21.2 27.6 30 42.6 4 6.8 7.6 14 11 21z m52.8-37.6c-60.2-116.8-182-196.8-322.6-196.8s-262.4 80-322.6 196.8L0 405.4 512 0l512 405.4-189.4 154.2z" p-id="4159">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className='text-sm'>
                                        Scholar
                                    </span>
                                </Link>
                            ) : null}
                            {member.scopus ? (
                                <Link href={member.scopus} className="flex flex-col items-center justify-center gap-1">
                                    <div className='w-6 h-6'>
                                        <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                            <path d="M222.305191 32.218144C120.012585 32.218144 35.439958 117.059255 35.439958 219.083377v598.452019c0 102.292606 84.841112 186.865233 186.865233 186.865233h598.452019c102.292606 0 186.865233-84.841112 186.865234-186.865233V219.351862c0-102.292606-84.841112-186.865233-186.865234-186.865234H222.305191z m97.191401 738.869428V265.799685h374.53592v86.720504H420.71526v111.689565h253.986366v85.109596h-253.986366v136.658626h281.908757v45.64237l20.673309 39.735711H319.496592z m0 0" p-id="4159">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className='text-sm'>
                                        Scopus
                                    </span>
                                </Link>
                            ) : null}
                        </ModalFooter>
                    </div>

                )}
            </ModalContent>
        </Modal>
    )
}