"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { SectionTitle } from "@/components/shared/text/section-title";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger the two main columns
      delayChildren: 0.2,
    },
  },
};

const titleVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariant: Variants = {
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

export function AffiliationSection() {
  return (
    <motion.section
      className="w-full py-8 bg-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is visible
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-center relative">
        {/* Member Of Section */}
        <div className="flex-1 flex flex-col items-center lg:items-end p-4 lg:pr-8 text-center lg:text-right">
          <motion.div variants={titleVariant} className="mb-4 lg:mb-8">
            <SectionTitle className="max-md:*:text-center">
              MEMBER OF:
            </SectionTitle>
          </motion.div>
          <motion.div
            variants={imageVariant}
            className="min-w-40 sm:min-w-[180px]"
          >
            <Image
              src="/logo/qss-network.png"
              alt="QSS Network Logo"
              width={350}
              height={300}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-px bg-gray-300 self-stretch my-4"></div>
        {/* Mobile Separator (optional, if you want a horizontal line on small screens) */}
        <div className="lg:hidden w-3/4 mx-auto h-px bg-gray-300 my-8"></div>

        {/* In Accordance With Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start p-4 lg:pl-8 text-center lg:text-left">
          <motion.div variants={titleVariant} className="mb-4 lg:mb-8">
            <SectionTitle className="">IN ACCORDANCE WITH:</SectionTitle>
          </motion.div>

          {/* Wrapper for the three logos to stagger their animations */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 max-w-lg"
            variants={sectionVariants}
          >
            <motion.div variants={imageVariant} className="shrink-0">
              <Image
                src="/logo/BDPR-Logo.png"
                alt="Government of Bangladesh Logo"
                width={160}
                height={150}
                className="object-contain"
              />
            </motion.div>
            <motion.div variants={imageVariant} className="shrink-0">
              <Image
                src="/logo/saarc.jpg"
                alt="SAARC Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </motion.div>
            <motion.div variants={imageVariant} className="shrink-0">
              <Image
                src="/logo/ism-code.jpeg"
                alt="ISM Code"
                width={100}
                height={150}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
