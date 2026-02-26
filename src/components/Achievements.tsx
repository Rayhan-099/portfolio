"use client";

import { motion } from "framer-motion";
import { Award, Code2, Database, TrendingUp, Presentation } from "lucide-react";

const achievements = [
    { icon: Presentation, text: "SIH 2025 Team Leader (Cleared College Internal Round)" },
    { icon: Database, text: "IBM SQL and Relational Databases Certification", link: "https://courses.cognitiveclass.ai/certificates/4d22e718d8854cc6972a7835d864d5f6" },
    { icon: Code2, text: "Cisco Python Essentials Certification", link: "https://www.credly.com/badges/f2a7a68a-2bcc-40c3-a2be-d8f53acd4792" },
    { icon: TrendingUp, text: "Kaggle Intro to Machine Learning Certification", link: "https://www.kaggle.com/learn/certification/ryukamon/intro-to-machine-learning" },
    { icon: Award, text: "Google Analytics Certification", link: "https://skillshop.credential.net/06dc4c6c-1d2a-4410-8279-22bc42dda159" }
];

export function Achievements() {
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, idx) => (
                        <motion.a
                            href={item.link}
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-primary/50 transition-colors shadow-sm"
                        >
                            <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <p className="font-inter font-medium text-slate-700 dark:text-slate-300 text-sm leading-snug">
                                {item.text}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
