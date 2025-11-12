/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants, Transition } from "motion/react";
import Image from "next/image";

export const ImageGrid = () => {
  const containerVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to 'any' to satisfy Easing type
        when: "beforeChildren",
        staggerChildren: 0.1,
      } as Transition, // Cast to Transition
    },
  };

  // Explicitly type imageVariants as Variants
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to 'any' to satisfy Easing type
      } as Transition, // Cast to Transition
    },
  };

  // Simplified image list for a 2x2 grid (using the first 4 images from your original list)
  const images = [
    { src: "/about/hero/uddippon-express-front.png", alt: "shipping-liner-1" },
    { src: "/about/hero/uttaran-express.jpg", alt: "shipping-liner-2" },
    { src: "/about/hero/container-img-one.jpeg", alt: "shipping-liner-3" },
    { src: "/about/hero/uddippon-express-three.jpeg", alt: "shipping-liner-4" },
  ];

  return (
    <motion.div
      // Updated layout to a clean 2x2 grid matching the second image's structure
      className="hidden lg:grid lg:w-[40%] grid-cols-2 grid-rows-2 gap-4 h-[400px]" // Fixed height for consistent look
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-none shadow-md w-full h-full"
          variants={imageVariants}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index < 2} // Prioritize first two images
            className="object-cover transition-transform duration-500 hover:scale-105" // Added hover effect for touch of polish
            sizes="(max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};