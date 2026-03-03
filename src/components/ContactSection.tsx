"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-24 md:py-32 bg-[#050505] text-white relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                        Visit Us
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white">
                        Location & Contact
                    </h3>
                    <p className="text-white/60 font-light text-lg">
                        Experience the royal taste of Al Amir in person or connect with us online.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Details & Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-10 bg-[#0f0f0f] p-8 md:p-12 rounded-2xl border border-white/5"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Our Restaurant</h4>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        W2GJ+FP9, Block A North Nazimabad Town<br />
                                        Karachi, 74700, Pakistan
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium mb-2">Opening Hours</h4>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        Open All Week<br />
                                        11:00 AM – 1:00 AM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                            <a
                                href="https://www.instagram.com/alamirbiryani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity duration-300 shadow-[0_0_20px_rgba(214,36,159,0.2)]"
                            >
                                <Instagram size={20} />
                                Follow Us on Instagram
                            </a>
                        </div>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
                    >
                        <div className="w-full h-full min-h-[500px] bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1749858496664!2d67.03182699999999!3d24.926108100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f006a025a4b%3A0x7c6f517533b1da03!2sAl%20Amir%20Biryani%20%26%20Pulao%20Center!5e0!3m2!1sen!2siq!4v1772415272679!5m2!1sen!2siq"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "500px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
