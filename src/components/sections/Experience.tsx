"use client";

import { motion } from "motion/react";
import { education } from "@/content/education";
import { achievements } from "@/content/achievements";
import { certifications } from "@/content/certifications";
import { ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 2rem", position: "relative", background: "var(--background-elevated)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
        
        {/* Left Column: Achievements & Education */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ color: "var(--accent)" }}>◈</span> Achievements
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {achievements.map((item, i) => (
                <div key={i} style={{ position: "relative", paddingLeft: "1.5rem" }}>
                  <div style={{ position: "absolute", left: 0, top: "0.5rem", bottom: "-2.5rem", width: "1px", background: "var(--line)" }} />
                  <div style={{ position: "absolute", left: "-3px", top: "0.5rem", width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--glow)" }} />
                  
                  <h4 style={{ fontSize: "1.125rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{item.title}</h4>
                  <div style={{ color: "var(--accent)", fontSize: "0.875rem", marginBottom: "1rem" }}>{item.role}</div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                    {item.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ color: "var(--accent)" }}>◈</span> Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {education.map((item, i) => (
                <div key={i} className="glass-panel" style={{ padding: "1.5rem", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.0625rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{item.degree}</h4>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", marginBottom: "0.5rem" }}>{item.institution}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                    <span>{item.dates}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ color: "var(--accent)" }}>◈</span> Certifications
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {certifications.map((cert, i) => (
              <div 
                key={i}
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--line)"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{cert.title}</h4>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>{cert.issuer} {cert.credentialId && `· ${cert.credentialId}`}</div>
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
