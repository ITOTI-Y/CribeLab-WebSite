import { getResearchData } from "@/lib/api";

export default async function ResearchDetailSubPage({ params }: { params: { id: string } }) {
  const all = await getResearchData();
  const detail = all.find(item => String(item.id) === params.id);

  if (!detail) return <div className="text-white p-8">Not found</div>;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-24 pb-24">
      <div className="w-full max-w-[1400px]">
        {/* 上方：标题和图片 */}
        <div className="flex flex-row-reverse items-start bg-black rounded-xl shadow-lg px-10 pt-16 pb-8 gap-16">
          {/* 右侧图片 */}
          <div className="flex-shrink-0 w-[500px] aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={detail.image}
              alt={detail.title}
              className="object-cover w-full h-full"
            />
          </div>
          {/* 左侧标题和时间 */}
          <div className="flex-1 h-[375px] flex flex-col justify-between">
            <h1 className="text-5xl font-bold text-white leading-tight">{detail.title}</h1>
            <span className="text-neutral-500 text-lg">
              Jul X, 2025
            </span>
          </div>
        </div>
        {/* 下方：正文描述 */}
        <div className="mt-10 px-10">
          <div className="text-white text-2xl font-bold mb-6" style={{textAlign: "left"}}>
            ABSTRACT
          </div>
          <div className="text-neutral-300 text-xl">{detail.description}</div>
        </div>
      </div>
    </div>
  );
}