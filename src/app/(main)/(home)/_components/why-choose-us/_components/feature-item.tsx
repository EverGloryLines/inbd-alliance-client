"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
export interface FeatureItemProps {
  title: string;
  subtext: string;
  imgSrc: string;
  index: number;
  showSeparator: boolean;
}

export function FeatureItem({
  title,
  subtext,
  imgSrc,
  index,
  showSeparator,
}: FeatureItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-6"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Placeholder image */}
        <div className="mb-4 h-24 w-24 bg-background">
          <Image
            src={imgSrc}
            alt={title}
            width={96}
            height={96}
            className="h-24 w-24 rounded-lg object-cover"
          />
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-song-myung font-medium text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm md:text-base font-regular text-muted-foreground">
          {subtext}
        </p>
      </div>

      {/* Yellow dot separator - only show between items */}
      <div className="hidden lg:block">
          {showSeparator && (
        <div className="flex gap-1">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          ))}
        </div>
      )}
      </div>
      
    </motion.div>
  );
}
