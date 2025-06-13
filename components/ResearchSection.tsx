import Citation from "./custom/Citation";
import SubTitle from "./custom/SubTitle";
import ResearchSwiper from "./custom/ResearchSwiper";
import { getResearchData } from "@/lib/api";


const ResearchSection = async () => {
    const citation =
        "Our lab focuses on advancing building performance, thermal comfort, and sustainability in the context of changing urban environments and climate dynamics.";
    const subtitle = "RESEARCH";
    const researchData = await getResearchData();

    return (
        <section id="research" className="w-full py-20 bg-black overflow-x-hidden">
            <div className="relative font-roboto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <SubTitle content={subtitle} />
                <Citation content={citation} />
                <ResearchSwiper researchAreas={researchData}/>

            </div>
        </section>
        
    );
};

export default ResearchSection;
