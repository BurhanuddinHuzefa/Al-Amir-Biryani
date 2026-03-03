import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="en">
            <body className="antialiased font-sans bg-background text-foreground min-h-screen selection:bg-primary selection:text-black">
                {children}
            </body>
        </html>
    );
}
