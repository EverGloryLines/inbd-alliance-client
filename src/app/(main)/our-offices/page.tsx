import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Our Offices | ${companyName}`,
    description: `Find our office locations in India and Bangladesh. Contact our local teams for container shipping, feeder, and multimodal service inquiries.`,
    keywords: `${companyName} offices, office locations, contact shipping office, India shipping office, Bangladesh shipping office`,
    openGraph: {
      title: `Our Offices | ${companyName}`,
      description: `Find our office locations in India and Bangladesh.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Map of ${companyName} office locations`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-offices`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function OurOffices() {
  return(
    <div>
      <h1>Our Offices</h1>
    </div>
  )
}
