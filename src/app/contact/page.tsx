'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import Image from 'next/image';

// Marquee Component for the background text
const Marquee = ({ text, direction = 1, speed = 15 }: { text: string, direction?: number, speed?: number }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap opacity-10 select-none absolute top-1/2 -translate-y-1/2 w-full">
            <motion.div
                className="flex gap-8 text-[12rem] lg:text-[20rem] font-bold uppercase leading-none text-white font-[family-name:var(--font-geist-sans)]"
                animate={{ x: direction * -1000 }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {Array(4).fill(text).map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
    };

    // Parallax Logic
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <main className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-[#E3D5CA] selection:text-neutral-950 overflow-hidden">
            <Navbar />

            <div className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0" ref={containerRef}>

                {/* Visual / Photo Section (Left) */}
                <div className="w-full lg:w-1/2 relative min-h-[60vh] lg:min-h-screen order-1 lg:order-none flex items-center justify-center bg-[#1a1a1a] overflow-hidden lg:fixed lg:left-0 lg:top-0">

                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                    {/* Marquee Background */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                        <Marquee text="VISION PRODUCTION FILMS " speed={40} />
                    </div>

                    {/* Circular Photo Container */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] bg-neutral-900 rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 group"
                    >
                        <div className="absolute inset-2 rounded-full overflow-hidden bg-neutral-800">
                            <Image
                                src="/contact-portrait.jpg"
                                alt="Portrait"
                                fill
                                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                priority
                            />
                            <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Orbiting Elements */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute -top-4 -right-4 lg:top-0 lg:right-0 bg-[#E3D5CA] text-neutral-950 p-4 rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-4 border-[#1a1a1a]"
                        >
                            <div className="text-center leading-none">
                                <span className="block font-bold text-xl">50+</span>
                                <span className="text-[10px] uppercase font-bold tracking-wider">Projets</span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: y1 }}
                            className="absolute -bottom-8 -left-4 lg:bottom-10 lg:-left-10 bg-neutral-950 text-white border border-white/20 p-3 rounded-xl backdrop-blur-md shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs uppercase tracking-widest font-medium">Open to work</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Content / Form Section (Right) */}
                <div className="w-full lg:w-1/2 ml-auto bg-neutral-950 px-6 py-12 lg:px-24 lg:pb-24 lg:pt-40 order-2 lg:order-none flex flex-col justify-center relative z-10">

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl mx-auto w-full space-y-12"
                    >
                        {/* Header */}
                        <div className="space-y-4">
                            <h5 className="text-[#E3D5CA] font-medium tracking-widest text-sm uppercase">Contact</h5>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tight">
                                Parlons de votre <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Projet.</span>
                            </h1>
                            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                                Une idée ? Une collaboration ? N'hésitez pas à m'écrire. Je suis toujours à la recherche de nouveaux défis créatifs.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="mailto:vision.production34000@gmail.com" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-sm font-medium">
                                <Mail size={16} /> <span>Email</span>
                            </a>
                            <a href="https://www.instagram.com/_vision_plug/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-sm font-medium">
                                <Instagram size={16} /> <span>Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/etienne-lavigne-76024519a/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-sm font-medium">
                                <Linkedin size={16} /> <span>LinkedIn</span>
                            </a>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Nom</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#E3D5CA] transition-colors placeholder:text-neutral-600"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#E3D5CA] transition-colors placeholder:text-neutral-600"
                                        placeholder="email@exemple.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    id="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#E3D5CA] transition-colors resize-none placeholder:text-neutral-600"
                                    placeholder="Parlez-moi de votre projet..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center gap-3 bg-white text-neutral-950 px-10 py-5 rounded-full font-bold hover:bg-[#E3D5CA] transition-all duration-300 mt-4 text-lg"
                            >
                                <span>Envoyer le message</span>
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Footer only */}
            <div className="lg:hidden">
                <Footer />
            </div>
        </main>
    );
}
