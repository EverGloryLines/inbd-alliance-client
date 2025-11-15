import React from "react";
import { AboutUsHeroSection } from "./_components/hero-section";
import { AboutPageTableOfContent } from "./_components/table-of-content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `About Us | ${companyName}`,
    description: `Learn about ${companyName}, our history, and our commitment to being the top shipping and container transport partner on the India-Bangladesh route.`,
    keywords: `about ${companyName}, shipping company history, India-Bangladesh shipping leader, container transport mission, our values`,
    openGraph: {
      title: `About Us | ${companyName}`,
      description: `Learn about ${companyName}, our history, and our commitment to shipping on the India-Bangladesh route.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `About ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/about`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function About() {
  return (
    <div className="relative min-h-screen w-full">
      <AboutUsHeroSection />
      <AboutPageTableOfContent />
    </div>
  );
}
