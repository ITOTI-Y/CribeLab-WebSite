import { getNewsData } from "@/lib/api";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function NewPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const all = await getNewsData();
    const detail = all.find(item => String(item.id) === id);

    const components = {
        a: (
            { ...props }: React.ComponentProps<'a'>) => {
            return <a
                className="text-blue-400 hover:text-blue-600 hover:underline underline-offset-2
                    transition-all duration-200 ease-in-out"
                {...props} />;
        },
        h1: ({ ...props }: React.ComponentProps<'h1'>) => {
            return <h1
                className="text-xl md:text-2xl lg:text-2xl font-bold text-white my-4
                    transition-all duration-200 ease-in-out"
                {...props} />;
        },
        h2: ({ ...props }: React.ComponentProps<'h2'>) => {
            return <h2
                className="text-lg md:text-xl lg:text-xl font-bold text-white my-4
                    transition-all duration-200 ease-in-out"
                {...props} />;
        }
    };

    if (!detail) return <div className="text-white p-8">Not found</div>;

    return (
        <main className="min-h-screen bg-black flex flex-col items-center pt-16 pb-16">
            <div className="flex flex-col w-full max-w-7xl mt-16 px-2 md:px-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <h1 className="flex-1 text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight text-center md:text-start">
                        {detail?.title}
                    </h1>
                    <div className="relative w-full md:w-xl aspect-video">
                        <Image
                            src={detail.image}
                            alt={detail.title}
                            fill
                            sizes="99vw"
                            className="object-cover rounded-xl p-2"
                        />
                    </div>
                </div>
                <div className="mt-10 px-2">
                    <div className="text-neutral-300 text-base md:text-lg">
                        <ReactMarkdown components={components}>{detail.description}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </main>
    );
}