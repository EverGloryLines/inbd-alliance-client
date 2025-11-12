"use client";

import { motion } from "motion/react";
import { ImageGrid } from "./image-grid";
import { ContentSection } from "./content-section";

export function AboutUsHeroSection() {
  return (
    <motion.section
      className="container mx-auto w-full py-8 md:py-24 lg:py-36 2xl:py-48 overflow-hidden px-4 md:pl-4 bg-white"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* Updated: Removed complex rounded corners and shadow for a cleaner, minimalistic look */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 rounded-none shadow-lg border border-gray-100 p-4 lg:p-10">
        <ImageGrid />
        <ContentSection />
      </div>
    </motion.section>
  );
}