"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { SectionTitle } from "@/components/shared/text/section-title";

/**
 * Variants for the main section container.
 * This will orchestrate the staggered animation of its children.
 */
const sectionVariants = {
  // Initial state (hidden)
  hidden: {},
  // Animate-to state (visible)
  visible: {
    transition: {
      // Stagger the children's animations by 0.3 seconds
      staggerChildren: 0.3,
      // Add a small delay before the first child starts
      delayChildren: 0.2,
    },
  },
};

const titleVariant: Variants = {
  hidden: { y: 60, opacity: 0 }, // Start 60px below and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const logoVariant: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function ClassificationSection() {
  return (
    <motion.section
      className="w-full py-8 bg-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Triggers animation when component is in viewport
      viewport={{ once: true, amount: 0.3 }} // Animation runs once, triggers at 30% visibility
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* 1. Animated Title */}
        {/* This is the first child, it will animate first */}
        <motion.div className="w-full" variants={titleVariant}>
          <SectionTitle className="text-center">
            SHIPS CLASSIFIED BY:
          </SectionTitle>
        </motion.div>

        {/* Wrapper for the logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-16">
          {/* 2. Logo 1: Bureau Veritas */}
          {/* This is the second child, it will animate 0.3s after the title */}
          <motion.div variants={logoVariant}>
            <Image
              src="/logo/bureau-veritas.png"
              alt="Bureau Veritas Logo"
              width={160}
              height={100}
              className="object-contain"
            />
          </motion.div>

          {/* 3. Logo 2: IACS */}
          {/* This is the third child, it will animate 0.3s after the first logo */}
          <motion.div variants={logoVariant}>
            <Image
              src="/logo/IACS.png"
              alt="IACS Logo"
              width={300}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
