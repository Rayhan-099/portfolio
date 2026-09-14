"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "motion/react";

function MothDust() {
  const ref = useRef<THREE.Points>(null);
  
  // Hollow Knight inspired "moth dust"
  const [positions] = useState(() => {
    // 3000 particles spread in a large volume
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Extremely slow, organic rotation
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;
      
      // Add subtle wave movement to positions in a custom shader if needed, 
      // but rotation of the entire group gives a slow drifting effect.
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F5F5F0" // Warm Ivory dust
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.15} // Very subtle
        />
      </Points>
    </group>
  );
}

export function AtmosphericBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [scrollDepth, setScrollDepth] = useState(0);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      setMounted(true);
    }
    
    return scrollY.on("change", (latest) => {
      // Calculate a rough percentage of scroll depth
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const depth = Math.min(Math.max(latest / maxScroll, 0), 1);
      setScrollDepth(depth);
    });
  }, [scrollY]);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none bg-background overflow-hidden">
      
      {/* Base Cave Depth */}
      <div className="absolute inset-0 z-0 bg-background-deep" />
      
      {/* Dynamic Scroll-Linked Illumination (Celestial Blue to Abyss) */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, rgba(75, 123, 154, 0.15) 0%, transparent 60%)',
          opacity: 1 - scrollDepth * 0.8
        }} 
      />

      {/* Deep Vignette / Hollow Knight Shadow Frame */}
      <div className="absolute inset-0 z-[2] bg-hollow-vignette opacity-90" />
      
      {/* Noise Texture Overlay for grit */}
      <div 
        className="absolute inset-0 z-[3] opacity-20 mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* R3F Moth Dust */}
      {mounted && (
        <div className="absolute inset-0 z-[1]">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
            <fog attach="fog" args={["#050608", 5, 25]} />
            <MothDust />
          </Canvas>
        </div>
      )}
    </div>
  );
}
