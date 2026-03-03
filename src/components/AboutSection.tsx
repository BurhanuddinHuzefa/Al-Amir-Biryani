"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image side - For now using a placeholder aesthetic div since no specific image was provided except logo/animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 group bg-black/50 flex items-center justify-center p-8"
                    >
                        <Image
                            src="/logo.png"
                            alt="Al Amir Biryani - Our Story"
                            fill
                            className="object-contain p-12 drop-shadow-2xl opacity-90"
                        />
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                                Our Story
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-light leading-tight">
                                A Legacy of <br />
                                <span className="font-serif italic text-primary">Flavors & Spices</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                            <p>
                                At Al Amir, biryani is crafted with tradition, passion, and precision. Our recipes are inspired by authentic cooking methods, using premium basmati rice, fresh ingredients, and a carefully balanced blend of spices to create rich, unforgettable flavor.
                            </p>
                            <p>
                                Every layer is prepared with care, from perfectly cooked rice to tender meat infused with aromatic masalas. We never rush the process because true taste comes from patience and experience.
                            </p>
                            <p>
                                We maintain strict hygiene standards in our kitchen and use only high-quality ingredients selected daily. Our commitment to cleanliness, authenticity, and the perfect spice balance ensures that every bite delivers warmth, depth, and satisfaction.
                            </p>
                        </div>

                        <motion.a
                            href="https://drive.google.com/file/d/1QZeUvniMhmWQfpLpHc6yfBIQSaIKPR1v/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mt-8 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-300 tracking-wider uppercase text-sm"
                        >
                            Discover the Menu
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
