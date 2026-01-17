'use client';

import { motion } from 'framer-motion';
import { Video, Camera, Plane } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "VIDEO",
        icon: Video,
        description: "Cinematic storytelling, commercial spots, and brand narratives edited to perfection."
    },
    {
        id: 2,
        title: "PHOTO",
        icon: Camera,
        description: "High-end editorial, event coverage, and portrait photography capturing the essence of the moment."
    },
    {
        id: 3,
        title: "DRONE",
        icon: Plane,
        description: "Aerial cinematography providing unique perspectives and breathtaking 4K panoramic views."
    }
];

export default function Services() {
    return (
        <section className="py-20 bg-neutral-950 text-white border-b border-neutral-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-4 group"
                        >
                            <div className="p-4 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-medium tracking-wide">{service.title}</h3>
                            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
