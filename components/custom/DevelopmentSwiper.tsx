'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import DevelopmentCard from './DevelopmentCard';
import { DevelopmentItem } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface DevelopmentSliderProps {
    developmentItems: DevelopmentItem[];
}

const DevelopmentSwiper = ({ developmentItems }: DevelopmentSliderProps) => {
    return (
        <div className="relative px-2 lg:px-10 mx-auto group/swiper">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={"auto"}
                loop={true}
                navigation={{
                    nextEl: '.research-swiper-button-next',
                    prevEl: '.research-swiper-button-prev',
                }}
                className="!pb-4"
            >
                {developmentItems.map((item) => (
                    <SwiperSlide key={item.id} className="!w-auto h-auto">
                        <DevelopmentCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="research-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2 bg-black bg-opacity-50 rounded-full
                     text-white hover:bg-opacity-75 transition-all duration-300 transform -translate-x-1/2 
                     opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:translate-x-0">
                <ChevronLeft className="w-8 h-8" />
            </div>

            <div className="research-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2 bg-black bg-opacity-50 rounded-full
                     text-white hover:bg-opacity-75 transition-all duration-300 transform translate-x-1/2
                     opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:translate-x-0">
                <ChevronRight className="w-8 h-8" />
            </div>
        </div>
    );
};

export default DevelopmentSwiper;