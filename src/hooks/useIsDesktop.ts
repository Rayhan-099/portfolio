"use client";

import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only apply complex motion/parallax on desktop devices with fine pointers
    const checkIsDesktop = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(isLargeScreen && hasFinePointer);
    };
    
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return isDesktop;
}
