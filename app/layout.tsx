import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytic";

export const metadata: Metadata = {
    title: "CRIBE Lab",
    description: "LAB OF CLIMATE RESPONSIVE AND INTELLIGENT BUILT ENVIRONMENT",
};
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased flex flex-col">
                <Suspense fallback={null}>
                    <GoogleAnalytics />
                </Suspense>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
