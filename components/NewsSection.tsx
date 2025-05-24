import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/data";

const NewsSection = () => {
  return (
    <section id="news" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          NEWS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-3 border-b border-gray-800">
                <time className="text-xs text-gray-400">12/04/2025</time>
              </div>
              <div className="h-48 relative bg-neutral-800">
                {news.image && (
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-md font-medium text-white mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{news.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            READ MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
