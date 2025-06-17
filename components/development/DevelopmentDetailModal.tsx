"use client";

import { DevelopmentItem, placeholderImage } from "@/lib/api";
import { Zap, X } from 'lucide-react';
import Image from "next/image";
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

    if (!isVisible || !project) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 rounded-2xl z-30 bg-black/50 px-4 pt-20 pb-12 overflow-hidden transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
            onClick={handleBackdropClick}
            >
            <div className="relative w-full mx-auto xl:w-1/2 h-full rounded-2xl bg-neutral-900/70 overflow-hidden">
                <div className="absolute flex top-0.5 z-40 cursor-pointer right-0.5 items-center justify-center p-2 rounded-full hover:bg-black group/close">
                    <button onClick={handleClose}>
                        <X className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer text-white group-hover/close:rotate-90 transition-all duration-300" />
                    </button>
                </div>
                <div className="relative w-full h-2/5 overflow-hidden">
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
                        <p className="text-sm text-white line-clamp-3">{project?.description || ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}