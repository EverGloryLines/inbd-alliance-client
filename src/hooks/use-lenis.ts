/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical", // Use 'orientation' instead of 'direction'
      gestureOrientation: "vertical", // Use 'gestureOrientation' instead of 'gestureDirection'
      smoothWheel: true, // Use 'smoothWheel' instead of 'smooth'
      wheelMultiplier: 1, // Use 'wheelMultiplier' instead of 'mouseMultiplier'
      // smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // ✅ Expose Lenis globally
    (window as any).lenis = lenis;

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
      delete (window as any).lenis; // Optional: clean up global reference
    };
  }, []);
};
