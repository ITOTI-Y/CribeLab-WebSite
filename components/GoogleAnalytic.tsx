// components/GoogleAnalytics.tsx
'use client'; // 标记为客户端组件

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';
import { GA_TRACKING_ID, pageview } from '@/lib/gtag'; // 确保路径正确

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // 如果没有衡量ID，则不执行任何操作
        if (!GA_TRACKING_ID) return;

        // 拼接路径和查询参数
        const url = pathname + searchParams.toString();
        pageview(url);

    }, [pathname, searchParams]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}