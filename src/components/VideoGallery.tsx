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
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-video w-full ${project.color} rounded-sm overflow-hidden relative mb-4`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                {/* Placeholder for video thumbnail */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">View Project</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold group-hover:text-neutral-300 transition-colors">{project.title}</h3>
                            <p className="text-sm text-neutral-500">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
