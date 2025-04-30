import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import JoinSection from "@/components/JoinSection";
import { getPublicationsData } from "@/lib/api";


export default async function Home() {
    const [publicationsData] = await Promise.all([getPublicationsData()]);
    return (
        <main className="flex flex-col items-center min-h-screen bg-black text-white">
            <HeroSection />
            <ResearchSection /* researchAreas={researchData} */ />
            {/* 将获取到的数据作为 prop 传递 */}
            <PublicationsSection publications={publicationsData} />
            <TeamSection /* teamMembers={teamData} */ />
            
            <JoinSection />
        </main>
    );
}
