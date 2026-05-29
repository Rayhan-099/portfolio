"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Seedable pseudo-random number generator (Mulberry32)
function seededRandom(seed: number) {
    return function() {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

interface StarFieldProps {
    count: number;
    size: number;
    color: string;
    speed: number;
    radiusOuter: number;
    radiusInner: number;
}

function StarField({ count, size, color, speed, radiusOuter, radiusInner }: StarFieldProps) {
    const ref = useRef<THREE.Points>(null);

    const points = useMemo(() => {
        const rand = seededRandom(42); // Seeded random generator for React pure rendering compliance
        const p = new Float32Array(count * 3);
        let added = 0;
        // Distribute points uniformly inside a sphere, but outside the inner radius
        while (added < count) {
            const x = (rand() - 0.5) * 2 * radiusOuter;
            const y = (rand() - 0.5) * 2 * radiusOuter;
            const z = (rand() - 0.5) * 2 * radiusOuter;

            const dist = Math.sqrt(x * x + y * y + z * z);
            if (dist > radiusInner && dist < radiusOuter) {
                p[added * 3] = x;
                p[added * 3 + 1] = y;
                p[added * 3 + 2] = z;
                added++;
            }
        }
        return p;
    }, [count, radiusOuter, radiusInner]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Orbit revolution
            ref.current.rotation.y -= delta * speed;
            // Slight tilt rotation
            ref.current.rotation.x -= delta * (speed * 0.2);
            ref.current.rotation.z -= delta * (speed * 0.3);
        }
    });

    return (
        <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
    const groupRef = useRef<THREE.Group>(null);
    const scrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Parallax effect following pointer
            const targetX = (state.pointer.x * Math.PI) / 30;
            const targetY = (state.pointer.y * Math.PI) / 30;
            const scrollY = scrollRef.current * 0.001;

            groupRef.current.rotation.y += 0.02 * (targetX - groupRef.current.rotation.y);
            groupRef.current.rotation.x += 0.02 * ((targetY + scrollY) - groupRef.current.rotation.x);
        }
    });

    return <group ref={groupRef} rotation={[0, 0, Math.PI / 6]}>{children}</group>;
}

export function Hero3D() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isLight = resolvedTheme === "light";

    // Star colors depend on theme
    const starColor1 = isLight ? "#0f172a" : "#00ffff"; // Dark blue vs Cyan
    const starColor2 = isLight ? "#1e293b" : "#22d3ee"; // Slightly lighter dark blue vs Light Cyan
    const starColor3 = isLight ? "#334155" : "#67e8f9"; // Slate vs Soft Cyan

    return (
        <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${isLight ? 'bg-slate-50' : 'bg-[#020617]'}`}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <ParallaxGroup>
                    {/* Medium squares */}
                    <StarField count={400} size={0.06} color={starColor1} speed={0.04} radiusInner={1} radiusOuter={15} />
                    {/* Larger paper square stars */}
                    <StarField count={150} size={0.12} color={starColor2} speed={0.06} radiusInner={2} radiusOuter={15} />
                    {/* Background small stars */}
                    <StarField count={800} size={0.02} color={starColor3} speed={0.02} radiusInner={0} radiusOuter={20} />
                </ParallaxGroup>
            </Canvas>
        </div>
    );
}
