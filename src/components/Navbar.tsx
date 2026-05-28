import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-syne font-bold text-xl tracking-tighter">
                    RAYHAN<span className="text-primary">k</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium ml-auto mr-8">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#achievements" className="hover:text-primary transition-colors">Achievements</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
