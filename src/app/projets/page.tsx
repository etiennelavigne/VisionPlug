'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

// Extract unique categories
const categories = ["Tous", ...new Set(projects.map(p => p.category))];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const filteredProjects = selectedCategory === "Tous"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)]">
            <Navbar />

            <section className="pt-48 pb-24 px-4 md:px-8 bg-neutral-950 min-h-screen">
                <div className="container mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">RÉALISATIONS</h1>
                        <div className="h-1 w-20 bg-white/20 mb-8" />

                        {/* Filters */}
                        <div className="flex flex-wrap gap-4">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${selectedCategory === cat
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-white/60 border-white/20 hover:border-white hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedId(project.id)}
                                    className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-neutral-900"
                                >
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                    </div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-black bg-white rounded-full">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#E3D5ca] transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full"
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${projects.find(p => p.id === selectedId)?.videoId}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
