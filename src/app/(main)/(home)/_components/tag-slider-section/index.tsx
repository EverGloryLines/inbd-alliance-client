"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SlideContent } from "./_components/slide-content";
import { PaginationDots } from "./_components/pagination-dots";
import { NavigationButton } from "./_components/navigation-button";
import { SlideImage } from "./_components/slide-image";

interface SlideData {
  id: string;
  headline: string;
  subheading: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
}

export const slides: SlideData[] = [
  {
    id: "slide-1",
    headline: "ALL WATER DIRECT CONTAINER LINER SERVICE",
    subheading:
      "Direct To Dhaka Not 36 days, Only 6 Days Transit Time. From All Inlands Points/ICDs Of India via Haldia To Pangaon, Dhaka",
    imageUrl: "/homepage/other/slide-one-image.png",
    imageAlt: "Cargo container ship aerial view",
    ctaText: "LEARN MORE",
  },
  {
    id: "slide-2",
    headline: "PORT TO PORT, POINT TO POINT AND MULTIMODAL TRANSPORT",
    subheading:
      "Focusing on South Asian Nations - Operating Beyond the Oceans. Providing Container-Combi Liner and Multimodal Transport Services Facilating Trade and Commerce Of South Asian Countries.",
    imageUrl: "/homepage/other/slide-two-image.png",
    imageAlt: "Container ship at sea",
    ctaText: "LEARN MORE",
  },
];

export function TagSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full container mx-auto bg-background py-8 md:py-12 lg:py-16">
      {/* Desktop Layout */}
      <div className="hidden h-[500px] md:flex md:h-[400px]">
        {/* Navigation - Left */}
        <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 lg:left-4">
          <NavigationButton
            direction="prev"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          />
        </div>

        {/* Content Section - Left 40% */}
        <motion.div
          className="flex w-full flex-col items-center justify-center bg-linear-to-tl from-[#ef7a44] via-[#ed743c] to-[#ce5218] px-8 md:w-2/5 md:px-6 lg:px-12"
        >
          <div className="w-full max-w-md">
            <SlideContent
              headline={currentSlideData.headline}
              subheading={currentSlideData.subheading}
              ctaText={currentSlideData.ctaText}
              isActive={true}
            />
          </div>
        </motion.div>

        {/* Image Section - Right 60% */}
        <div className="relative w-full md:w-3/5">
          <AnimatePresence mode="wait">
            <SlideImage
              key={currentSlideData.id}
              imageUrl={currentSlideData.imageUrl}
              imageAlt={currentSlideData.imageAlt}
              isActive={true}
            />
          </AnimatePresence>
        </div>

        {/* Navigation - Right */}
        <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 lg:right-4">
          <NavigationButton
            direction="next"
            onClick={goToNextSlide}
            aria-label="Next slide"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden">
        {/* Image Section - Top */}
        <div className="relative h-64 w-full sm:h-80">
          <AnimatePresence mode="wait">
            <SlideImage
              key={currentSlideData.id}
              imageUrl={currentSlideData.imageUrl}
              imageAlt={currentSlideData.imageAlt}
              isActive={true}
            />
          </AnimatePresence>
        </div>

        {/* Content Section - Bottom */}
        <motion.div
          className="flex flex-col items-center justify-center px-6 py-8 bg-linear-to-tl from-[#ef7a44] via-[#ed743c] to-[#ce5218]"
        >
          <div className="w-full">
            <SlideContent
              headline={currentSlideData.headline}
              subheading={currentSlideData.subheading}
              ctaText={currentSlideData.ctaText}
              isActive={true}
            />
          </div>
        </motion.div>
      </div>

      {/* Pagination Dots - Always at Bottom */}
      <div className="relative z-20 flex justify-center bg-background py-6 md:absolute md:bottom-0 md:left-1/2 md:w-full md:-translate-x-1/2 md:bg-transparent">
        <PaginationDots
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onDotClick={goToSlide}
        />
      </div>
    </section>
  );
}
