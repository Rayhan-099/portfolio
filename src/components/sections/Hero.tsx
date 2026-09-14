"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { createTimeline, utils } from "animejs";
import { profile } from "@/content/profile";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
      }
    });

    tl.add('.hero-env-mask', {
      opacity: [1, 0],
      duration: 2200,
      ease: 'linear',
    }, 0)
    .add('.hero-name-word', {
      translateY: [120, 0],
      opacity: [0, 1],
      rotateZ: [4, 0],
      duration: 1600,
      delay: utils.stagger(180, { start: 800 }),
    }, 0)
    .add('.hero-role', {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
    }, 1400)
    .add('.hero-statement', {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
    }, 1800)
    .add('.hero-cta', {
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 1000,
      delay: utils.stagger(100),
    }, 2000)
    .add('.hero-scroll-indicator', {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 800,
    }, 2400);
    
  }, []);

  const [firstName, lastName] = profile.name.split(' ');

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      
      {/* Full-bleed cinematic background media */}
      <motion.div 
        style={{ scale: bgScale, y: bgY }} 
        className="absolute inset-0 z-0"
      >
        <video 
          src="/media/atmosphere/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Atmospheric depth vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_0%,rgba(8,10,15,0.7)_60%,rgba(8,10,15,0.95)_100%)]" />
      </motion.div>

      {/* Black fade-in mask for cinematic entrance */}
      <div className="hero-env-mask absolute inset-0 z-30 bg-[#080A0F] pointer-events-none" />

      {/* Bottom gradient to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] z-10 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/60 to-transparent pointer-events-none" />

      {/* Cherry blossom foreground layer — subtle depth */}
      <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) }} className="absolute top-0 right-0 w-[50vw] h-[60vh] z-[5] pointer-events-none opacity-20 mix-blend-screen">
        <img src="/media/atmosphere/mist.png" alt="" className="w-full h-full object-cover object-right-top" />
      </motion.div>

      {/* Main Content — positioned at bottom for cinematic weight */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 pb-16 md:pb-24"
      >
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Giant Name */}
          <h1 className="font-display text-[clamp(5rem,15vw,20rem)] leading-[0.8] tracking-tighter text-[#F0EEE7] flex flex-col items-start">
            <div className="overflow-hidden pb-2">
              <span className="hero-name-word inline-block origin-bottom-left opacity-0">{firstName}</span>
            </div>
            <div className="overflow-hidden pb-4 ml-0 md:ml-[10%]">
              <span className="hero-name-word inline-block origin-bottom-left italic text-[#B8C0CC] opacity-0">{lastName}</span>
            </div>
          </h1>

          {/* Role & Statement */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16 max-w-5xl">
            <div className="flex flex-col gap-3">
              <h2 className="hero-role font-sans text-xl md:text-2xl text-[#8DEBFF] tracking-wide font-light opacity-0">
                AI & Full Stack Engineer
              </h2>
              <p className="hero-statement font-sans text-base md:text-lg text-[#B8C0CC] font-light leading-relaxed max-w-lg opacity-0">
                Architecting intelligent systems with the curiosity of an engineer and the eye of a storyteller.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 hero-cta opacity-0">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 px-8 py-3.5 bg-[#F0EEE7] text-[#080A0F] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#8DEBFF] active:scale-[0.98]"
              >
                View Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-8 py-3.5 border border-[#F0EEE7]/20 text-[#F0EEE7] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#F0EEE7]/60 backdrop-blur-sm active:scale-[0.98]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div 
        style={{ opacity }} 
        className="hero-scroll-indicator opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#778294]">Scroll</span>
        <div className="w-px h-10 bg-[#F0EEE7]/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-[#8DEBFF]"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
