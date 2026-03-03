"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const FRAME_COUNT = 262;

export default function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0 to 1) to frame index (0 to 272)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        // High-Performance Keyframe Loading Strategy (Prevents 142MB bottleneck)
        const loadImages = async () => {
            const tempImages: HTMLImageElement[] = [];
            const keyframeInterval = 15; // Load every 15th frame first for ultra-fast rough animation

            // Function to load a specific frame
            const loadFrame = (i: number, isPriority = false) => {
                if (tempImages[i - 1]) return; // Already loading/loaded
                const img = new window.Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
                img.onload = () => {
                    setImages((prev) => {
                        const newImages = [...prev];
                        newImages[i - 1] = img;
                        return newImages;
                    });
                    if (i === 1) setImagesLoaded(true);
                };
                tempImages[i - 1] = img;
            };

            // 1. Priority: Load Frame 1 immediately
            loadFrame(1, true);

            // 2. Keyframes: Load every 15th frame to get the movement started
            for (let i = 1; i <= FRAME_COUNT; i += keyframeInterval) {
                loadFrame(i);
            }

            // 3. Background: Fill all other frames incrementally
            // We use a small delay or just let them fire to avoid blocking the main thread
            setTimeout(() => {
                for (let i = 1; i <= FRAME_COUNT; i++) {
                    loadFrame(i);
                }
            }, 100);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(frameIndex.get());
        };

        const renderFrame = (index: number) => {
            const currentFrame = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(index))
            );
            const img = images[currentFrame];
            if (!img || !img.complete) return;

            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );
            const x = canvas.width / 2 - (img.width / 2) * scale;
            const y = canvas.height / 2 - (img.height / 2) * scale;
            const width = img.width * scale;
            const height = img.height * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, width, height);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const unsubscribe = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => renderFrame(latest));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [imagesLoaded, images, frameIndex]);

    const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <div ref={containerRef} className="h-[400vh] w-full relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Instant Background Frame */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src="/sequence/ezgif-frame-001.jpg"
                        alt="Biryani Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10" />

                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="relative z-20 flex flex-col items-center text-center space-y-6 px-4 -mt-16 md:-mt-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 30 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Al Amir Logo"
                            width={180}
                            height={180}
                            className="mb-8 drop-shadow-2xl rounded-full object-cover border-4 border-primary/20"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 20 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-bold tracking-widest uppercase text-white drop-shadow-2xl"
                    >
                        Al Amir Biryani
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-primary text-xl md:text-3xl font-light tracking-[0.2em] italic max-w-2xl mx-auto"
                    >
                        Authentic Flavors, Premium Legacy
                    </motion.p>
                </motion.div>

                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                >
                    <span className="text-white/70 text-sm tracking-widest uppercase font-light">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
                        <motion.div
                            className="w-full h-1/2 bg-primary absolute top-0"
                            animate={{ y: [0, 64] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
