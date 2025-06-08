import Citation from "./custom/Citation";
import SubTitle from "./custom/SubTitle";
import DevelopmentSwiper from "./custom/DevelopmentSwiper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDevelopmentData } from "@/lib/api";


export default async function DevelopmentSection() {
    const developmentData = await getDevelopmentData();
    const subtitle = "DEVELOPMENT";
    const citation = "Building the tools for future discoveries"
    return (
        <section id="development" className="w-full py-20 bg-black">
            <div className="relative font-roboto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <SubTitle content={subtitle} />
                <Citation content={citation} />
                <DevelopmentSwiper developmentItems={developmentData} />
                <div className="flex justify-center items-center mt-5">
                    <Link
                        href={`/development`}
                        className="inline-flex items-center justify-center mt-3 px-6 py-3 border 
                        border-white text-md font-medium rounded-full bg-white text-black "
                    >
                        Discover more our Development
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                    </Link>
                </div>
            </div>
        </section>
    )
}