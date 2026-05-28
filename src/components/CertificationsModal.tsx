"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

interface CertificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[85vh] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h3 className="text-2xl font-outfit font-bold text-foreground">
                                    All <span className="text-primary">Certifications</span>
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-inter">
                                    {certifications.length} Professional Certificates and Credentials
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-foreground"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {certifications.map((cert, idx) => (
                                    <a
                                        key={idx}
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                                    >
                                        <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <cert.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-syne font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-inter">
                                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                                    {cert.issuer}
                                                </span>
                                                <span>•</span>
                                                <span className="truncate">ID: {cert.credentialId}</span>
                                            </div>
                                        </div>
                                        <div className="shrink-0 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
