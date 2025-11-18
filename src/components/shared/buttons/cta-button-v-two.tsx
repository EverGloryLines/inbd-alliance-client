"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
}

export function CtaButtonVariantTwo({ children, href }: CtaButtonProps) {
  return (
    <Link href={href || "#"} target="_blank">
      <motion.button
        className="group relative inline-flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 overflow-hidden bg-[#EB6E36] rounded-lg border border-[#EB6E36] text-white font-sans font-medium cursor-pointer"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 transition-colors duration-600 group-hover:text-[#EB6E36]">
          {children}
        </span>
        <span className="relative z-10 transition-transform duration-600 group-hover:translate-x-1">
          <ArrowUpRight
            size={18}
            className="text-white group-hover:text-[#EB6E36] z-10 -ml-1"
          />
        </span>
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0"
          initial={{ height: 0 }}
          variants={{
            hover: {
              height: "100%",
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
          style={{ originY: 1 }}
        />
      </motion.button>
    </Link>
  );
}
