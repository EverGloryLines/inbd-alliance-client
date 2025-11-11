"use client";
import { SectionDescription } from "@/components/shared/text/section-description";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionHeaderProps } from "@/types";
import { motion } from "motion/react";

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full text-center mb-4"
      >
        <SectionTitle>{title}</SectionTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-center w-full"
      >
        <SectionDescription>{subtitle}</SectionDescription>
      </motion.div>
    </div>
  );
}
