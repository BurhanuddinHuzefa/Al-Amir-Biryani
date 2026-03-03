"use client";

import { motion, Variants } from "framer-motion";
import { Leaf, ChefHat, Sparkles, Tag } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "Locally sourced, premium quality meat and farm-fresh vegetables selected daily.",
    },
    {
        icon: ChefHat,
        title: "Authentic Recipes",
        description: "Traditional cooking methods and secret spice blends passed down through generations.",
    },
    {
        icon: Sparkles,
        title: "Hygienic Kitchen",
        description: "Maintained to the highest cleanliness standards ensuring safe and healthy meals.",
    },
    {
        icon: Tag,
        title: "Reasonable Prices",
        description: "Exceptional dining experience and generous portions at fair, accessible prices.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    },
};

export default function FeaturesSection() {
    return (
        <section id="features" className="w-full py-24 bg-black relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                        Why Choose Us
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white">
                        The Al Amir Standard
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-primary/30 transition-colors duration-500 group"
                            >
                                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-xl font-medium text-white mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-white/60 font-light leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    );
}
