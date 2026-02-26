"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -transparent -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-outfit font-bold tracking-tight mb-6">
                        Let's build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                            amazing together.
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-inter mb-12 max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                        I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:khanrayhan8307@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background dark:bg-white dark:text-slate-900 rounded-full font-syne font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>

                    <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-500 font-inter text-sm">
                            © {new Date().getFullYear()} Rayhan Khan.
                        </p>

                        <div className="flex items-center gap-6 text-slate-500">
                            <a href="https://github.com/Rayhan-099/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/rayhan-khan-081851340/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://leetcode.com/u/Rayhan-099/" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-syne font-bold transition-colors">
                                Lc
                                <span className="sr-only">LeetCode</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
