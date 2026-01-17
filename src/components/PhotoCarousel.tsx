'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const photos = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784424-fa00ed49fc44?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c7dd1?q=80&w=1000&auto=format&fit=crop",
];

// Calculate approximate width of one set of items to know when to wrap
// We have 6 items: 3 are 300px, 3 are 500px.
// Total width = (3 * 300) + (3 * 500) = 900 + 1500 = 2400px
// Plus gaps: 6 items * 24px (gap-6) = 144px
// Total set width ≈ 2544px
const ONE_SET_WIDTH = 2544;

export default function PhotoCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((time, delta) => {
        if (!isDragging) {
            // Move left by a fraction of delta (time since last frame)
            // Adjust divisor to change speed (higher = slower)
            const moveBy = -delta / 25;
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
        <section className="py-24 bg-neutral-900 overflow-hidden relative border-t border-neutral-800">

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
            <div className="relative w-full cursor-grab active:cursor-grabbing" ref={containerRef}>
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
                    {[...photos, ...photos, ...photos].map((src, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02] ${index % 6 === 0 || index % 6 === 2 || index % 6 === 4
                                ? 'w-[300px] h-[450px]'
                                : 'w-[500px] h-[450px]'
                                }`}
                        >
                            <Image
                                src={src}
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
