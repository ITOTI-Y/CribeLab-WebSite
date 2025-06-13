import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'data.cribelab.org',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
    allowedDevOrigins: ['100.64.116.13', 'localhost', '100.83.249.139'],
};

export default nextConfig;
