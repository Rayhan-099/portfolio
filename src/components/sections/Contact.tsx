"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" style={{ padding: "10rem 2rem 6rem", position: "relative", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel"
          style={{
            padding: "4rem 2rem",
            borderRadius: "32px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.5 }} />
          
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Get in Touch</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
            I'm currently seeking new opportunities where I can contribute to impactful products. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-block",
              padding: "1.25rem 3rem",
              background: "var(--text-primary)",
              color: "var(--background)",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              marginBottom: "4rem",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Say Hello
          </a>

          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <a href={profile.social.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
              <Github size={24} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${profile.email}`} style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
              <Mail size={24} />
            </a>
            <a href={profile.social.leetcode} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
              <ExternalLink size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
