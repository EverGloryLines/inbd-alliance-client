"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  {
    name: "Eagle-Ocean",
    logoImage: "/homepage/logo-ticker/eagle-ocean-marine.jpg",
  },
  { name: "IGPI", logoImage: "/homepage/logo-ticker/IGPI-boxed.jpg" },
  {
    name: "Sadharan-Bima",
    logoImage: "/homepage/logo-ticker/sadharan-bima.avif",
  },
  {
    name: "The-American-Club",
    logoImage: "/homepage/logo-ticker/the-american-club.jpeg",
  },
  { name: "TT-Club", logoImage: "/homepage/logo-ticker/tt-club.jpg" },
  //  Duplicate for continuous scroll
  {
    name: "Eagle-Ocean",
    logoImage: "/homepage/logo-ticker/eagle-ocean-marine.jpg",
  },
  { name: "IGPI", logoImage: "/homepage/logo-ticker/IGPI-boxed.jpg" },
  {
    name: "Sadharan-Bima",
    logoImage: "/homepage/logo-ticker/sadharan-bima.avif",
  },
  {
    name: "The-American-Club",
    logoImage: "/homepage/logo-ticker/the-american-club.jpeg",
  },
  { name: "TT-Club", logoImage: "/homepage/logo-ticker/tt-club.jpg" },
  //  Duplicate for continuous scroll
  {
    name: "Eagle-Ocean",
    logoImage: "/homepage/logo-ticker/eagle-ocean-marine.jpg",
  },
  { name: "IGPI", logoImage: "/homepage/logo-ticker/IGPI-boxed.jpg" },
  {
    name: "Sadharan-Bima",
    logoImage: "/homepage/logo-ticker/sadharan-bima.avif",
  },
  {
    name: "The-American-Club",
    logoImage: "/homepage/logo-ticker/the-american-club.jpeg",
  },
  { name: "TT-Club", logoImage: "/homepage/logo-ticker/tt-club.jpg" },
];

export const LogoTicker = () => {
  return (
    <div className="w-full pb-4 sm:pb-0 md:pb-12 bg-white pr-14 mt-10">
      <div className="w-full">
        <h2 className="pl-8 sm:pl-14 text-center mb-8 text-[26px] md:text-[30px] 2xl:text-[36px] font-song-myung font-medium tracking-[-0.02em] bg-linear-to-b from-[#ed733b] via-[#ea6f36] to-[#a13706] bg-clip-text text-transparent leading-[1.4] my-2">
          ALL OUR SHIPS AND SERVICES ARE INSURED AND REINSURED BY:
        </h2>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <Marquee pauseOnHover speed={50} gradient={false} className="flex">
            {logos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="h-24 w-auto mx-7">
                <Image
                  src={logo.logoImage}
                  width={400}
                  height={400}
                  alt={`${logo.name} Premium website redesign for real estate company in UAE`}
                  className="h-24 w-auto"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
