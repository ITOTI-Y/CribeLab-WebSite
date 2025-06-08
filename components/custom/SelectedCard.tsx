import React from "react";
import Link from "next/link";
import Image from "next/image"; // 引入 Next.js Image 组件
import type { PublicationItem } from "@/lib/api"; // 假设你的接口定义在这里

// 1. 更新 Props 接口定义
interface SelectedCardProps {
  publication: PublicationItem; // 接收一个 PublicationItem 类型的对象
  className?: string; // className 设为可选
}

// 辅助函数：安全地渲染 HTML (可选，但推荐)
// 注意：这里只做了基础处理，如果 WP 内容可能不安全，应使用 DOMPurify 等库
const renderHTML = (htmlString: string | undefined | null) => {
  if (!htmlString) return { __html: "" };
  // 你可以在这里添加清理逻辑 if needed
  return { __html: htmlString };
};

// 2. 更新组件实现
export const SelectedCard = ({
    publication,
    className,
}: SelectedCardProps) => {
    return (
        <Link href={publication.url || "#"} className={`overflow-hidden hover:opacity-80 transition-opacity duration-300 flex flex-row w-full items-start gap-4 relative ${className}`}>
            {/* 3. 图片容器 */}
            <div className="flex w-40 h-32 bg-neutral-800 relative overflow-hidden rounded-sm">
                {" "}
                {/* 添加 flex-shrink-0 防止被压缩, overflow-hidden 和背景色 */}
                {publication.thumbnail ? (
                    // 使用 next/image 显示图片
                    <Image
                        src={publication.thumbnail}
                        alt={publication.title || "Publication thumbnail"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover" // 保持图片比例并覆盖容器
                    />
                ) : (
                    // 如果没有图片，可以显示占位符或留空
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                        No Image
                    </div>
                )}
            </div>

            {/* 4. 文本内容 */}
            <div className="flex-1 flex flex-col justify-between h-32 pt-1">
                <div>
                    <p
                        className="font-medium text-sm text-white leading-snug" // 例如：中等字重、小号字体、白色、行距紧凑
                        dangerouslySetInnerHTML={renderHTML(publication.title)}
                    >
                        {/* 内容由 dangerouslySetInnerHTML 设置 */}
                    </p>
                    <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                        {publication.summary || "No summary available."}
                    </p>
                </div>
                <p className="text-xs text-gray-500">
                    {publication.authors || "Unknown authors"}
                </p>
            </div>
        </Link>
    );
};
