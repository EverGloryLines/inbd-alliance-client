import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Shipping Schedules | ${companyName}`,
    description: `View our vessel schedules, port calls, and transit times for our liner and feeder services between India and Bangladesh. Plan your shipment with confidence.`,
    keywords: `shipping schedules, vessel schedule, port rotation, transit times, India-Bangladesh shipping schedule, ETD, ETA`,
    openGraph: {
      title: `Shipping Schedules | ${companyName}`,
      description: `View our vessel schedules, port calls, and transit times for India-Bangladesh services.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Vessel shipping schedules for ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/schedules`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function Schedules() {
  return (
    <div>
      <h1>Schedules</h1>
    </div>
  );
}
