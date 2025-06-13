// lib/gtag.ts

// 从环境变量中读取衡量ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// 定义 pageview 函数，用于上报页面浏览
export const pageview = (url: string) => {
    // 确保GA_TRACKING_ID存在，并且gtag函数也存在于window对象上
    if (!GA_TRACKING_ID || typeof window.gtag !== 'function') {
        return;
    }
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// 定义通用的事件上报函数
type GtagEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
};

export const event = ({ action, category, label, value }: GtagEvent) => {
    // 确保gtag函数存在于window对象上
    if (typeof window.gtag !== 'function') {
        return;
    }
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};