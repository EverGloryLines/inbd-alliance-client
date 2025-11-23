import React from "react";
import { HeroSection } from "./_components/hero-section";
import { LogoTickerSection } from "./_components/logo-ticker-section";
import { ClassificationSection } from "./_components/classification-section/classification-section";
import { ContainerShowcase } from "./_components/container-section";
import VesselTrackingMaps from "./_components/vessel-tracking-section/vessel-tracking-maps";
import { AffiliationSection } from "./_components/affiliation-section";
import { WhyChooseUsSection } from "./_components/why-choose-us";
import { NewsSliderSection } from "./_components/news-section";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <LogoTickerSection />
      <WhyChooseUsSection />
      <ClassificationSection />
      <ContainerShowcase />
      <VesselTrackingMaps />
      <NewsSliderSection />
      <AffiliationSection />
    </div>
  );
}
