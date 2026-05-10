'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-2 py-4 md:py-2 md:px-4 text-white"
        >
            <a href="/" className="-ml-2 md:-ml-6 h-28 md:h-56 w-72 md:w-[40rem] relative block z-50">
                <Image
                    src="/logo-white.png"
                    alt="Vision Logo"
                    width={200}
                    height={50}
                    className="w-full h-full object-contain object-left"
                    priority
                />
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="/" className="hover:opacity-70 transition-opacity">Accueil</a>
                <a href="/projets" className="hover:opacity-70 transition-opacity">Projets</a>
                <a href="/contact" className="bg-[#E3D5CA] text-neutral-950 px-6 py-2.5 rounded-full font-medium border border-transparent hover:bg-transparent hover:text-[#E3D5CA] hover:border-[#E3D5CA] hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(227,213,202,0.3)]">
                    Contact <span className="text-lg">→</span>
                </a>
            </div>

            <button 
                className="md:hidden z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
            >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-2xl font-medium"
                    >
                        <a href="/" className="hover:text-orange-200 transition-colors" onClick={() => setIsOpen(false)}>Accueil</a>
                        <a href="/projets" className="hover:text-orange-200 transition-colors" onClick={() => setIsOpen(false)}>Projets</a>
                        <a href="/contact" className="hover:text-orange-200 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
