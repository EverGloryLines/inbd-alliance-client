import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Agency Network | ${companyName}`,
    description: `Explore our extensive agency network supporting our shipping, liner, and feeder services across the India-Bangladesh trade lane.`,
    keywords: `shipping agency network, ${companyName} agents, port agents India, port agents Bangladesh, liner agency`,
    openGraph: {
      title: `Agency Network | ${companyName}`,
      description: `Explore our extensive agency network for the India-Bangladesh trade lane.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${companyName}'s shipping agency network`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/agency-network`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function AgencyNetwork() {
  return (
    <div>
      <h1>Agency Network</h1>
    </div>
  );
}
