"use client";

import { motion } from "motion/react";

interface SlideContentProps {
  headline: string;
  subheading: string;
  ctaText: string;
  isActive: boolean;
}

export function SlideContent({
  headline,
  subheading,
  ctaText,
  isActive,
}: SlideContentProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="mb-4 text-xl font-song-myung font-medium tracking-tight leading-tight text-white md:mb-6 md:text-2xl">
        {headline}
      </h2>

      <p className="mb-8 text-sm text-white/70 md:text-base lg:text-lg leading-normal">
        {subheading}
      </p>

      <motion.button
        className="group inline-flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base font-medium uppercase text-white transition-all hover:bg-white/10 md:px-6 md:py-3 cursor-pointer"
      >
        {ctaText}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </motion.button>
    </motion.div>
  );
}
