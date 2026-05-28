"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredCertifications } from "../data/certifications";
import { CertificationsModal } from "./CertificationsModal";

export function Achievements() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">
                        Achievements & <span className="text-primary">Certifications</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {featuredCertifications.map((cert, idx) => (
                        <motion.a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center gap-4 p-5 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all shadow-sm"
                        >
                            <div className="p-3.5 bg-primary/10 text-primary rounded-lg shrink-0">
                                <cert.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-syne font-bold text-slate-800 dark:text-slate-200 text-base leading-snug mb-1">
                                    {cert.title}
                                </h4>
                                <p className="font-inter text-xs font-medium text-slate-500 dark:text-slate-400">
                                    {cert.issuer}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50 transition-all font-syne font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
                    >
                        View All 31 Certifications
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <CertificationsModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
