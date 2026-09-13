"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate 2000 particles in a sphere
  const [positions] = useState(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d4e0e9"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function AtmosphericBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      setMounted(true);
    }
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none", background: "var(--background)" }}>
      {/* CSS Atmosphere Gradients */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "120%",
        height: "120%",
        background: "radial-gradient(circle at 50% 30%, rgba(20, 25, 40, 0.8) 0%, transparent 60%)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%",
        right: "-10%",
        width: "80%",
        height: "80%",
        background: "radial-gradient(circle at 50% 50%, rgba(30, 40, 50, 0.4) 0%, transparent 70%)",
        zIndex: 0
      }} />

      {/* WebGL Particles - only load if mounted (and not reduced motion) */}
      {mounted && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.6 }}>
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
            <ParticleSwarm />
          </Canvas>
        </div>
      )}
    </div>
  );
}
