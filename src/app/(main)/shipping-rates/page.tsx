import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Shipping Rates & Quotes | ${companyName}`,
    description: `Request a quote for your container shipment between India and Bangladesh. Get competitive rates for our liner, feeder, and multimodal services.`,
    keywords: `shipping rates, request a quote, container shipping cost, India-Bangladesh shipping rates, freight quote, ${companyName}`,
    openGraph: {
      title: `Shipping Rates & Quotes | ${companyName}`,
      description: `Request a quote for your container shipment between India and Bangladesh.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Request a shipping quote from ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/shipping-rates`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function ShippingRates() {
  return (
    <div>
      <h1>Shipping Rates</h1>
    </div>
  );
}
