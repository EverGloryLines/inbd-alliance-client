import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        "text-[26px] md:text-[30px] 2xl:text-[36px] font-song-myung font-medium tracking-[-0.02em] bg-linear-to-b from-[#ed733b] via-[#ea6f36] to-[#a13706] bg-clip-text text-transparent leading-[1.4] my-2 uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
};
