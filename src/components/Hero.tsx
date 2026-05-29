"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">


            <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-inter text-sm font-medium">
                        <span className="relative flex h-2 w-2 inline-block mr-2 align-middle">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for work & Open to Internships
                    </div>

                    <h1 className="text-5xl md:text-7xl font-outfit font-bold tracking-tight text-foreground leading-[1.1]">
                        Rayhan Khan
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                            AI & Full Stack Engineer
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-inter max-w-[480px]">
                        Architecting scalable web platforms and engineering intelligent, data-driven AI solutions. Specializing in Generative AI, Machine Learning, and Full-Stack Development.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="group flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-primary/25">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 text-foreground w-max rounded-xl font-medium transition-all shadow-sm">
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                        <a href="tel:+919315945414" target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 text-foreground w-max rounded-xl font-medium transition-all shadow-sm">
                            <Phone className="w-4 h-4" />
                            +91 9315945414
                        </a>
                        <a href="mailto:khanrayhan8307@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-500 text-foreground w-max rounded-xl font-medium transition-all shadow-sm">
                            <Mail className="w-4 h-4" />
                            Email
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-[400px] aspect-square rounded-[2rem] overflow-hidden border border-white/10 dark:bg-slate-900/50 backdrop-blur-sm cursor-pointer shadow-2xl"
                >
                    {/* User's image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none" />
                    <Image
                        src="/rayhan-headshot.jpg"
                        alt="Rayhan Khan | AI & Full Stack Engineer"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority
                        className="object-cover transform transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
}
