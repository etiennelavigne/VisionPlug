'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* Background Gradient/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/90 z-10" />

      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-neutral-900 opacity-50" />
        {/* TODO: Add video or image background here */}
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          VISION CAPTURED
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light"
        >
          Cinematic storytelling through the lens. Minimalist aesthetics for bold identities.
        </motion.p>
      </div>
    </section>
  );
}
