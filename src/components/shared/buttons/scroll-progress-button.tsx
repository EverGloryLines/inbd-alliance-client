/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100); // Show button after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    (window as any).lenis?.on("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 20; // Reduced radius to 20
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-10 bottom-5 md:right-10 right-5 z-50 w-12 h-12 rounded-xl  text-primary shadow-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group cursor-pointer m-5 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Circular Progress SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 scale-75" // Added scale-75 to create padding between button and circle
        viewBox="0 0 48 48"
      >
        {/* Background circle */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(236, 72, 153, 0.2)"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#FB1910"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150 ease-out drop-shadow-sm"
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp className="size-4 relative z-10 group-hover:scale-110 transition-transform duration-200 stroke-2" />
    </button>
  );
}
