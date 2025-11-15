import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Service Maps | ${companyName}`,
    description: `Visualize our shipping routes, port connections, and service loops for container transport between India and Bangladesh with our detailed service maps.`,
    keywords: `shipping service maps, route maps, India-Bangladesh shipping routes, container routes, feeder service map, liner service map`,
    openGraph: {
      title: `Service Maps | ${companyName}`,
      description: `Visualize our shipping routes and port connections for India-Bangladesh transport.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Detailed service map for ${companyName} India-Bangladesh shipping routes`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/service-maps`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function ServiceMaps() {
  return (
    <div>
      <h1>Service Maps</h1>
    </div>
  );
}
