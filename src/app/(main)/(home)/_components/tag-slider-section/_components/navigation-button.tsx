"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

export function NavigationButton({
  direction,
  onClick,
  className = "",
}: NavigationButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full bg-transparent border border-white p-2 ${className} cursor-pointer`}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
    </motion.button>
  );
}
