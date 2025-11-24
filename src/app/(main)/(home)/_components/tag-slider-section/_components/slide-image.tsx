"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface SlideImageProps {
  imageUrl: string;
  imageAlt: string;
  isActive: boolean;
}

export function SlideImage({ imageUrl, imageAlt, isActive }: SlideImageProps) {
  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={imageAlt}
        fill
        className="object-cover"
        priority={isActive}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </motion.div>
  );
}
