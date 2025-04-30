import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.cribelab.org',
            },
        ],
    },
    allowedDevOrigins: ['100.64.116.13'],
};

export default nextConfig;
