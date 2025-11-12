import React from "react";
import Image from "next/image";

export function VisionSection() {
  return (
    <>
      {/* Main Description */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        Our vision is to be the leading Service provider of safe, reliable, and
        sustainable shipping and logistic solutions, connecting businesses and
        communities of countries across the globe.
      </p>

      {/* Image and Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        {/* Left Side: Square Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/about/table-of-contents/section-2-img.png" // Your image path
            alt="Vision Eye Icon"
            width={200} // Explicit width for the image
            height={200} // Explicit height for the image (making it square)
            objectFit="contain" // Use 'contain' to ensure the entire icon is visible
            className="rounded-none" // Optional: if your image itself is not a perfect square, this rounds the image
          />
        </div>

        {/* Right Side: Bulleted Text with Highlights */}
        <div className="space-y-4">
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is to empower global trade by delivering{" "}
            <strong className="text-foreground">innovative and eﬃcient</strong>{" "}
            shipping solutions, with a strong commitment to customer
            satisfaction and environmental responsibility.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is to be the most{" "}
            <strong className="text-foreground">trusted</strong> and{" "}
            <strong className="text-foreground">respected</strong> name in
            shipping industry, known for our unwavering dedication to caring,
            consistency, and sustainable practices.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is to shape the future of{" "}
            <strong className="text-foreground">
              shipping, multimodal transport and logistics
            </strong>{" "}
            by continuously improving quality of services, embracing innovation,
            and fostering a culture of excellence.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision emphasizes on the commitment we provide to our valued
            customer with dependable{" "}
            <strong className="text-foreground">
              shipping and logistic solutions
            </strong>
            , while we also highlight our customer-centric approach and
            dedication to innovation facilitating global trade and connecting
            businesses and communities.
          </p>
        </div>
      </div>
    </>
  );
}
