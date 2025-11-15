import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `News & Updates | ${companyName}`,
    description: `Stay updated with the latest news, service announcements, and logistics insights from ${companyName}, your India-Bangladesh shipping specialist.`,
    keywords: `shipping news, logistics news, ${companyName} news, service updates, India-Bangladesh trade news, maritime news`,
    openGraph: {
      title: `News & Updates | ${companyName}`,
      description: `Stay updated with the latest news and service announcements from ${companyName}.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Latest news from ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/news`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function News() {
  return <div></div>;
}
