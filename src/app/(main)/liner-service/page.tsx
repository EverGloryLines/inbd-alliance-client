import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Liner Service | ${companyName}`,
    description: `Reliable, scheduled liner services for container shipping between major ports in India and Bangladesh. Discover our routes and schedules.`,
    keywords: `liner service, container liner service, India-Bangladesh liner shipping, scheduled shipping, port-to-port container`,
    openGraph: {
      title: `Liner Service | ${companyName}`,
      description: `Reliable, scheduled liner services for container shipping between India and Bangladesh.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${companyName} container ship providing liner services`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/services/liner-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function LinerService() {
  return (
    <div>
      <h1>Liner Service</h1>
    </div>
  );
}
