'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const photos = [
    // Rotated to start with 13534823.jpg
    { src: "/carousel/pexels-vision-plug-310264943-13534823.jpg", width: 718 }, // ~16:10 (Landscape)
    { src: "/carousel/pexels-vision-plug-310264943-34759904.jpg", width: 338 }, // 3:4 (Moved earlier)
    { src: "/carousel/pexels-vision-plug-310264943-13739810.jpg", width: 312 }, // ~2:3
    { src: "/carousel/pexels-vision-plug-310264943-34759586.jpg", width: 338 }, // 3:4
    { src: "/carousel/pexels-vision-plug-310264943-13987140.jpg", width: 305 }, // ~2:3
    { src: "/carousel/pexels-vision-plug-310264943-34760100.jpg", width: 300 }, // 2:3
    { src: "/carousel/pexels-vision-plug-310264943-13741351.jpg", width: 300 }, // 2:3
    { src: "/carousel/DSC02070.jpg", width: 300 }, // ~2:3 (Separated)
    { src: "/carousel/pexels-vision-plug-310264943-34759590.jpg", width: 338 }, // 3:4
    { src: "/carousel/pexels-vision-plug-310264943-14281584.jpg", width: 800 }, // 16:9 (Landscape)
    { src: "/carousel/pexels-vision-plug-310264943-13987144.jpg", width: 300 }, // 2:3
    { src: "/carousel/A7309638.jpg", width: 300 }, // 2:3 (Separated)
    { src: "/carousel/DSC04153.jpg", width: 300 }, // 2:3 (Moved later)
];

// Calculate approximate width of one set of items
// Sum of widths: 300+300+300+338+800+300+300+338+718+300+312+338+305 = 4949px
// Plus gaps: 13 items * 24px (gap-6) = 312px
// Total set width = 5261px
const ONE_SET_WIDTH = 5261;

export default function PhotoCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.1 }); // Start when 10% visible
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((time, delta) => {
        if (!isDragging && isInView) {
            // Move left by a fraction of delta (time since last frame)
            // Adjust divisor to change speed (higher = slower)
            // 8 is fast
            const moveBy = -delta / 8;
            let newX = x.get() + moveBy;

            // Infinite loop logic:
            // If we've scrolled past the width of one full set of items, reset position seamlessly
            // We adding a buffer to be safe, but resetting by ONE_SET_WIDTH should be visually seamless 
            // if the DOM patterns match.
            if (newX <= -ONE_SET_WIDTH) {
                newX += ONE_SET_WIDTH;
            }

            x.set(newX);
        }
    });

    return (
        <section className="py-24 bg-neutral-900 overflow-hidden relative border-t border-neutral-800" ref={containerRef}>

            {/* Header */}
            <div className="container mx-auto px-6 md:px-16 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PHOTOGRAPHIE</h2>
                    <div className="h-1 w-20 bg-orange-200" />
                </div>
                <a
                    href="https://www.pexels.com/fr-fr/@vision-plug-310264943/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 text-white/70 hover:text-orange-200 transition-colors group"
                >
                    <span className="uppercase text-sm tracking-widest">Voir la galerie complète</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>

            {/* Draggable Container */}
            <div className="relative w-full cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-6 px-6"
                    style={{ x, width: "max-content" }}
                    drag="x"
                    // We don't want hard constraints that stop the drag, 
                    // but we need the user to be able to pull it. 
                    // Without constraints, motion can drift indefinitely. 
                    // We rely on the frame loop to reset 'x' so it effectively has no bounds.
                    dragConstraints={{ left: -10000, right: 10000 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {/* Render triple set to ensure screen coverage during loop reset */}
                    {[...photos, ...photos, ...photos].map((photo, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02] h-[450px]"
                            style={{ width: photo.width }}
                        >
                            <Image
                                src={photo.src}
                                alt={`Photo ${index}`}
                                fill
                                className="object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Visual Gradients */}
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none" />
            </div>

            {/* Mobile Button */}
            <div className="flex md:hidden justify-center mt-8 px-6">
                <a
                    href="https://www.pexels.com/fr-fr/@vision-plug-310264943/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 border border-white/20 rounded-full text-white/80 uppercase text-sm"
                >
                    Voir la galerie externe
                </a>
            </div>

        </section>
    );
}
