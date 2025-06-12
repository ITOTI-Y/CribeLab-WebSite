import { getResearchData } from "@/lib/api";
import ReadMoreButton from "@/components/custom/ReadMoreButton";
import Image from "next/image";

export default async function ResearchDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const all = await getResearchData();
    const detail = all.find(item => String(item.id) === id);

    if (!detail) return <div className="text-white p-8">Not found</div>;

    return (
        <div className="min-h-screen bg-black flex flex-col items-center pt-32 pb-24">
            {/* 详情页标题 */}
            <h2 className="text-4xl font-bold text-white mb-10">
                RESEARCH - {detail.title}
            </h2>
            <div className="bg-black border border-neutral-600 rounded-xl shadow-lg px-10 py-8 w-full max-w-[1300px] flex flex-row items-start gap-10">
                {/* 左侧图片，横向比例，图片可裁剪填满 */}
                <div className="relative flex-shrink-0 w-[400px] aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                        src={detail.image}
                        alt={detail.title}
                        fill
                        sizes="99vw"
                        className="object-cover"
                    />
                </div>
                {/* 右侧内容 */}
                <div className="flex flex-col justify-center flex-1">
                    <h1 className="text-2xl font-bold text-white mb-4">{detail.title}</h1>
                    <div className="text-neutral-300 text-base">{detail.description}</div>
                    {/* Read More 按钮 */}
                    <div className="flex justify-end mt-8">
                        <ReadMoreButton href={`/research/${detail.id}/detail`} text="Read More" />
                    </div>
                </div>
            </div>
        </div>
    );
}