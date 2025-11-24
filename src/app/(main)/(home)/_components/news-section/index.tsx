"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { NewsCard } from "./news-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/shared/text/section-title";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: "EVENTS" | "MSC CUSTOMER ADVISORY";
  imageUrl: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "17/09/25",
    title:
      "Italian company MSC proposes to invest $400 million in Bangladesh's Pangaon inland container terminal",
    category: "MSC CUSTOMER ADVISORY",
    imageUrl: "/homepage/why-choose-us/shipping-container.webp",
    link: "https://www.amadershomoy.com/economics/article/158949/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%93-%E0%A6%85%E0%A6%AD%E0%A7%8D%E0%A6%AF%E0%A6%A8#google_vignette",
  },
  {
    id: "2",
    date: "17/09/25",
    title:
      "MSC eyes $400 million investment in Bangladesh’s Pangaon inland container terminal",
    category: "EVENTS",
    imageUrl:
      "/homepage/other/pangaon-port.jpg",
    link: "https://indiaseatradenews.com/msc-eyes-400-million-investment-in-bangladeshs-pangaon-inland-container-terminal",
  },
  {
    id: "3",
    date: "10/10/25",
    title: "Pangaon ICT: The port that waits for a road to the Bay of Bengal",
    category: "EVENTS",
    imageUrl: "/homepage/other/ctg-port.jpg",
    link: "https://www.tbsnews.net/thoughts/pangaon-ict-port-waits-road-1257486",
  },
  {
    id: "4",
    date: "30/09/25",
    title:
      "Why businesses avoid Pangaon and what MSC wants to fix with $400m offer",
    category: "EVENTS",
    imageUrl: "/homepage/other/msc-port.webp",
    link: "https://today.thefinancialexpress.com.bd/last-page/mos-looks-into-graft-allegation-over-pangaon-ict-vessels",
  },
  {
    id: "5",
    date: "13/10/25",
    title:
      "Bangladesh to lease three major container terminals to global operators",
    category: "MSC CUSTOMER ADVISORY",
    imageUrl: "/homepage/other/shipping-port.jpeg",
    link: "https://www.maritimegateway.com/bangladesh-to-lease-three-major-container-terminals-to-global-operators",
  },
];

export function NewsSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Set up event listeners
  if (emblaApi) {
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full px-4 py-8 md:py-16 lg:py-24 overflow-x-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12 text-center"
        >
          <SectionTitle>
            Discover the Latest News <br /> About INBD
          </SectionTitle>
        </motion.div>

        {/* Slider Container */}
        <motion.div variants={itemVariants} className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
              "flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-gray-100 shadow-lg",
              "transition-all duration-300 hover:scale-110",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2",
              "flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-gray-100 shadow-lg",
              "transition-all duration-300 hover:scale-110",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 md:gap-6">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)]"
                >
                  <NewsCard item={item} index={index} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* See All Button */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group rounded-lg px-8 py-6 text-base font-medium bg-transparent cursor-pointer"
          >
            See all news
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
