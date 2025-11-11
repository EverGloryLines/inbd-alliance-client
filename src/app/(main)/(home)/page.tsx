import React from "react";
import { HeroSection } from "./_components/hero-section";
import { LogoTicker } from "./_components/logo-ticker-section";
import { WhyChooseUs } from "./_components/why-choose-us-section";
import { ClassificationSection } from "./_components/classification-section/classification-section";
import { ContainerShowcase } from "./_components/container-section";
import VesselTrackingMaps from "./_components/vessel-tracking-section/vessel-tracking-maps";
import NewsSection from "./_components/news-section";
import { featuredNews, newsList } from "@/data/homepage-news";
import { AffiliationSection } from "./_components/affiliation-section";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <LogoTicker />
      <WhyChooseUs />
      <ClassificationSection />
      <ContainerShowcase />
      <VesselTrackingMaps />
      <NewsSection featuredNews={featuredNews} newsList={newsList} />
       <AffiliationSection />
    </div>
  );
}
