
import React from "react";
import Image from "next/image";

export function OurMissionSection() {
  return (
    <>
      {/* Image and Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        {/* Left Side: Square Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/about/table-of-contents/section-3-img.jpg"
            alt="Mission Logo Image"
            width={200}
            height={200}
            objectFit="contain"
            className="rounded-none"
          />
        </div>

        {/* Right Side: Bulleted Text with Highlights */}
        <div className="space-y-4">
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our mission is to provide{" "}
            <strong className="text-foreground">
              innovative shipping, logistic and multimodal
            </strong>{" "}
            transport services that meet the evolving needs of our customers,
            while promoting excellence in everything we do.
          </p>
        </div>
      </div>

      {/* Main Description */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        We&apos;re committed to building{" "}
        <strong className="text-foreground">long-term </strong>relationships
        with our customers, partners, and communities, and to making a positive
        impact on the world around us.
      </p>

      {/* Generating Hope → Delivering Quality */}
      <div className="flex flex-col sm:flex-row font-plus-jakarta-sans items-center justify-center gap-4 sm:gap-6 text-[#B29440] py-8">
        <h3 className="text-2xl lg:text-3xl font-medium  uppercase tracking-wide">
          Generating <span className="font-bold text-[#B29440]">&apos;Hope&apos;</span>
        </h3>
        <div className="hidden sm:block text-[#B29440] text-3xl font-bold">
          →
        </div>
        <div className="block sm:hidden text-[#B29440] text-3xl font-bold rotate-90">
          →
        </div>
        <h3 className="text-2xl lg:text-3xl font-medium  uppercase tracking-wide">
          Delivering <span className="font-bold text-[#B29440]">&apos;Quality&apos;</span>
        </h3>
      </div>
    </>
  );
}
