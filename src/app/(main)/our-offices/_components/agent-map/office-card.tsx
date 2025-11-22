"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { OfficeInfo } from "@/data/office-data";

interface OfficeCardProps {
  office: OfficeInfo;
  index: number;
}

export function OfficeCard({ office, index }: OfficeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative rounded-none overflow-hidden border-2 border-orange-300 h-64 lg:h-72 group"
    >
      {/* Background image - Now dynamic */}
      <Image
        src={office.imgSrc}
        alt={`Background image for ${office.city} office`}
        fill
        priority={index < 3} // Prioritize loading the first 3 images
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />

      {/* Dark overlay for text readability (Unchanged) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent" />

      {/* Content positioned over image */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-orange-400 uppercase tracking-wide">
              {office.city} {/* You might want to show the city here */}
            </p>
            <p className="text-base font-medium text-white">{office.address}</p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-400 shrink-0" />
            <a
              href={`tel:${office.cell}`}
              className="text-base font-medium text-white hover:text-orange-300 transition-colors"
            >
              {office.cell}
            </a>
          </div>

          {/* <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
            <a
              href={`mailto:${office.email}`}
              className="truncate text-base font-medium text-white hover:text-orange-300 transition-colors"
            >
              {office.email}
            </a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
