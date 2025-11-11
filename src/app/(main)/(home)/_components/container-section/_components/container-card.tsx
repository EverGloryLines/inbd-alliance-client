"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContainerCardProps } from "@/types";

export function ContainerCard({ container, index }: ContainerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white overflow-hidden transition-shadow duration-300 h-full flex flex-col"
      role="article"
      aria-labelledby={`container-title-${container.id}`}
    >
      <div className="overflow-hidden w-full h-48 md:h-72 shrink-0">
        <Image
          src={container.imageUrl}
          alt={container.imageAlt}
          width={800}
          height={384}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3
          id={`container-title-${container.id}`}
          className="text-base md:text-lg lg:text-2xl font-song-myung font-medium tracking-[-0.02em] bg-linear-to-b from-[#ed733b] via-[#ea6f36] to-[#a13706] bg-clip-text text-transparent leading-[1.4] my-2"
        >
          {container.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 font-sans grow overflow-hidden">
          {container.description}
        </p>

        <Link
          href={`/fleet/container`}
          className="inline-flex items-center gap-2 text-[#ed733b] font-semibold hover:text-[#ed733b]/80 transition-colors duration-300 group/link mt-auto"
          aria-label={`Read specification for ${container.title}`}
        >
          <span className="relative font-sans font-medium">
            Read Specification
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#ed733b] transition-all duration-300 ${
                isHovered ? "w-full" : "w-0"
              }`}
            />
          </span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
