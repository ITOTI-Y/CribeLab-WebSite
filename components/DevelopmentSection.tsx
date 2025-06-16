// TODO: Discover more our Development 部分未完成

import Citation from "./custom/Citation";
import SubTitle from "./custom/SubTitle";
import DevelopmentSwiper from "./custom/DevelopmentSwiper";
import DevelopmentButton from "./custom/DevelopmentButton";
import { getDevelopmentData } from "@/lib/api";


export default async function DevelopmentSection() {
    const developmentData = await getDevelopmentData();
    const subtitle = "DEVELOPMENT";
    const citation = "Building the tools for future discoveries"
    return (
        <section id="development" className="w-full py-20 bg-black overflow-x-hidden">
            <div className="relative font-roboto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <SubTitle content={subtitle} />
                <Citation content={citation} />
                <DevelopmentSwiper developmentItems={developmentData} />
                <DevelopmentButton href="/development" content="Discover more" className="mt-3" />
            </div>
        </section>
    )
}