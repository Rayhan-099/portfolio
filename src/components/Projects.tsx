"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Current Capital - Finance Manager",
        description: "Built a full-stack personal finance web app for automated expense tracking and dynamic envelope budgeting. Integrated Google Gemini Vision AI to automatically extract and categorize transaction data from receipt images.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Recharts", "Gemini AI"],
        github: "https://github.com/Rayhan-099/finance-manager",
        demo: "https://finance-manager-zeta.vercel.app/",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Real-Time Hand Tracking Visualizer",
        description: "Built a real-time computer vision web app mapping 4 distinct hand gestures to 3D particle effects. Maintained 60 FPS rendering and low-latency visual feedback entirely on the client side using MediaPipe and Three.js.",
        tech: ["Three.js", "WebGL", "Google MediaPipe", "React", "Tailwind CSS"],
        github: "https://github.com/Rayhan-099/Hand-Tracking-Visualizer",
        demo: "https://jujutsu-kaisen-rho.vercel.app/",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Health Assistant Platform",
        description: "Led team to build a full-stack health platform, clearing the SIH 2025 internal round. Architected a fault-tolerant Supabase backend with medical APIs, achieving <250ms response times. Engineered real-time medical reminder system.",
        tech: ["React", "Supabase", "Tailwind CSS", "Medical APIs"],
        github: "https://github.com/Rayhan-099/Health-Assistant",
        demo: "https://health-assistant-azure.vercel.app/",
        color: "from-rose-500/20 to-orange-500/20"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col justify-between bg-white/50 dark:bg-slate-900/50 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden backdrop-blur-sm"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                            <div>
                                <h3 className="font-syne font-bold text-2xl text-foreground mb-4">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                    Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors ml-auto">
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
