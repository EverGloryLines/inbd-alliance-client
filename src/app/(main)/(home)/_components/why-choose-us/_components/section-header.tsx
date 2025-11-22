"use client";

import { motion, Variants } from "motion/react";
export interface SectionHeaderProps {
  title: string;
  paragraphs: string[];
}

export function SectionHeader({ title, paragraphs }: SectionHeaderProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mb-16 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-center mb-4 md:mb-8 text-[26px] md:text-[30px] 2xl:text-[36px] font-song-myung font-medium tracking-[-0.02em] bg-linear-to-b from-[#ed733b] via-[#ea6f36] to-[#a13706] bg-clip-text text-transparent leading-[1.4] my-2 uppercase"
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {/* <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
        <div className="h-1 w-48 rounded-full bg-[#ed733b]" />
      </motion.div> */}

      <div className="mx-auto max-w-3xl space-y-4">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-base lg:text-lg max-w-sm sm:max-w-3xl mx-auto font-sans font-normal tracking-[-0.02em] text-muted-foreground leading-normal"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
