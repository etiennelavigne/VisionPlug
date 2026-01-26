'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Send, ArrowDownRight } from 'lucide-react';
import Image from 'next/image';

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

    return (
        <main className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] selection:bg-[#E3D5CA] selection:text-neutral-950 overflow-hidden">
            <Navbar />

            <div className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0">

                {/* Visual / Photo Section (Left) - Arched Pill & Rotating Text */}
                <div className="w-full lg:w-1/2 relative min-h-[60vh] lg:min-h-screen order-1 lg:order-none flex items-center justify-center overflow-hidden lg:fixed lg:left-0 lg:top-0">

                    {/* Giant Offset Eye Logo Background */}
                    <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.04] pointer-events-none">
                        <Image
                            src="/pattern-eye.png"
                            alt="Vision Eye"
                            fill
                            className="object-contain animate-spin-slow-reverse"
                        />
                    </div>

                    {/* Main Pill Composition */}
                    <div className="relative">

                        {/* Rotating Text Ring */}
                        {/* Rotating Text Ring - Foreground & Elliptical */}
                        {/* Rotating Text Ring - Foreground & Elliptical */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -m-16 z-20 pointer-events-none"
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                                <path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                                <text fontSize="14" fontWeight="bold" fill="#E3D5CA" letterSpacing="4px" className="uppercase font-mono">
                                    <textPath href="#textPath" startOffset="0%" textLength="502" lengthAdjust="spacingAndGlyphs">FILMMAKER - DIGITAL CREATIVE - PHOTOGRAPHER -</textPath>
                                </text>
                            </svg>
                        </motion.div>

                        {/* Photo Pill */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[280px] h-[400px] lg:w-[320px] lg:h-[480px] bg-neutral-900 rounded-[160px] overflow-hidden shadow-2xl border border-white/10 z-10"
                        >
                            <Image
                                src="/contact-portrait.jpg"
                                alt="Portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Dark Overlay for readability */}
                            <div className="absolute inset-0 bg-black/40" />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating Badge (Centered Bottom like reference) */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20"
                        >
                            <div className="bg-[#E3D5CA] text-neutral-950 px-8 py-3 rounded-full shadow-xl flex items-center gap-3 whitespace-nowrap">
                                <div className="w-2 h-2 bg-neutral-950 rounded-full animate-pulse" />
                                <span className="text-sm font-bold uppercase tracking-widest">Open to work</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Content / Form Section (Right) */}
                <div className="w-full lg:w-1/2 ml-auto px-6 py-12 lg:px-24 lg:pb-24 lg:pt-48 order-2 lg:order-none flex flex-col justify-center relative z-10">

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
                                Une idée ? Une collaboration ? N'hésitez pas à m'écrire.
                                Je suis toujours à la recherche de nouveaux défis créatifs.
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
