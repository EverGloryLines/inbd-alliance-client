"use client";

import React from "react";
import { motion, useInView, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export interface NewsItem {
  id: string;
  date: string;
  headline: string;
  url: string;
}

export interface FeaturedNews extends NewsItem {
  imageUrl: string;
}

interface NewsSectionProps {
  title?: string;
  description?: string;
  featuredNews: FeaturedNews;
  newsList: NewsItem[];
}

export default function NewsSection({
  title = "NEWS",
  description = "Stay updated with the latest announcements and industry developments",
  featuredNews,
  newsList,
}: NewsSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.2,
      },
    },
  };

  const featuredCardVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.5,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.7 + custom * 0.15,
      },
    }),
  };

  const mobileListItemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.7 + custom * 0.15,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-8 lg:py-16 2x:py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/homepage/other/musk-image.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative container mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 lg:mb-16"
        >
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>{description}</SectionDescription>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            variants={featuredCardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group"
          >
            <Link target="_blank" href={featuredNews.url} className="">
              <div className="relative aspect-video w-full shadow-md rounded-none">
                <div className="absolute top-0 left-0 z-10">
                  <span className="inline-block bg-[#EB6E36] px-4 py-1.5 text-xs font-semibold text-white rounded-none shadow-md">
                    NEWS
                  </span>
                </div>
                <Image
                  src={featuredNews.imageUrl}
                  alt={featuredNews.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="py-6 lg:py-8">
                <time className="block text-sm font-semibold text-[#EB6E36] uppercase tracking-wider mb-3">
                  {featuredNews.date}
                </time>
                <h3 className="text-lg lg:text-xl font-medium text-deep-blue leading-tight group-hover:underline underline-offset-4 decoration-2 transition-all duration-300">
                  {featuredNews.headline}
                </h3>
              </div>
            </Link>
          </motion.div>

          <div className="space-y-0 -mt-7">
            {newsList.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? mobileListItemVariants
                    : listItemVariants
                }
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`group py-6 lg:py-7 ${
                  index < newsList.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <Link href={item.url} target="_blank" className="block">
                  <time className="block text-sm font-semibold text-[#EB6E36] uppercase tracking-wider mb-3">
                    {item.date}
                  </time>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="flex-1 text-base lg:text-lg font-medium text-deep-blue leading-snug transition-all duration-300 group-hover:underline underline-offset-4 decoration-2">
                      {item.headline}
                    </h3>
                    <ArrowUpRight
                      className="shrink-0 w-5 h-5 text-[#EB6E36] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          {/* <Link
            href="/news"
            className="inline-flex items-center gap-2 text-deep-red font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
          >
            View All News
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}
