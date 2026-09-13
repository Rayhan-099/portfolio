"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Background Atmosphere */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, var(--glow) 0%, transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h2 style={{ color: "var(--accent)", fontSize: "1rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {profile.role}
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.125rem",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
          }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <a
            href="#projects"
            className="glass-panel"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              color: "var(--text-primary)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--line)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface-glass)";
            }}
          >
            Explore Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "40px", background: "var(--line)", position: "relative", overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            style={{ width: "100%", height: "50%", background: "var(--accent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
