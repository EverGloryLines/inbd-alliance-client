"use client";

import { motion } from "motion/react";

interface PaginationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export function PaginationDots({
  totalSlides,
  currentSlide,
  onDotClick,
}: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onDotClick(index)}
          className={`rounded-full transition-all ${
            index === currentSlide
              ? "h-3 w-3 bg-[#ef7a44]"
              : "h-2.5 w-2.5 bg-slate-700 opacity-40"
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? "page" : undefined}
        />
      ))}
    </div>
  );
}
