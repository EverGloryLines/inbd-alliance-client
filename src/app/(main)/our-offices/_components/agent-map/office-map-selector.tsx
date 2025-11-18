/* eslint-disable */
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Offices } from "@/data/office-data";

interface MapSelectorProps {
  offices: Offices[];
  selectedOffice: Offices | null;
  onOfficesSelect: (office: Offices) => void;
}

export function OfficeMapSelector({
  offices,
  selectedOffice,
  onOfficesSelect,
}: MapSelectorProps) {
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 (lg)
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // FIX: Add isMounted state to prevent hydration mismatch on controls
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const officeLabels: Record<string, string> = {
    IN: "India",
    BD: "Bangladesh",
    AE: "UAE",
  };

  // 1. Determine items per page based on screen size
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      // lg
      setItemsPerPage(3); // CHANGED: Was 4, now 3
    } else if (window.innerWidth >= 768) {
      // md
      setItemsPerPage(2);
    } else {
      // sm
      setItemsPerPage(1);
    }
  }, []);

  // 2. Add resize event listener
  useEffect(() => {
    handleResize(); // Set initial size on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // 3. Define carousel controls
  const maxIndex = Math.max(0, offices.length - itemsPerPage);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // 4. Function to scroll to the active item
  const scrollToItem = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Get the child element (the snap-wrapper)
    const item = container.children[index] as HTMLElement;
    if (item) {
      container.scrollTo({
        left: item.offsetLeft, // Scroll to the item's starting position
        behavior: "smooth",
      });
    }
  }, []);

  // 5. Scroll when currentIndex changes
  useEffect(() => {
    scrollToItem(currentIndex);
  }, [currentIndex, scrollToItem]);

  // 6. Adjust currentIndex if it's out of bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  return (
    <div className="w-full bg-[#485FA3] py-12 px-4 relative">
      <div className="container mx-auto relative">
        {/* Previous Button - FIX: Only render on client */}
        {isMounted && (
          <button
            onClick={handlePrev}
            disabled={isAtStart}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md transition-all
                       hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed -translate-x-1/2 lg:-translate-x-full"
            aria-label="Previous map"
          >
            <ChevronLeft className="h-6 w-6 text-[#485FA3]" />
          </button>
        )}

        {/* Viewport: Hides the scrollbar and provides the frame */}
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {/* Each item is wrapped in a div that handles responsive sizing and scroll-snap.
            The padding on this wrapper creates the "gap".
            - p-2 (8px) => 16px gap
            - lg:p-4 (16px) => 32px gap
          */}
          {offices.map((office) => (
            <div
              key={office.code}
              // CHANGED: lg:w-1/4 is now lg:w-1/3
              className="snap-start shrink-0 w-full md:w-1/2 lg:w-1/3 p-2 lg:p-4"
            >
              <motion.button
                onClick={() => onOfficesSelect(office)}
                onMouseEnter={() => setHoveredCode(office.code)}
                onMouseLeave={() => setHoveredCode(null)}
                className="relative flex flex-col items-center justify-center w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`relative min-h-[350px] w-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    selectedOffice?.code === office.code
                      ? "opacity-100 scale-105"
                      : ""
                  } ${
                    hoveredCode === office.code ? "opacity-100" : "opacity-85"
                  }`}
                >
                  <Image
                    src={office.imgSrc || "/placeholder-map.jpg"}
                    alt={`${officeLabels[office.code]} map`}
                    width={300}
                    height={350}
                    priority
                    className="object-cover"
                  />
                </motion.div>
                <span className="mt-2 text-xl font-song-myung font-normal text-white text-center text-pretty">
                  {officeLabels[office.code]}
                </span>
              </motion.button>
            </div>
          ))}
        </div>

        {/* Next Button - FIX: Only render on client */}
        {isMounted && (
          <button
            onClick={handleNext}
            disabled={isAtEnd}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md transition-all
                       hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed translate-x-1/2 lg:translate-x-full"
            aria-label="Next map"
          >
            <ChevronRight className="h-6 w-6 text-[#485FA3]" />
          </button>
        )}
      </div>

      {/* Add this utility class to your global CSS file (e.g., globals.css)
        to hide the scrollbar from the carousel.
      
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      */}
    </div>
  );
}
