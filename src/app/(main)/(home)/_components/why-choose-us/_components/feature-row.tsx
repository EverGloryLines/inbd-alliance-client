"use client";

import { FEATURES } from "..";
import { FeatureItem } from "./feature-item";

export function FeatureRow() {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-0">
      {FEATURES.map((feature, index) => (
        <FeatureItem
          key={feature.id}
          title={feature.title}
          subtext={feature.subtext}
          imgSrc={feature.imgSrc}
          index={index}
          showSeparator={index < FEATURES.length - 1}
        />
      ))}
    </div>
  );
}
