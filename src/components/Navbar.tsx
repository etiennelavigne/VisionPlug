'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 text-white"
        >
            <div className="w-40 md:w-52 relative">
                <Image
                    src="/logo-white.png"
                    alt="Vision Logo"
                    width={200}
                    height={50}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="/" className="hover:opacity-70 transition-opacity">Accueil</a>
                <a href="/projets" className="hover:opacity-70 transition-opacity">Projets</a>
                <a href="#" className="hover:opacity-70 transition-opacity">À propos</a>
                <a href="#" className="bg-[#E3D5CA] text-neutral-950 px-6 py-2.5 rounded-full font-medium border border-transparent hover:bg-transparent hover:text-[#E3D5CA] hover:border-[#E3D5CA] hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(227,213,202,0.3)]">
                    Contact <span className="text-lg">→</span>
                </a>
            </div>

            <button className="md:hidden">
                {/* Mobile menu icon placeholder */}
                <div className="space-y-1.5 cursor-pointer">
                    <div className="w-6 h-0.5 bg-current"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                </div>
            </button>
        </motion.nav>
    );
}
