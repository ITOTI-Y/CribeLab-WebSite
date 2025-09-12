// TODO: 换为Email,scopus, Google Scholar, Team，Research，Development子页面
// TODO: 中文界面

import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import TeamSection from "@/components/TeamSection";
import Contributor from "@/components/ContributorSection";
import NewsSection from "@/components/NewsSection";
import JoinSection from "@/components/JoinSection";
import { getPublicationsData } from "@/lib/api";

export const dynamic = "force-dynamic";

/**
 * 渲染网站首页的异步服务器组件。
 *
 * 该组件在服务端并行获取出版物数据（通过 getPublicationsData），将结果传入 PublicationsSection，并按固定顺序渲染页面各个子区块：HeroSection、NewsSection、ResearchSection、PublicationsSection、DevelopmentSection、TeamSection、JoinSection 和 Contributor。
 *
 * 注意：组件本身不做错误处理；来自 getPublicationsData 的错误会向上抛出并由调用方处理。
 *
 * @returns 返回用于渲染整页布局的 React 节点（JSX.Element）。
 */
export default async function Home() {
    const [publicationsData] = await Promise.all([getPublicationsData()]);
    return (
        <main className="flex flex-col items-center min-h-screen bg-black text-white">
            <HeroSection />
            <NewsSection />
            <ResearchSection />
            <PublicationsSection publications={publicationsData} />
            <DevelopmentSection />
            <TeamSection/>
            <JoinSection />
            <Contributor />
        </main>
    );
}
