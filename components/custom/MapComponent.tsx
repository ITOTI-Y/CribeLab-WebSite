'use client'
import { Map, APILoader } from '@uiw/react-amap';

const API_KEY = process.env.NEXT_PUBLIC_AMAP_KEY;

export default function MapComponent() {
    if (!API_KEY) {
        return <div>Error: Amap Key Not Configured (NEXT_PUBLIC_AMAP_KEY)</div>;
    }

    return (
        <div className="relative w-full h-full flex flex-col justify-start">
            <APILoader akey={API_KEY}>
                <Map {...({ zoom: 18, center: [113.970741,22.590652], lang: "en", defaultType:1} as any)} />
            </APILoader>
            <p className='text-sm text-white bg-neutral-400'>
                Room 309, Builng H, Tsinghua Campus Shenzhen Uriversity Town, Shenzhen
            </p>
        </div>
    );
}