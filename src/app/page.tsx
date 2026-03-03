import dynamic from "next/dynamic";
import HeroCanvas from "@/components/HeroCanvas";

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
    loading: () => <div className="h-96 bg-black" />,
});
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
    loading: () => <div className="h-96 bg-black" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
    loading: () => <div className="h-96 bg-black" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => <div className="h-64 bg-black" />,
});

export default function Home() {
    return (
        <main className="w-full relative bg-[#050505]">
            {/* 1. Hero Section - Scroll Animation */}
            <HeroCanvas />

            {/* 2. About Us Section */}
            <AboutSection />

            {/* 3. Why Choose Us Section */}
            <FeaturesSection />

            {/* 4. Location & Instagram Section */}
            <ContactSection />

            {/* 5. Footer */}
            <Footer />
        </main>
    );
}
