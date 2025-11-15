import type { Metadata } from "next";
import { Work_Sans, Song_Myung } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/shared/provider/lenis-provider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const songMyung = Song_Myung({
  variable: "--font-song-myung",
  weight: ["400"],
});

export function generateMetadata(): Metadata {
  const companyName = "INBD ALLIANCE";
  const baseUrl = "https://inbdalliance.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `${companyName} | India-Bangladesh Container Shipping & Liner Services`,
    description: `Leading container transport & shipping company specializing in the India-Bangladesh route. We offer reliable liner, feeder, multimodal, and intermodal services with our own fleet.`,
    keywords: `India-Bangladesh shipping, container transport, shipping company, feeder service, liner service, multimodal transport, intermodal services, ${companyName}, shipping between India and Bangladesh`,
    openGraph: {
      title: `${companyName} | India-Bangladesh Container Shipping & Liner Services`,
      description: `Leading container transport & shipping company specializing in the India-Bangladesh route. We offer reliable liner, feeder, multimodal, and intermodal services with our own fleet.`,
      images: [
        {
          url: "/logo/inbd-og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${companyName} shipping vessel on the India-Bangladesh route`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`
        ${workSans.variable}
        ${songMyung.variable}
        font-sans antialiased
        `}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
