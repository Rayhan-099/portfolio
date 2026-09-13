"use client";

import { motion } from "motion/react";
import { skills } from "@/content/skills";

const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    className="glass-panel"
    style={{
      padding: "2rem",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, transparent, var(--accent-soft), transparent)"
    }} />
    <h3 style={{ fontSize: "1.125rem", color: "var(--accent)", letterSpacing: "0.05em" }}>{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      {items.map((skill, i) => (
        <span
          key={i}
          style={{
            padding: "0.5rem 1rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--line)",
            borderRadius: "100px",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            transition: "all 0.3s ease",
            cursor: "default"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.borderColor = "var(--accent-soft)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            e.currentTarget.style.borderColor = "var(--line)";
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Technical Matrix</h2>
          <div className="ornament-line" style={{ width: "200px", margin: "0 auto" }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}>
          <SkillCategory title="Languages" items={skills.languages} delay={0.1} />
          <SkillCategory title="AI & Data Science" items={skills.aiDataScience} delay={0.2} />
          <SkillCategory title="Frameworks" items={skills.frameworks} delay={0.3} />
          <SkillCategory title="Databases & Cloud" items={skills.databasesCloud} delay={0.4} />
          <SkillCategory title="Core Competencies" items={skills.coreCompetencies} delay={0.5} />
          <SkillCategory title="Tools & Environments" items={skills.toolsEnvironments} delay={0.6} />
        </div>
      </div>
    </section>
  );
}
