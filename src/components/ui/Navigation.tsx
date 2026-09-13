"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { profile } from "@/content/profile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 2rem",
          borderRadius: "100px",
          width: "100%",
          maxWidth: "1200px",
          transition: "background-color 0.3s ease",
          backgroundColor: scrolled ? "var(--surface-glass)" : "transparent",
          border: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600 }}>
          {profile.name.split(" ")[0]}
        </Link>

        <nav style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
