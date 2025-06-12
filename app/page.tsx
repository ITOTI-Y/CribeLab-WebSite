// TODO: 换为Email,scopus, Google Scholar, Team，Research，Development子页面
// TODO: 中文界面

import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection"; // eslint-disable-line
import JoinSection from "@/components/JoinSection";
import { getPublicationsData } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
    const [publicationsData] = await Promise.all([getPublicationsData()]);
    return (
        <main className="flex flex-col items-center min-h-screen bg-black text-white">
            <HeroSection />
            <ResearchSection />
            <PublicationsSection publications={publicationsData} />
            <DevelopmentSection />
            <TeamSection /* teamMembers={teamData} */ />
            {/* <NewsSection /> */}
            <JoinSection />
        </main>
    );
}
