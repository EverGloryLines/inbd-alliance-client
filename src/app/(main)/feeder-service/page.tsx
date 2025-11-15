import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Feeder Service | ${companyName}`,
    description: `Efficient feeder services connecting gateway ports with smaller terminals in India and Bangladesh. We are a key link in the container logistics chain.`,
    keywords: `feeder service, container feeder vessel, India-Bangladesh feeder, port feeder service, transshipment services`,
    openGraph: {
      title: `Feeder Service | ${companyName}`,
      description: `Efficient feeder services connecting gateway ports with smaller terminals in India and Bangladesh.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Feeder vessel from ${companyName} in port`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/services/feeder-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function FeederService() {
  return (
    <div>
      <h1>Feeder Service</h1>
    </div>
  );
}
