import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Our Leadership | ${companyName}`,
    description: `Meet the experienced leadership team guiding ${companyName}'s success in container shipping and logistics between India and Bangladesh.`,
    keywords: `${companyName} leadership, executive team, shipping company management, logistics leaders, board of directors`,
    openGraph: {
      title: `Our Leadership | ${companyName}`,
      description: `Meet the experienced leadership team guiding ${companyName}.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Leadership team of ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/leadership`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function Leadership() {
  return (
    <div>
      <h1>Leadership</h1>
    </div>
  );
}
