'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
        >
            <div className="text-2xl font-bold tracking-tighter">VISION</div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                <a href="#" className="hover:opacity-70 transition-opacity">WORK</a>
                <a href="#" className="hover:opacity-70 transition-opacity">ABOUT</a>
                <a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a>
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
