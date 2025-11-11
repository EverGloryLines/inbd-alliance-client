/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WhyChooseUs() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayCount(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          const controls = animate(count, 1985, {
            duration: 2.5,
            ease: "easeOut",
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView, count]);

  return (
    <section
      ref={sectionRef}
      className="py-8 lg:py-16 2xl:py-24 px-4 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute top-0 -left-10 lg:-top-10 lg:-left-14 w-56 h-40 opacity-15 lg:opacity-25 pointer-events-none z-0">
              <Image
                src="/homepage/why-choose-us/export-import.png"
                alt="Import Export Containers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent" />
            </div>

            <div className="hidden lg:block relative pt-24 lg:pt-20">
              <div className="relative w-full h-[580px] lg:h-[600px]">
                <div className="absolute left-0 top-0 w-80 lg:w-96 h-[420px] lg:h-[460px] overflow-hidden shadow-xl border-10 rounded-none border-white z-10">
                  <Image
                    src="/homepage/why-choose-us/uddipon-express.jpeg"
                    alt="Container Ship Aerial"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-0 lg:left-50 top-44 lg:top-64 w-64 lg:w-80 h-40 lg:h-64 overflow-hidden shadow-xl border-10 rounded-none border-white z-15">
                  <Image
                    src="/homepage/why-choose-us/container-port-one.jpeg"
                    alt="Container Ship at Sea"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-2 -left-30 lg:left-0 z-30">
                  <div className="py-2 bg-[#2d5f4f] rounded-sm w-44 lg:w-50 flex flex-col items-center justify-center shadow-2xl border-14 border-white">
                    <div className="text-white text-5xl lg:text-6xl font-song-myung font-bold">
                      {displayCount}
                    </div>
                    <div className="text-white text-base lg:text-lg font-medium mt-1">
                      Since
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 mt-16 lg:mt-0"
          >
            <div className="space-y-3">
              <div className="text-[#FF7336] text-sm font-sans font-semibold tracking-wider uppercase">
                Oceanwide Container Liner Services
              </div>
              <h2 className="text-[40px] md:text-[52px] 2xl:text-[56px] font-song-myung font-semibold tracking-[-0.02em] bg-linear-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-snug my-2">
                Generating Hope
                <br /> Delivering Quality
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-song-myung font-bold text-gray-900">
                Global Expertise in Seamless Ocean Shipping
              </h3>

              <div className="border-l-4 border-[#ff6b35] pl-6 py-2 max-w-[500px]">
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                  INBD Lines is guided by a highly experienced team of
                  professionals who have been in the industry for decades and
                  have successfully delivered solutions for customers of all
                  industries irrespective of size of enterprises across the
                  oceans around world.
                </p>
              </div>

              <div className="border-l-4 border-[#ff6b35] pl-6 py-2 max-w-[500px]">
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                  With strong industry expertise, we offer efficient delivery
                  through PORT-TO-PORT, POINT-TO-POINT, DOOR-TO-DOOR, and
                  SHELF-TO-SHELF services.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-song-myung font-bold text-gray-900">
                Driven by Experience, Focused on Customer Success
              </h3>

              <div className="space-y-2 max-w-[500px]">
                {[
                  "Flexible shipping — PORT-TO-PORT, POINT-TO-POINT, DOOR-TO-DOOR.",
                  "Expert team ensuring smooth global operations.",
                  "Customer-first service driving growth and trust.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full border-2 border-[#4db8ac] flex items-center justify-center mt-0.5 bg-white">
                      <Check className="w-4 h-4 text-[#4db8ac] stroke-[3px]" />
                    </div>
                    <span className="text-gray-700 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 relative">
              <Link href="/about">
                <button className="cursor-pointer water-pour-button relative px-8 py-4 bg-[#2d5f4f] text-white font-bold text-sm tracking-wider rounded-none overflow-hidden transition-all duration-400 hover:shadow-lg group">
                  <span className="relative z-10">MORE ABOUT US</span>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#ff6b35] transform origin-top translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-[#ff6b35] transform origin-bottom -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out clip-bottom" />
                  </div>
                </button>
              </Link>

              <div className="hidden lg:block absolute -bottom-24 -right-24 w-80 h-auto z-10 pointer-events-none opacity-30">
                <div className="relative w-full h-56">
                  <Image
                    src="/homepage/why-choose-us/orange-truck.png"
                    alt="Delivery Truck"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
