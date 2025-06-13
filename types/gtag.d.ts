// global.d.ts

interface Gtag {
    (command: 'config', targetId: string, params?: { [key: string]: unknown }): void;
    (command: 'event', action: string, params?: { [key: string]: unknown }): void;
    (command: 'js', config: Date): void;
}

interface Window {
    gtag: Gtag;
}