import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Careers | ${companyName}`,
    description: `Join our team! Explore career opportunities in container shipping, logistics, and maritime services at ${companyName}.`,
    keywords: `shipping careers, maritime jobs, logistics jobs, careers at ${companyName}, shipping jobs India, shipping jobs Bangladesh`,
    openGraph: {
      title: `Careers | ${companyName}`,
      description: `Join our team! Explore career opportunities in container shipping and logistics.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Join the ${companyName} team`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/career`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}
export default function Career() {
  return (
    <div>
      <h1>Career</h1>
    </div>
  );
}
