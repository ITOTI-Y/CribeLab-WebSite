import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
    title: "Cribelab",
    description: "LAB OF CLIMATE RESPONSIVE AND INTELLIGENT BUILT ENVIRONMENT",
};
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
