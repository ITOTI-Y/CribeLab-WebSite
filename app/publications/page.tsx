// TODO: 完成Publication页面
import { Metadata } from 'next';
import { getPublicationsData } from "@/lib/api";
import PublicationFrame from '@/components/publication/PublicationFrame';

export const metadata: Metadata = {
    title: 'All Publications | CRIBE Lab',
    description: 'Explore all of CRIBE Lab\'s publications',
}

export const dynamic = "force-dynamic";

export default async function PublicationsPage() {
    const [publicationsData] = await Promise.all([getPublicationsData()]);
    return (
        <main className="flex min-h-screen bg-black pt-16">
            <PublicationFrame publications={publicationsData} />
        </main>
    );
}