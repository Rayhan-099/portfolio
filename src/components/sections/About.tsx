"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";

export function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section
      id="about"
      style={{
        padding: "10rem 2rem",
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="grid-about">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "3rem",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              System<br />
              <span style={{ color: "var(--text-muted)" }}>Architecture</span>
            </h2>
            <div className="ornament-line" style={{ width: "60%" }} />
            
            <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Location: {profile.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Focus: AI & Full-Stack</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              style={{
                color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                fontSize: i === 0 ? "1.25rem" : "1.0625rem",
                lineHeight: 1.8,
                fontWeight: i === 0 ? 400 : 300,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
