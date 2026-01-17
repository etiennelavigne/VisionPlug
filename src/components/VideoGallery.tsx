'use client';

import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: "Urban Rhapsody", category: "Commercial", color: "bg-neutral-800" },
    { id: 2, title: "Silent Echoes", category: "Documentary", color: "bg-neutral-700" },
    { id: 3, title: "Neon Horizon", category: "Music Video", color: "bg-neutral-800" },
    { id: 4, title: "Abstract Flow", category: "Art/Experimental", color: "bg-neutral-900" },
    { id: 5, title: "Fashion Week", category: "Event", color: "bg-neutral-800" },
    { id: 6, title: "Culinary Journey", category: "Brand", color: "bg-neutral-700" },
];

export default function VideoGallery() {
    return (
        <section className="py-24 px-4 md:px-8 bg-neutral-950">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">SELECTED WORKS</h2>
                    <div className="h-1 w-20 bg-white/20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            {/* Background Image (Placeholder) */}
                            {/* Using Unsplash source for demo purposes as user requested "image style" */}
                            <div className={`absolute inset-0 bg-neutral-800`}>
                                <img
                                    src={`https://images.unsplash.com/photo-${[
                                        '1492691527719-9d1e07e534b4', // Landscape
                                        '1470071459604-3b5ec3a7fe05', // Nature
                                        '1447752875204-b2f9798c641c', // Forest
                                        '1472214103451-9374bd1c7dd1', // Nature 2
                                        '1465146344425-f00d5f5c8f07', // Dark
                                        '1518173946633-4da23fb077d8'  // Abstract
                                    ][index % 6]}?auto=format&fit=crop&w=800&q=80`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <p className="text-xs font-medium text-orange-200/80 mb-1 tracking-wider uppercase">{project.category}</p>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                                    <div className="bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
