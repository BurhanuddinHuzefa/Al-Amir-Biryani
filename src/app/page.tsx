import HeroCanvas from "@/components/HeroCanvas";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
