"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const FRAME_COUNT = 273;

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

    // Map scroll progress (0 to 1) to frame index (1 to 273)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    useEffect(() => {
        // Preload images with streaming priority
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];

            // Initiating loading for all 273 frames
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new window.Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;

                if (i === 1) {
                    img.onload = () => {
                        // Ensure images array is set before revealing canvas
                        setImages(loadedImages);
                        setImagesLoaded(true);
                    };
                }

                loadedImages.push(img);
            }
            // Final update to ensure state is synced with the full array
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions based on the first image aspect ratio, then scale to screen
        const firstImg = images[0];
        const aspectRatio = firstImg.width / firstImg.height;

        // We update canvas internal resolution to match screen size to keep it sharp
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(frameIndex.get());
        };

        const renderFrame = (index: number) => {
            const currentFrame = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(index) - 1)
            );
            const img = images[currentFrame];
            if (!img) return;

            // Calculate scale to "cover" the canvas while keeping aspect ratio
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

        // Initial render
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Subscribe to framer-motion scroll updates
        const unsubscribe = frameIndex.on("change", (latest) => {
            // Use requestAnimationFrame for smoother rendering
            requestAnimationFrame(() => renderFrame(latest));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [imagesLoaded, images, frameIndex]);

    // Overlay opacity decreases as user scrolls down
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <div ref={containerRef} className="h-[400vh] w-full relative bg-black">
            {/* Sticky container holds the canvas and text overlay */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Instant First Frame Placeholder - Optimized for LCP */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <Image
                        src="/sequence/ezgif-frame-001.png"
                        alt="Biryani Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Canvas background */}
                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Cinematic gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10" />

                {/* Text Overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="relative z-20 flex flex-col items-center text-center space-y-6 px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 30 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Al Amir Logo"
                            width={200}
                            height={200}
                            className="mb-8 drop-shadow-2xl rounded-full object-cover"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 20 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                        Al Amir Biryani
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imagesLoaded ? 1 : 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-primary text-xl md:text-2xl font-light tracking-wide italic max-w-xl mx-auto drop-shadow-md"
                    >
                        The Most Authentic & Premium Experience
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
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
