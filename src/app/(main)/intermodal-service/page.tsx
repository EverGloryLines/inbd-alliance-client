import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Intermodal Service | ${companyName}`,
    description: `Seamless intermodal transportation solutions. We manage your container's entire journey via ship, rail, and truck across India and Bangladesh.`,
    keywords: `intermodal service, intermodal transport, ship rail truck logistics, container logistics India, container logistics Bangladesh`,
    openGraph: {
      title: `Intermodal Service | ${companyName}`,
      description: `Seamless intermodal transportation solutions via ship, rail, and truck across India and Bangladesh.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Intermodal transport by ${companyName} combining ship, rail, and truck`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/services/intermodal-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function IntermodalService() {
  return (
    <div>
      <h1>Intermodal Service</h1>
    </div>
  );
}
