"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OfficeCardsGrid } from "./office-cards-grid";
import { OfficeMapSelector } from "./office-map-selector";
import { officeData, Offices } from "@/data/office-data";

export function OfficesMapSection() {
  const [selectedOffice, setSelectedOffice] = useState<Offices | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleOfficeSelect = (office: Offices) => {
    setSelectedOffice(office);
    // Smooth scroll to agents grid
    setTimeout(() => {
      cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="w-full">
      {/* Map Selector Section */}
      <OfficeMapSelector
        offices={officeData}
        selectedOffice={selectedOffice}
        onOfficesSelect={handleOfficeSelect}
      />

      {/* Agent Cards Section */}
      <div className="md:px-4 md:py-8 bg-linear-to-b from-slate-50 to-slate-100">
        <div className="mx-auto container">
          <div ref={cardsRef} className="pt-4">
            <AnimatePresence mode="wait">
              {selectedOffice ? (
                <OfficeCardsGrid
                  key={selectedOffice.code}
                  offices={selectedOffice.offices}
                  country={selectedOffice.name}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <p className="text-xl font-song-myung font-medium text-slate-600">
                    Select a country to view agent information
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
