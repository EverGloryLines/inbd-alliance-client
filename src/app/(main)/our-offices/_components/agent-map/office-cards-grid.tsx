"use client";

import { motion } from "motion/react";
import { OfficeCard } from "./office-card";
import { SectionTitle } from "@/components/shared/text/section-title";
import { OfficeInfo } from "@/data/office-data";

interface OfficeCardsGridProps {
  offices: OfficeInfo[];
  country: string;
}

export function OfficeCardsGrid({ offices, country }: OfficeCardsGridProps) {
  return (
    <motion.div
      key={country}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 rounded-none p-8"
    >
      <SectionTitle className="mb-4 tracking-normal">
        Our offices in {country}
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {offices.map((office, index) => (
          <OfficeCard key={index} office={office} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
