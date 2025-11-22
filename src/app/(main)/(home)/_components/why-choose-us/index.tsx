"use client";

import { FeatureRow } from "./_components/feature-row";
import { SectionHeader } from "./_components/section-header";

export const WHY_CHOOSE_US_CONTENT = {
  title: "Generating Hope - Delivering Quality",
  paragraphs: [
    "INBD Lines is guided by a highly experienced team of professionals who have been in the industry for decades and have successfully delivered solutions for customers of all industries irrespective of size of enterprises across the oceans around world.",
    "With strong industry expertise, we offer efficient delivery through PORT-TO-PORT, POINT-TO-POINT, DOOR-TO-DOOR, and SHELF-TO-SHELF services.",
  ],
};

export const FEATURES = [
  {
    id: "flexible-shipping",
    title: "Flexible shipping",
    subtext: "Port-To-Port, Point-To-Point, Door-To-Door.",
    imgSrc: "/homepage/why-choose-us/port-image.avif",
  },
  {
    id: "expert-team",
    title: "Expert team",
    subtext: "Ensuring smooth global operations.",
    imgSrc: "/homepage/why-choose-us/expert-team.avif",
  },
  {
    id: "customer-service",
    title: "Customer-first service",
    subtext: "Driving growth and trust.",
    imgSrc: "/homepage/why-choose-us/customer-service.png",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-background px-4 py-8 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <SectionHeader
          title={WHY_CHOOSE_US_CONTENT.title}
          paragraphs={WHY_CHOOSE_US_CONTENT.paragraphs}
        />
        <FeatureRow />
      </div>
    </section>
  );
}
