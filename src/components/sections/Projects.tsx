"use client";

import { motion } from "motion/react";
import { projects } from "@/content/projects";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" style={{ padding: "8rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Featured Systems</h2>
          <div className="ornament-line" style={{ width: "200px" }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: index % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
                gap: "4rem",
                alignItems: "center"
              }}
            >
              {/* Image / Media placeholder area */}
              <div
                style={{
                  order: index % 2 === 0 ? 1 : 2,
                  aspectRatio: "16/10",
                  background: "var(--surface-glass)",
                  borderRadius: "24px",
                  border: "1px solid var(--line)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at center, var(--glow), transparent 70%)",
                  opacity: 0.5
                }} />
                <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)", letterSpacing: "0.2em", opacity: 0.5 }}>
                  {project.id.toUpperCase()}
                </span>
              </div>

              {/* Content area */}
              <div style={{ order: index % 2 === 0 ? 2 : 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <div style={{ color: "var(--accent)", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    {project.date}
                  </div>
                  <h3 style={{ fontSize: "2rem", color: "var(--text-primary)", lineHeight: 1.2 }}>{project.title}</h3>
                </div>

                <div className="glass-panel" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {project.description}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                    {project.details.map((detail, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>◇</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                      {tech}{i < project.technologies.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)", transition: "color 0.2s ease" }}>
                      <Github size={20} /> <span style={{ fontSize: "0.875rem" }}>Source</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)", transition: "color 0.2s ease" }}>
                      <ExternalLink size={20} /> <span style={{ fontSize: "0.875rem" }}>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
