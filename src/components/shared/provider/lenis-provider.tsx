"use client";

import { ReactNode } from "react";
import NProgressBar from "../loading-bar/navigation-progressbar";
import { useLenis } from "@/hooks/use-lenis";
import ScrollProgressButton from "../buttons/scroll-progress-button";

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  useLenis();

  return (
    <>
      <NProgressBar color="#FB1910" height={3} />
      {children}
      <ScrollProgressButton />
    </>
  );
};
