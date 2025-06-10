'use client'
import { useMemo, useRef, useState } from 'react';
import { Map, APILoader, type MapProps } from '@uiw/react-amap';
import { Home } from 'lucide-react'; // 可选：使用图标

const API_KEY = process.env.NEXT_PUBLIC_AMAP_KEY;

// The defaultType prop is not included in the official MapProps, so we extend it.
interface CustomMapProps extends MapProps {
    zoom?: number;
    center?: [number, number];
    lang?: 'zh_cn' | 'en' | 'zh_en';
    defaultType?: number;
}

export default function MapComponent() {
    const mapRef = useRef<any>(null);
    
    // 定义初始位置常量
    const INITIAL_CENTER: [number, number] = [113.970741, 22.590652];
    const INITIAL_ZOOM = 18;
    
    // 将 useMemo 移到组件顶部，在任何条件返回之前
    const mapOptions: CustomMapProps = useMemo(() => ({
        zoom: INITIAL_ZOOM,
        center: INITIAL_CENTER,
        lang: "en",
        defaultType: 1,
    }), []); // 空依赖数组意味着它只会在组件首次渲染时创建一次

    // 重置到初始位置的函数
    const resetToInitialPosition = () => {
        if (mapRef.current && mapRef.current.map) {
            const map = mapRef.current.map;
            
            // 方法1: 使用高德地图原生 API 方法
            map.setCenter(INITIAL_CENTER);
            map.setZoom(INITIAL_ZOOM);
            
            // 方法2: 如果你想要平滑过渡效果，可以使用：
            // map.panTo(INITIAL_CENTER);
            // map.setZoom(INITIAL_ZOOM);
        }
    };

    // 条件检查移到 Hooks 调用之后
    if (!API_KEY) {
        return <div>Error: Amap Key Not Configured (NEXT_PUBLIC_AMAP_KEY)</div>;
    }

    return (
        <div className="relative w-full h-full flex flex-col justify-start">
            <APILoader akey={API_KEY} version="2.0">
                <Map 
                    {...mapOptions} 
                    ref={mapRef}
                />
            </APILoader>
            
            {/* 重置按钮 */}
            <button
                onClick={resetToInitialPosition}
                className="absolute top-4 right-4 z-10 
                           bg-white hover:bg-gray-100 text-gray-800 
                           px-3 py-2 rounded-md shadow-md border border-gray-300
                           flex items-center gap-2 text-sm font-medium
                           transition-colors duration-200"
                title="Reset to initial position"
            >
                <Home size={16} />
            </button>
            
            <p className='text-sm text-white bg-neutral-400'>
                Room 309, Building H, Tsinghua Campus Shenzhen University Town, Shenzhen
            </p>
        </div>
    );
}