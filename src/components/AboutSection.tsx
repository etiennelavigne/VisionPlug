'use client';

import { motion } from 'framer-motion';
import { Camera, Clapperboard, MonitorPlay } from 'lucide-react';

const services = [
    {
        icon: <Camera className="w-8 h-8 text-neutral-900" />,
        title: "Tournage",
        description: "Captation haute qualité 4K, drône, et matériel cinéma pour sublimer chaque plan."
    },
    {
        icon: <Clapperboard className="w-8 h-8 text-neutral-900" />,
        title: "Direction Artistique",
        description: "Scénarisation, moodboards et vision créative pour raconter votre histoire."
    },
    {
        icon: <MonitorPlay className="w-8 h-8 text-neutral-900" />,
        title: "Post-Production",
        description: "Montage dynamique, étalonnage (color grading) et sound design immersif."
    }
];

export default function AboutSection() {
    return (
        <section className="py-24 bg-[#E3D5CA] text-neutral-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            CRÉER L'IMPACT VISUEL.
                        </h2>
                        <div className="h-1.5 w-24 bg-neutral-900 mb-8" />

                        <p className="text-xl leading-relaxed font-medium mb-6">
                            Plus qu'un simple vidéaste, je suis un créateur d'histoires.
                        </p>
                        <p className="text-lg opacity-80 leading-relaxed mb-8">
                            Mon parcours a commencé par une passion brute pour l'image, affinée par des années d'expérience sur le terrain.
                            Que ce soit pour une marque, un artiste ou un événement, mon approche est la même :
                            comprendre l'essence du projet pour la traduire en émotions visuelles.
                        </p>

                        <a
                            href="/contact"
                            className="inline-block border-2 border-neutral-900 text-neutral-900 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-neutral-900 hover:text-[#E3D5CA] transition-colors duration-300"
                        >
                            Démarrer un projet
                        </a>
                    </motion.div>

                    {/* Services Cards */}
                    <div className="grid gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-900/10 hover:border-neutral-900/30 transition-colors flex items-start gap-4"
                            >
                                <div className="p-3 bg-[#E3D5CA] rounded-xl shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="opacity-70 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
