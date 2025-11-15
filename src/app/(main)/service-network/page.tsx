import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Service Network | ${companyName}`,
    description: `View the complete service network for ${companyName}, detailing our port coverage and routes for container transport in India and Bangladesh.`,
    keywords: `shipping service network, port coverage, India-Bangladesh shipping routes, container service map, feeder network`,
    openGraph: {
      title: `Service Network | ${companyName}`,
      description: `View our complete port coverage and routes for India-Bangladesh container transport.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Map of ${companyName}'s service network and routes`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/service-network`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function ServiceNetwork() {
  return (
    <div>
      <h1>Service Network</h1>
    </div>
  );
}
