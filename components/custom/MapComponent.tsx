'use client'
import { useMemo } from 'react'; // 引入 useMemo
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
    // 将 useMemo 移到组件顶部，在任何条件返回之前
    const mapOptions: CustomMapProps = useMemo(() => ({
        zoom: 18,
        center: [113.970741, 22.590652],
        lang: "en",
        defaultType: 1,
    }), []); // 空依赖数组意味着它只会在组件首次渲染时创建一次

    // 条件检查移到 Hooks 调用之后
    if (!API_KEY) {
        return <div>Error: Amap Key Not Configured (NEXT_PUBLIC_AMAP_KEY)</div>;
    }

    return (
        <div className="relative w-full h-full flex flex-col justify-start">
            <APILoader akey={API_KEY}>
                {/* 
                  这里是关键。当 mapOptions 稳定时，
                  <Map> 组件不会因为父组件的不必要重渲染而重新挂载，
                  这可以减少触发严格模式问题的机会。
                */}
                <Map {...mapOptions} />
            </APILoader>
            <p className='text-sm text-white bg-neutral-400'>
                Room 309, Building H, Tsinghua Campus Shenzhen University Town, Shenzhen
            </p>
        </div>
    );
}