"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonAriaLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  targetSectionId?: string;
  onButtonClick?: () => void;
}

export function OfficesHeroSection({
  title = "Our Global Offices",
  description = "Connecting continents through our strategic office locations. Everglory Lines maintains a presence across key shipping hubs to serve you better.",
  buttonText = "Explore Our Offices",
  buttonAriaLabel = "Scroll to office locations section",
  imageUrl = "/offices/inbd-office.jpeg",
  imageAlt = "Everglory Lines office locations worldwide",
  targetSectionId = "offices-section",
  onButtonClick,
}: HeroSectionProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
      // Add any other logic that depends on reduceMotion here
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleScrollToSection = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }

    const element = document.getElementById(targetSectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.2,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
    hover: reduceMotion ? {} : { y: -4, scale: 1.05 },
    tap: reduceMotion ? {} : { scale: 0.98 },
  };

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] 2xl:min-h-[70vh] overflow-hidden"
      aria-label="Office locations hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay for Better Text Readability */}
      <div
        className="absolute inset-0 bg-black/30 z-10"
        style={{ backdropFilter: "brightness(0.7)" }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-white font-song-myung font-medium text-5xl md:text-6xl lg:text-7xl text-center tracking-normal leading-none mb-6 md:mb-6 max-w-3xl"
          style={{
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            lineHeight: "1.2",
          }}
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl font-sans font-medium text-white/90 mb-8 drop-shadow-md max-w-xl text-center"
          style={{
            opacity: 0.95,
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            lineHeight: "1.6",
          }}
          variants={descriptionVariants}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleScrollToSection}
          aria-label={buttonAriaLabel}
          className="flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-gray-900 font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cusror-pointer hover:bg-white/90 cursor-pointer"
          variants={buttonVariants}
        >
          <span>{buttonText}</span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
}
