"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { experience } from "@/content/experience";
import { education } from "@/content/education";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} id="experience" className="py-32 md:py-48 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section header */}
        <motion.div 
          className="mb-24 md:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={fadeUp} custom={0}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-[#F0EEE7] leading-[0.85] tracking-tight"
          >
            Engineering <br /> 
            <span className="italic text-[#778294]">Timeline.</span>
          </motion.h2>
        </motion.div>

        {/* Chronology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main timeline */}
          <div className="lg:col-span-8 flex flex-col gap-32 md:gap-40">
            {experience.map((item, index) => {
              const year = item.date.match(/\d{4}/)?.[0] || "";
              return (
                <motion.div 
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative"
                >
                  {/* Giant background year */}
                  <div className="absolute -top-8 md:-top-16 -left-2 md:-left-6 select-none pointer-events-none z-0">
                    <span className="font-display text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none text-[#F0EEE7]/[0.03] tracking-tighter">
                      {year}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-2 mb-6">
                      <span className="text-[#8DEBFF] font-sans text-[11px] tracking-[0.3em] uppercase">
                        {item.date}{item.location ? ` — ${item.location}` : ''}
                      </span>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#F0EEE7] leading-[0.95]">
                        {item.company}
                      </h3>
                      <span className="text-[#B8C0CC] font-sans font-light text-lg tracking-wide mt-1">
                        {item.role}
                      </span>
                    </motion.div>
                    
                    <motion.div variants={fadeUp} custom={0.15} className="mt-6 border-l-2 border-[#8DEBFF]/10 pl-6">
                      <ul className="flex flex-col gap-4 text-[#778294] font-sans font-light text-[15px] leading-relaxed max-w-xl">
                        {item.description.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full bg-[#8DEBFF]/30 mt-2.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Education sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-16 lg:pt-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4 
                variants={fadeUp} custom={0}
                className="font-sans text-[11px] uppercase tracking-[0.3em] mb-12 flex items-center gap-4 text-[#B8C0CC]"
              >
                <span className="w-8 h-px bg-[#8DEBFF]/15" />
                Academic
              </motion.h4>
              <div className="flex flex-col gap-16">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    custom={index * 0.15}
                    className="flex flex-col gap-2 group"
                  >
                    <span className="text-[#B8C0CC] font-sans text-[11px] tracking-[0.2em] uppercase">
                      {item.dates} — {item.location}
                    </span>
                    <h5 className="font-display text-2xl md:text-3xl text-[#F0EEE7] group-hover:text-[#8DEBFF] transition-colors duration-500 leading-tight">
                      {item.institution}
                    </h5>
                    <p className="text-[#778294] font-sans text-sm font-light leading-loose max-w-xs">
                      {item.degree}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
