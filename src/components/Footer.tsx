import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#030303] text-white/60 pt-20 pb-10 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6">
                        <Image
                            src="/logo.png"
                            alt="Al Amir Logo"
                            width={120}
                            height={120}
                            className="drop-shadow-xl opacity-90 rounded-full object-cover"
                        />
                        <p className="text-sm font-light leading-relaxed max-w-sm">
                            The most authentic and premium biryani experience. Crafted with passion, served with royalty.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://www.instagram.com/alamirbiryani/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-medium text-lg">Explore</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="#about" className="hover:text-primary transition-colors duration-300">Our Story</a></li>
                            <li><a href="https://drive.google.com/file/d/1QZeUvniMhmWQfpLpHc6yfBIQSaIKPR1v/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">Menu</a></li>
                            <li><a href="#features" className="hover:text-primary transition-colors duration-300">Why Choose Us</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Timings */}
                    <div className="space-y-6">
                        <h4 className="text-white font-medium text-lg">Opening Hours</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li className="flex justify-between">
                                <span>Open All Week</span>
                                <span className="text-white/80">11:00 AM - 1:00 AM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Al Amir. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
