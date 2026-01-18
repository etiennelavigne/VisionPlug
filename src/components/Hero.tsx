'use client';

import { motion } from 'framer-motion';
import { Video, Camera, Plane, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-neutral-950">
      {/* Hero Card with Rounded Bottom */}
      <div className="relative w-full min-h-[90vh] bg-neutral-900 rounded-b-[3rem] md:rounded-b-[5rem] px-6 pt-32 pb-12 md:px-16 flex flex-col justify-between overflow-hidden shadow-2xl shadow-neutral-900/50">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-4.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        </div>

        {/* Floating Abstract Shape / Person Placeholder */}
        {/* If we had the photo, it would go here centrally/right */}
        {/* <div className="absolute right-0 bottom-0 h-full w-1/2 bg-black/10 z-0" /> */}

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center">

          {/* Top Label */}


          <div className="flex flex-col md:flex-row gap-12 items-end">
            {/* Big Title Mixed Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-7xl md:text-9xl font-bold text-white tracking-tight leading-[0.9]"
            >
              Vision<br />
              <span className="font-[family-name:var(--font-handwritten)] font-normal ml-4 text-8xl md:text-[10rem] text-orange-200">Plug</span>
            </motion.h1>

            {/* Right Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:w-1/3 mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                L'art de capturer l'instant.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                De la conception à la réalisation, nous créons des visuels qui marquent les esprits.
                Laissez votre identité s'exprimer.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Services Columns */}
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-16 md:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
            {[
              { id: "01", title: "Stratégie de Marque", icon: Sparkles },
              { id: "02", title: "Production Vidéo", icon: Video },
              { id: "03", title: "Photographie", icon: Camera },
              { id: "04", title: "Prises de vue Drone", icon: Plane },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="text-white"
              >
                <div className="flex items-center gap-2 mb-2 text-orange-200/80 font-mono text-sm">
                  <item.icon className="w-4 h-4" /> <span>{item.id}</span>
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
