"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { ShippingToolsPanel } from "./shipping-tools-panel";

export function HeroSection() {
  const heading = "OVER THE OCEANS, ALL DESTINATIONS";
  const description =
    "All water direct line container liner service. Direct to Dhaka not 36 days, only 6 days transit time from all inland Points/ICDs of India via Haldia to Pangaon, Dhaka.";
  const subheading = "Learn more about our services to go all the way.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25 + i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Typewriter effect for heading
  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.1,
      },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full">
        <Image
          src="/homepage/other/everglory-img-2.webp"
          alt="Delivery workers with package"
          fill
          priority
          className="object-cover"
          quality={85}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <motion.div
          className="absolute top-20 inset-0 flex items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="w-full container mx-auto px-4">
            <div className="max-w-2xl">
              {/* Heading with Typewriter Effect */}
              <motion.h1 className="text-3xl md:text-4xl lg:text-[50px] font-song-myung font-medium text-white mb-4 md:mb-6 tracking-[-0.02em] leading-tight">
                {heading.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={typewriterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Description with Staggered Slide-up Animation */}
              <motion.p
                className="text-base md:text-lg text-white/90 mb-4 font-sans font-medium md:mb-6 tracking-[-0.02em] leading-normal max-w-xl"
                custom={0}
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
              >
                {description}
              </motion.p>

              {/* Subheading */}
              <motion.p
                className="text-base md:text-lg text-white/90 mb-4 font-sans font-medium md:mb-6 tracking-[-0.02em] leading-normal max-w-xl"
                custom={1}
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
              >
                {subheading}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8"
                custom={2}
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  className="px-6 py-2.5 md:py-3 bg-white text-black font-sans font-medium rounded-lg hover:shadow-lg transition-all text-base cursor-pointer tracking-[-0.02em]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact us
                </motion.button>
                <motion.button
                  className="px-6 py-2.5 md:py-3 border-2 border-white text-white font-sans font-medium rounded-lg hover:bg-white hover:text-black transition-all text-base cursor-pointer tracking-[-0.02em]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More - Specialized LTL
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shipping Tools Panel */}
      <div className="relative z-10 -mt-4 md:-mt-8 lg:-mt-16 px-4 md:px-8 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto">
          <ShippingToolsPanel />
        </div>
      </div>
    </section>
  );
}
