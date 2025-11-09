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

export const metadata: Metadata = {
  title: "Home - INBD",
  description:
    "INBD ALLIANCE is a leading container delivery shipping company dedicated to connecting communities and fostering economic growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/everglory-favicon.ico" sizes="any" />
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
