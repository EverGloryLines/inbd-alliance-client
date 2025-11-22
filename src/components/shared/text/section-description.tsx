import React from "react";
import { cn } from "@/lib/utils";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        "text-base lg:text-lg max-w-sm sm:max-w-3xl mx-auto font-sans font-normal tracking-[-0.02em] text-muted-foreground leading-normal",
        className
      )}
    >
      {children}
    </p>
  );
};
