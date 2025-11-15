import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Multimodal Service | ${companyName}`,
    description: `Simplified logistics with our multimodal transport services. One contract covers your container's complete door-to-door journey via multiple transport modes.`,
    keywords: `multimodal service, multimodal transport, door-to-door shipping, combined transport, India-Bangladesh logistics`,
    openGraph: {
      title: `Multimodal Service | ${companyName}`,
      description: `Simplified logistics with our multimodal transport services for your door-to-door journey.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Multimodal logistics solution from ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/services/multimodal-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function MultimodalService() {
  return (
    <div>
      <h1>Multimodal Service</h1>
    </div>
  );
}
