'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import NewCard from './NewCard';
import { NewItem } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewSliderProps {
    newsItems: NewItem[];
}

export default function NewSwiper({ newsItems }: NewSliderProps) {
    return(
        <div className="relative mx-auto group/swiper">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={"auto"}
                freeMode={true}
                loop={true}
                grabCursor={true}
                navigation={{
                    nextEl: '.new-swiper-button-next',
                    prevEl: '.new-swiper-button-prev',
                }}
                className="!pb-12"
            >
                {newsItems.map((news) => (
                    <SwiperSlide key={news.id} className="!w-auto h-auto">
                        <NewCard newItem={news} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="new-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2 bg-black bg-opacity-50 rounded-full
                     text-white hover:bg-opacity-75 transition-all duration-300 transform -translate-x-20
                     opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:-translate-x-10">
                <ChevronLeft className="w-8 h-8" />
            </div>

            <div className="new-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2 bg-black bg-opacity-50 rounded-full
                     text-white hover:bg-opacity-75 transition-all duration-300 transform translate-x-20
                     opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:translate-x-10">
                <ChevronRight className="w-8 h-8" />
            </div>
        </div>
    )
}