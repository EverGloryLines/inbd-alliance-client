import React from 'react'
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Container Tracking | ${companyName}`,
    description: `Track your container in real-time. Enter your booking or container number to get the current status of your shipment on the India-Bangladesh route.`,
    keywords: `container tracking, track and trace, shipment tracking, ${companyName} tracking, container status, India-Bangladesh shipment`,
    openGraph: {
      title: `Container Tracking | ${companyName}`,
      description: `Track your container in real-time. Get the current status of your shipment.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Real-time container tracking portal for ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/tracking`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function Tracking() {
  return (
    <div>
      <h1>Tracking</h1>
    </div>
  )
}
