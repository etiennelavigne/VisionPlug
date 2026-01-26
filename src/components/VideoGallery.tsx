
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { projects } from '@/data/projects';

export default function VideoGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 md:px-8 bg-neutral-950 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">DERNIÈRES RÉALISATIONS</h2>
                        <div className="h-1 w-20 bg-white/20" />
                    </div>

                    <a href="/projets" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                        <span className="uppercase tracking-widest text-sm">Voir tous les projets</span>
                        <Play className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            {/* Background Image */}
                            <div className={`absolute inset-0 bg-neutral-900`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${project.fit || 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Center Play Button (only visible on hover) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                    <Play className="w-6 h-6 text-white fill-current" />
                                </div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <p className="text-xs font-medium text-orange-200/80 mb-1 tracking-wider uppercase">{project.category}</p>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-black w-full max-w-5xl aspect-video rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${projects.find(p => p.id === selectedId)?.videoId}?autoplay=1`}
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
        </section>
    );
}
