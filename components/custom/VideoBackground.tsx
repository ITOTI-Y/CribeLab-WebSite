import React from "react";

export default function VideoBackground() {
    return (
        <div className="absolute h-full w-full inset-0 overflow-hidden">
            <div className="h-full w-full overflow-hidden">
                <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="relative z-1 w-full h-[calc(100%_+_72px)] object-cover
                [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_100%)]">
                <source src="/videos/background.webm" type="video/webm" />
                    <source src="/videos/background.mp4" type="video/mp4" />
                </video>
            </div>
            {/* <div className="absolute h-full w-full inset-0 bg-neutral-900/50 z-2" /> */}
        </div>
        
    )
}