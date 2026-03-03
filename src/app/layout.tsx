import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Al Amir Biryani | Authentic & Premium Experience",
    description: "Experience the most authentic and premium biryani at Al Amir.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased font-sans bg-background text-foreground min-h-screen selection:bg-primary selection:text-black">
                {children}
            </body>
        </html>
    );
}
