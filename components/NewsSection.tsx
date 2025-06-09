import { getNewsData } from "@/lib/api";
import NewCard from "@/components/custom/NewCard";
import Subtitle from "@/components/custom/SubTitle";

const  NewsSection = async () => {
    const newsItems = await getNewsData();
    return (
        <section id="news" className="w-full py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Subtitle content="NEWS" />
                <div>
                    {newsItems.map((news) => (
                        <NewCard key={news.id} newItem={news} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default NewsSection;
