// components/MarkdownRenderer.tsx

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

import { remarkCustomCaptions } from '@/lib/remark-custom-captions';

export default async function MarkdownRenderer({ content}: { content: string, className?: string }) {
    const components = {
        h1: (
            { ...props }: React.ComponentProps<'h1'>) => {
            return <h1
                className="text-2xl font-bold my-6 text-left"
                {...props} />;
        },
        table: (
            { ...props }: React.ComponentProps<'table'>) => {
            return (
                <div className="w-full my-4 overflow-x-auto 
                scrollbar 
                scrollbar-thumb-rounded-full
                scrollbar-thumb-neutral-400/50
                scrollbar-track-neutral-400/10
                hover:scrollbar-thumb-neutral-400
                ">
                    <table
                        className="w-full text-sm text-center"
                        {...props} />
                </div>
            );
        },
        td: (
            { ...props }: React.ComponentProps<'td'>) => {
            return <td
                className="border border-gray-300 p-2"
                {...props} />;
        },
        img: (
            { ...props }: React.ComponentProps<'img'>) => {
            return (
                    <img
                        className="w-full h-full object-cover rounded-lg mt-4"
                        src={props.src as string}
                        alt={props.alt as string}
                        {...props} />
            );
        },
    }
    return (
        <ReactMarkdown
            remarkPlugins={[remarkMath, remarkCustomCaptions]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={components}
        >
            {content}
        </ReactMarkdown>
    )
}