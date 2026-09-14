"use client";

import { useState, useEffect } from "react";
import { certifications } from "@/content/certifications";
import { motion, AnimatePresence } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const featuredCerts = certifications.filter(c => c.featured);

export function Certifications() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  useEffect(() => {
    if (isArchiveOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isArchiveOpen]);

  return (
    <>
      <section id="certifications" className="py-32 md:py-48 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-12 border-t border-[#8DEBFF]/10 pt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-[#B8C0CC] font-sans text-[11px] uppercase tracking-[0.4em] block mb-6">
                Validation
              </motion.span>
              <motion.h2 variants={fadeUp} custom={0.1} className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F0EEE7] leading-[0.9] tracking-tight">
                Credentials & <br/> <span className="italic text-[#778294]">Knowledge.</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-start md:items-end gap-6 max-w-sm text-left md:text-right"
            >
              <motion.span variants={fadeUp} custom={0.2} className="font-display text-7xl text-[#778294]/50 italic leading-none">{String(certifications.length).padStart(2, '0')}</motion.span>
              <motion.p variants={fadeUp} custom={0.3} className="font-sans text-sm text-[#B8C0CC] font-light leading-relaxed">
                Continuous learning and professional verification across AI, Data Science, and Systems Architecture.
              </motion.p>
              <motion.button 
                variants={fadeUp} custom={0.4}
                onClick={() => setIsArchiveOpen(true)}
                className="group flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-[#8DEBFF] hover:text-[#F0EEE7] transition-colors pb-2 border-b border-[#8DEBFF]/30 hover:border-[#F0EEE7] mt-4"
              >
                View Full Archive
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Featured Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {featuredCerts.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.1}
                className="flex flex-col group h-full justify-between p-8 border border-[#8DEBFF]/10 hover:border-[#8DEBFF]/30 transition-colors bg-[#080A0F]/40 backdrop-blur-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[#B8C0CC] font-sans text-[11px] tracking-widest uppercase">{cert.issuer}</span>
                    <span className="text-[#8DEBFF]/60 font-sans text-[11px]">{cert.date}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl text-[#F0EEE7] mb-4 group-hover:text-[#8DEBFF] transition-colors duration-500 leading-tight">
                    {cert.name}
                  </h3>
                </div>
                
                <div className="flex justify-between items-end mt-16">
                  {cert.link !== "#" && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B8C0CC] hover:text-[#F0EEE7] transition-colors flex items-center gap-4"
                    >
                      <span className="w-8 h-px bg-[#8DEBFF]/20 group-hover:w-12 group-hover:bg-[#8DEBFF] transition-all duration-300" />
                      Verify
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Archive Overlay */}
      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-50 bg-[#080A0F] overflow-y-auto"
          >
            <div className="min-h-screen py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto relative z-10">
              
              <div className="flex justify-between items-end mb-16 border-b border-[#8DEBFF]/10 pb-8 sticky top-0 bg-[#080A0F]/90 backdrop-blur-md pt-8 z-20">
                <div>
                  <span className="text-[#B8C0CC] font-sans text-[11px] uppercase tracking-[0.4em] block mb-4">
                    Complete Log
                  </span>
                  <h2 className="font-display text-5xl md:text-6xl text-[#F0EEE7]">Certification Archive</h2>
                </div>
                <button 
                  onClick={() => setIsArchiveOpen(false)}
                  className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8DEBFF] hover:text-[#F0EEE7] transition-colors pb-2 border-b border-transparent hover:border-[#F0EEE7]"
                >
                  Close Archive
                </button>
              </div>

              <div className="flex flex-col">
                <div className="grid grid-cols-12 gap-4 py-4 border-b border-[#8DEBFF]/10 text-[#B8C0CC] font-sans text-[11px] uppercase tracking-widest mb-4 hidden md:grid">
                  <div className="col-span-2">Issuer</div>
                  <div className="col-span-5">Credential</div>
                  <div className="col-span-3">ID Number</div>
                  <div className="col-span-1">Year</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>

                {certifications.map((cert) => (
                  <div key={cert.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-[#8DEBFF]/5 hover:border-[#8DEBFF]/20 hover:bg-[#8DEBFF]/[0.02] transition-colors group px-4 -mx-4">
                    <div className="md:col-span-2">
                      <span className="text-[#B8C0CC] font-sans text-[11px] tracking-widest uppercase">{cert.issuer}</span>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="font-display text-xl text-[#F0EEE7] group-hover:text-[#8DEBFF] transition-colors">{cert.name}</h3>
                    </div>
                    <div className="md:col-span-3">
                      <span className="text-[#778294] font-mono text-[11px] tracking-widest break-all select-all">{cert.id}</span>
                    </div>
                    <div className="md:col-span-1">
                      <span className="text-[#B8C0CC] font-sans text-xs">{cert.date}</span>
                    </div>
                    <div className="md:col-span-1 md:text-right mt-4 md:mt-0">
                      {cert.link !== "#" ? (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] font-sans tracking-widest uppercase text-[#8DEBFF] hover:text-[#F0EEE7] transition-colors inline-block border-b border-transparent hover:border-[#F0EEE7] pb-1"
                        >
                          Verify ↗
                        </a>
                      ) : (
                        <span className="text-[10px] font-sans tracking-widest uppercase text-[#778294]">
                          Internal
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-24 text-center">
                <span className="text-[#B8C0CC] font-sans text-[11px] tracking-widest uppercase">End of Archive</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
