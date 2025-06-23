// app/publications/[slug]/page.tsx

import { getPublicationBySlug } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Calendar, ExternalLink, FileDown, Users } from 'lucide-react';

type Props = {
    params: Promise<{ slug: string }>;
};

function extractKeywordsFromText(text: string, minLength = 4): string[] {
    const stopWords = new Set([
        'the', 'a', 'an', 'and', 'in', 'on', 'for', 'of', 'with', 'to', 'is', 'are', 'was', 'were',
        'it', 'this', 'that', 'as', 'by', 'new', 'from', 'our'
    ]);

    return text
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter(word => word.length >= minLength && !stopWords.has(word));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const publication = await getPublicationBySlug(slug);

    if (!publication) {
        return {
            title: 'Publication Not Found',
        };
    }
    const keywordSet = new Set<string>();

    if (publication.authors) {
        publication.authors.split(',').forEach(author => keywordSet.add(author.trim()));
    }
    if (publication.journal) {
        keywordSet.add(publication.journal.trim());
    }
    if (publication.year) {
        keywordSet.add(publication.year);
    }

    if (publication.categories) {
        keywordSet.add(publication.categories.trim());
    }

    if (publication.title) {
        keywordSet.add(publication.title);
        extractKeywordsFromText(publication.title).forEach(word => keywordSet.add(word));
    }

    if (publication.summary) {
        extractKeywordsFromText(publication.summary).forEach(word => keywordSet.add(word));
    }

    return {
        title: `${publication.title} | CRIBE Lab Publications`,
        description: publication.abstract || publication.summary || 'Read more about this publication from CRIBE Lab.',
        keywords: Array.from(keywordSet),
    };
}

export default async function PublicationDetailPage({ params }: Props) {
    const slug = (await params).slug;
    const publication = await getPublicationBySlug(slug);

    if (!publication) {
        notFound();
    }

    return (
        <main className="pt-16 min-h-screen bg-black w-full text-white font-Roboto">
            <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-11 gap-4 py-6 px-2">
                <div className="flex flex-col col-span-1 lg:col-span-7 p-4 lg:p-2 items-center lg:items-start">
                    <div className="text-sm italic text-[#3897F8] border-[1px] border-[#0F1C42] rounded-full px-4 py-1 w-fit">
                        {publication.categories}
                    </div>
                    <div className="w-full">
                        <h1 className="text-2xl lg:text-4xl font-bold mt-6 text-center lg:text-left">
                            {publication.title}
                        </h1>
                    </div>
                    <div className="flex w-full flex-col lg:flex-row items-start gap-4 text-sm text-neutral-400 mt-4">
                        <div className="flex gap-2 items-center justify-start">
                            <Users className="w-4 h-4" />
                            <p className="flex-1">
                                {publication.authors}
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <p className="flex-1">
                                    {publication.year}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <p className="flex-1">
                                    {publication.journal}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="lg:hidden mt-6 flex flex-col w-full bg-[#121827] border-[1px] border-[#202937] rounded-lg overflow-hidden">
                        <div className="relative w-full aspect-video">
                            <Image
                                src={publication.thumbnail}
                                alt={publication.title}
                                fill
                                className="object-cover w-full aspect-square" />
                        </div>
                        <p className="text-sm text-neutral-400 px-4 p-2">
                            {publication.thumbnail_describe}
                        </p>
                    </div>
                    <div className="mt-6 w-full border-[1px] border-[#202937] bg-[#090C13] rounded-lg p-6">
                        <h2 className="text-2xl font-bold">
                            Summary
                        </h2>
                        <p className="text-lg text-neutral-200 mt-3">
                            {publication.summary}
                        </p>
                    </div>
                    <div className="mt-6 w-full">
                        <h2 className="text-2xl font-bold">
                            Abstract
                        </h2>
                        <p className="text-md text-neutral-200 mt-3">
                            {publication.abstract}
                        </p>
                    </div>
                    <div className="mt-6 w-full">
                        <h2 className="text-2xl font-bold">
                            Article Content
                        </h2>
                        <div className="mt-3">
                            <div className="h-128 flex flex-col justify-center items-center border-[1px] border-[#202937] bg-[#05070C] border-dashed rounded-lg p-6">
                                <h3 className="text-lg text-neutral-400 text-center">
                                    Typing...
                                </h3>
                                <p className="text-md text-neutral-400 mt-2 text-center">
                                    The full content is currently under development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 items-center lg:items-start p-4 lg:p-0">
                    <div className="hidden lg:flex flex-col w-full bg-[#121827] border-[1px] border-[#202937] rounded-lg overflow-hidden">
                        <div className="relative w-full aspect-video">
                            <Image
                                src={publication.thumbnail}
                                alt={publication.title}
                                fill
                                className="object-cover w-full aspect-square" />
                        </div>
                        <p className="text-sm text-neutral-400 px-4 p-2">
                            {publication.thumbnail_describe}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full bg-[#090C13] border-[1px] border-[#202937] rounded-lg p-6">
                        <h2 className="text-2xl font-bold">
                            Publication Details
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <p className="text-md text-neutral-400">
                                    Journal
                                </p>
                                <p className="text-lg  text-neutral-200">
                                    {publication.journal}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md text-neutral-400">
                                    Publication Year
                                </p>
                                <p className="text-lg  text-neutral-200">
                                    {publication.year}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md text-neutral-400">
                                    Authors
                                </p>
                                <p className="text-lg  text-neutral-200">
                                    {publication.authors}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md text-neutral-400">
                                    Categories
                                </p>
                                <p className="text-lg  text-neutral-200">
                                    {publication.categories}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 items-center justify-center">
                        <Link
                            href={publication.pdf || ''}
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-blue-500 text-lg text-white px-4 py-4 rounded-lg w-full text-center hover:bg-blue-700 transition-all duration-300"
                            download
                        >
                            <FileDown className="w-5 h-5" />
                            Download full paper
                        </Link>
                        <Link
                            href={publication.url || ''}
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-gray-800 text-lg text-white px-4 py-4 rounded-lg w-full text-center hover:bg-gray-600 transition-all duration-300"
                            download
                        >
                            <ExternalLink className="w-5 h-5" />
                            View on journal website
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

