"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContainerCard } from "./container-card";
import { ContainerGridProps } from "@/types";

export function ContainerGrid({ containers }: ContainerGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const visibleContainers =
    isMobile && !isExpanded ? containers.slice(0, 4) : containers;

  const shouldShowButton = isMobile && containers.length > 4;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-0 md:gap-y-0 auto-rows-fr">
        {visibleContainers.map((container, index) => (
          <div
            key={container.id}
            className={`
              ${index % 2 === 0 ? "md:border-r" : ""}
              ${index < visibleContainers.length - 2 ? "md:border-b" : ""}
              border-gray-200
              md:pr-8 md:pb-8 md:pt-8
              ${index % 2 === 1 ? "md:pl-8" : ""}
              flex
            `}
          >
            <ContainerCard container={container} index={index} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {shouldShowButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={isExpanded}
              aria-controls="container-grid"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  View All Containers
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
