/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants, Transition } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { SectionDescription } from "@/components/shared/text/section-description";
import { SectionTitle } from "@/components/shared/text/section-title";
import { CtaButtonVariantOne } from "@/components/shared/buttons/cta-button-v-one";
import { CtaButtonVariantTwo } from "@/components/shared/buttons/cta-button-v-two";

export const ContentSection = () => {
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      } as Transition, // Cast to Transition
    },
  };

  // Explicitly type itemVariants as Variants
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as any, // Cast to 'any' to satisfy Easing type
      } as Transition, // Cast to Transition
    },
  };

  return (
    <motion.div
      // Adjusted width and removed vertical padding to better center content
      className="lg:w-[60%] px-4 py-8 lg:py-0 flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="my-8 lg:my-0 md:mb-4 lg:mb-6"
        variants={itemVariants}
      >
        <SectionTitle className="text-4xl md:text-6xl lg:text-7xl text-center lg:text-left font-gilroy-regular">
          About Us
        </SectionTitle>
      </motion.div>

      {/* Removed the complex mobile image grid.
        For a minimalistic approach, the large image grid should be hidden on mobile
        and only the content displayed. 
      */}
      {/* <div className="grid grid-cols-2 lg:hidden gap-3 sm:gap-6 h-full mb-8">... (old mobile image grid) ...</div> */}

      <motion.div
        className="mb-6 md:mb-8 text-lg leading-relaxed"
        variants={itemVariants}
      >
        <SectionDescription className="text-base md:text-base lg:text-lg text-left font-sans font-normal">
          Welcome to Everglory Lines, where excellence in shipping meets a
          commitment to quality, sustainability, and collaboration. As a network
          of dedicated maritime professionals, we work together to offer
          reliable, efficient, and environmentally responsible shipping
          solutions across the globe.
        </SectionDescription>
      </motion.div>

      <motion.div
        className="flex items-center justify-center lg:justify-start flex-row gap-2 mb-10"
        variants={itemVariants}
      >
        <CtaButtonVariantOne href="">
          <span className="block lg:hidden">Quote</span>
          <span className="hidden lg:block">Get a Freight Quote</span>
        </CtaButtonVariantOne>

        <CtaButtonVariantTwo href="/services">
          <span className="block lg:hidden">Vessel Fleet</span>
          <span className="hidden lg:block">Explore Our Vessel Fleet</span>
        </CtaButtonVariantTwo>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator className="mb-6 md:mb-8 mt-0 bg-gray-200" />
      </motion.div>
    </motion.div>
  );
};
