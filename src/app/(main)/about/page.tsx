import React from "react";
import { AboutUsHeroSection } from "./_components/hero-section";
import { AboutPageTableOfContent } from "./_components/table-of-content";

export default function About() {
  return (
    <div className="relative min-h-screen w-full">
      <AboutUsHeroSection />
      <AboutPageTableOfContent />
    </div>
  );
}
