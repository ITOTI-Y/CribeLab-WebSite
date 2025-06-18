"use client";

import { DevelopmentItem, placeholderImage } from "@/lib/api";
import { Zap, X, Star, GitFork, Eye, Download, Calendar, Users, File, Github } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function DevelopmentDetailModal({ isOpen, onClose, project }: { isOpen: boolean, onClose: () => void, project: DevelopmentItem | null }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const openTimer = useRef<NodeJS.Timeout | null>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

    const handleClose = useCallback(() => {
        setIsAnimating(false);
        // 清除任何可能存在的关闭定时器，以防重复调用
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }
        closeTimer.current = setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    useEffect(() => {
        // 步骤 2: 在 useEffect 开始时，清除所有旧的定时器
        // 这是防止竞态条件的关键
        if (openTimer.current) {
            clearTimeout(openTimer.current);
        }
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        if (isOpen) {
            setIsVisible(true);
            openTimer.current = setTimeout(() => {
                setIsAnimating(true);
            }, 10);
        } else {
            // 当 isOpen 变为 false 时，我们直接开始退场动画
            setIsAnimating(false);
            closeTimer.current = setTimeout(() => {
                setIsVisible(false);
            }, 300);
        }

        // 步骤 3: 返回一个清理函数
        // 这个函数会在组件卸载或 isOpen 变化导致 useEffect 重新运行时执行
        return () => {
            if (openTimer.current) {
                clearTimeout(openTimer.current);
            }
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
            }
        };
    }, [isOpen]); // 依赖数组保持不变

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const statsCards = [
        {
            icon: Star,
            iconClassName: "w-5 h-5 text-yellow-500",
            iconFill: "currentColor",
            value: 12847,
            label: "Stars"
        },
        {
            icon: GitFork,
            iconClassName: "w-5 h-5 text-neutral-400",
            value: 2392,
            label: "Forks"
        },
        {
            icon: Eye,
            iconClassName: "w-5 h-5 text-neutral-400",
            value: 1284,
            label: "Watchers"
        },
        {
            icon: Download,
            iconClassName: "w-5 h-5 text-neutral-400",
            value: 32000,
            label: "Downloads"
        }
    ];

    if (!isVisible || !project) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 rounded-2xl z-30 bg-black/50 px-4 pt-20 pb-12 overflow-hidden transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
            onClick={handleBackdropClick}
        >
            <div className="relative w-full mx-auto max-w-210 h-full rounded-2xl bg-[#181F2E] overflow-hidden flex flex-col">
                <div className="absolute flex top-0.5 z-40 cursor-pointer right-0.5 items-center justify-center p-2 rounded-full hover:bg-black group/close">
                    <button onClick={handleClose}>
                        <X className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer text-white group-hover/close:rotate-90 transition-all duration-300" />
                    </button>
                </div>
                <div className="relative w-full h-2/6 overflow-hidden flex-shrink-0">
                    <Image
                        src={project?.image || placeholderImage}
                        alt={project?.title || placeholderImage}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
                    <div className="absolute bottom-0 left-0 flex flex-col items-start justify-center p-4 gap-2">
                        <div className="flex items-center justify-center h-full bg-black/50 rounded-md px-2 py-1">
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="text-sm font-bold">
                                Energy
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-white">{project?.title || ""}</h1>
                        <p className="text-sm text-white line-clamp-2">{project?.description || ""}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full p-6 gap-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-track-[#1C2532] scrollbar-thumb-[#384151] hover:scrollbar-thumb-[#4A5568]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                        {statsCards.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center w-full h-full p-4 bg-[#1C2532] rounded-md border-[1px] border-[#384151] 
                                    transition-all duration-500 ease-out ${isAnimating
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-6'
                                        }`}
                                    style={{
                                        transitionDelay: isAnimating ? `${100 + index * 100}ms` : '0ms'
                                    }}
                                >
                                    <IconComponent
                                        className={card.iconClassName}
                                        fill={card.iconFill || "none"}
                                    />
                                    <p className="text-2xl text-white font-bold mt-2">
                                        {card.value.toLocaleString()}
                                    </p>
                                    <p className="text-md text-neutral-400">
                                        {card.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={`flex flex-col gap-2 delay-100 transition-all duration-500 ease-in-out
                    ${isAnimating
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-6'
                            }`}>
                        <h2 className="text-2xl font-bold text-white">
                            About This Project
                        </h2>
                        <p className="text-md text-neutral-400 w-full border-[1px] border-[#384151] rounded-md p-4">
                            {project?.description || ""}
                        </p>
                    </div>
                    <div>
                        <div className={`flex flex-col gap-2 delay-100 transition-all duration-500 ease-in-out
                    ${isAnimating
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                            }`}>
                            <h2 className="text-2xl font-bold text-white">
                                Project Information
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className={`flex flex-col items-start justify-center w-full h-full p-4 bg-[#1C2532] rounded-md border-[1px] border-[#384151] 
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-neutral-400" />
                                        <p className="text-sm text-neutral-400">
                                            Last Updated
                                        </p>
                                    </div>
                                    <p className="text-md text-white mt-2">
                                        3 days ago
                                    </p>
                                </div>
                                <div className={`flex flex-col items-start justify-center w-full h-full p-4 bg-[#1C2532] rounded-md border-[1px] border-[#384151] 
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-neutral-400" />
                                        <p className="text-sm text-neutral-400">
                                            Contributors
                                        </p>
                                    </div>
                                    <p className="text-md text-white mt-2">
                                        45 developers
                                    </p>
                                </div>
                                <div className={`flex flex-col items-start justify-center w-full h-full p-4 bg-[#1C2532] rounded-md border-[1px] border-[#384151] 
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <File className="w-4 h-4 text-neutral-400" />
                                        <p className="text-sm text-neutral-400">
                                            License
                                        </p>
                                    </div>
                                    <p className="text-md text-white mt-2">
                                        MIT
                                    </p>
                                </div>
                                <div className={`flex flex-col items-start justify-center w-full h-full p-4 bg-[#1C2532] rounded-md border-[1px] border-[#384151] 
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <Github className="w-4 h-4 text-neutral-400" />
                                        <p className="text-sm text-neutral-400">
                                            Repository
                                        </p>
                                    </div>
                                    <p className="text-md text-white mt-2">
                                        Public
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link 
                        className="flex items-center justify-center w-full h-full bg-white rounded-lg p-4 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
                        href={project?.url || ""}>
                            <Github className="w-5 h-5 text-black" />
                            <p className="text-sm text-black ml-2 font-bold">
                                View on Github
                            </p>
                        </Link>
                        <Link
                        className="flex items-center justify-center w-full h-full bg-[#1C2532] border-[1px] border-[#384151] rounded-lg p-4 hover:-translate-y-1 hover:scale-105 hover:bg-[#384151] transition-all duration-300 ease-in-out"
                        href={project?.url + "/archive/refs/heads/main.zip" || ""}>
                            <Download className="w-5 h-5 text-white" />
                            <p className="text-sm text-white ml-2 font-bold">
                                Download
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}