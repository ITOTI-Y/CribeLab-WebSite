import { getNewsData } from "@/lib/api";
import NewSwiper from "./custom/NewSwiper";
import Subtitle from "@/components/custom/SubTitle";

const  NewsSection = async () => {
    const newsItems = await getNewsData();
    return (
        <section id="new" className="w-full py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Subtitle content="NEWS" />
                <div>
                    <NewSwiper newsItems={newsItems} />
                </div>
            </div>
        </section>
    );
};


export default NewsSection;
