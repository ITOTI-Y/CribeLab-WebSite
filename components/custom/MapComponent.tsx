'use client'
import { Map, APILoader, type MapProps } from '@uiw/react-amap';

const API_KEY = process.env.NEXT_PUBLIC_AMAP_KEY;

// The defaultType prop is not included in the official MapProps, so we extend it.
interface CustomMapProps extends MapProps {
    zoom?: number;
    center?: [number, number];
    lang?: 'zh_cn' | 'en' | 'zh_en';
    defaultType?: number;
}

export default function MapComponent() {
    if (!API_KEY) {
        return <div>Error: Amap Key Not Configured (NEXT_PUBLIC_AMAP_KEY)</div>;
    }

    const mapOptions: CustomMapProps = {
        zoom: 18,
        center: [113.970741, 22.590652],
        lang: "en",
        defaultType: 1,
    };

    return (
        <div className="relative w-full h-full flex flex-col justify-start">
            <APILoader akey={API_KEY}>
                <Map {...mapOptions} />
            </APILoader>
            <p className='text-sm text-white bg-neutral-400'>
                Room 309, Builng H, Tsinghua Campus Shenzhen Uriversity Town, Shenzhen
            </p>
        </div>
    );
}