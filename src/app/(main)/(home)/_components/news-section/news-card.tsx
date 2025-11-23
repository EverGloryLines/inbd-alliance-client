"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: "EVENTS" | "MSC CUSTOMER ADVISORY";
  imageUrl: string;
  link: string;
}

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link href={item.link} target="_blank" className="group block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url('${item.imageUrl}')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <time className="mb-2 block text-sm font-sans font-normal text-white/90">{item.date}</time>
          <h3 className="mb-4 line-clamp-3 text-xl font-sans font-semibold leading-tight text-white">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-medium">READ MORE</span>
            <ArrowRight className="h-5 w-5 text-[#F5C842] transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
