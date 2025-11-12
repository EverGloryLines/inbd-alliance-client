// ./app/about/_components/sections/PhilosophySection.tsx
import React from "react";

export function PhilosophySection() {
  return (
    <>
    
      {/* Philosophy Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {/* Card 1: NICHE CARRIER */}
        <Card
          title="NICHE CARRIER"
          description="Everglory Lines is based in Bangladesh – situated within the SAARC Region."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5h1.5M3 3v.375a3 3 0 010 .75V6m0-3h.375a3 3 0 01.75 0H6m-3-3l.93 1.395M3 3v-.75a3 3 0 01.75 0H6m-3-3L1.5 1.5m1.5 1.5v-1.5m0 0h-1.5m1.5 1.5l1.395.93m-.75 3a3 3 0 010 .75H3m1.5-3a3 3 0 00-.75 0V3m.75 3H3M6 3h-1.5m1.5 0v-1.5m0 0h-1.5m1.5 1.5L6 4.5m-3-3l1.395-.93m.75 3a3 3 0 00-.75 0V3m.75 3H3M6 3h-1.5m1.5 0v-1.5m0 0h-1.5M6 3L4.5 4.5"
              />
            </svg>
          }
          colorClass="bg-emerald-600" // Closer to the light green in the image
          textColor="text-white"
        />

        {/* Card 2: UNITED FORCE */}
        <Card
          title="UNITED FORCE"
          description="Everglory Lines is based in Bangladesh – situated within SAARC Region."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8.25 21h7.5c1.642 0 3.067-1.312 3.375-2.906l2.05-10.375a1.125 1.125 0 00-1.1-1.365L13.5 7.105V5.25a3.75 3.75 0 00-7.5 0v1.855L1.08 7.329a1.125 1.125 0 00-1.1 1.365l2.05 10.375C3.183 19.688 4.608 21 6.25 21h7.5"
              />
            </svg>
          }
          colorClass="bg-sky-700" // Closer to the blue in the image
          textColor="text-white"
        />

        {/* Card 3: UNIFIED */}
        <Card
          title="UNIFIED"
          description="Unified under the Flag of the Nation FOR CARRIAGE OF GOODS..."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          colorClass="bg-green-700" // Darker green in the image
          textColor="text-white"
        />

        {/* Card 5: THE TASK */}
        <Card
          title="THE TASK"
          description="To Ride, By Standing On The Chest Of The Sea"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          colorClass="bg-emerald-800" // Slightly different green from image
          textColor="text-white"
        />

        {/* Card 6: INCOMPARABLE */}
        <Card
          title="INCOMPARABLE"
          description="Unified with outstanding, truly incomparable expertise to yield incomparable outcomes."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          colorClass="bg-amber-600" // Amber/Goldish from image
          textColor="text-white"
        />

        {/* Card 7: FUTURE EXPLORATION */}
        <Card
          title="FUTURE EXPLORATION"
          description="To Ride, By Standing On The Chest Of The Sea"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3H12m-6-15V4.5m6 0v.375m-6 0h-3.75a1.125 1.125 0 01-1.125-1.125V3h11.25v3L12 6.75M12 18.75h3.75m-3.75 0H7.5m10.5-11.25h2.25c.621 0 1.125.504 1.125 1.125v1.5m-4.5-2.625v-1.5m0-1.125H12a2.25 2.25 0 00-2.25 2.25V15h2.25v2.25M12 18.75h3.75m-3.75 0H7.5m10.5-11.25h2.25c.621 0 1.125.504 1.125 1.125v1.5m-4.5-2.625v-1.5m0-1.125H12a2.25 2.25 0 00-2.25 2.25V15h2.25v2.25"
              />
            </svg>
          }
          colorClass="bg-yellow-700" // Goldish from image
          textColor="text-white"
        />
      </div>
    </>
  );
}

// Sub-component for individual cards (adjusted for new layout)
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  textColor: string;
  isCenter?: boolean; // Still useful if you want the center card to be larger or span more columns
}

function Card({
  title,
  description,
  icon,
  colorClass,
  textColor,
  isCenter = false,
}: CardProps) {
  // Adjust card sizing for the new grid layout
  const cardLayoutClasses = isCenter
    ? "col-span-1 md:col-span-2 lg:col-span-1 min-h-[180px] md:min-h-[220px] max-w-sm" // Larger for center card, spans 2 cols on md
    : "col-span-1 min-h-[160px] md:min-h-[180px] max-w-sm"; // Standard size cards

  const titleSize = isCenter ? "text-xl" : "text-lg";
  const descriptionSize = isCenter ? "text-base" : "text-sm";

  return (
    <div
      className={`${cardLayoutClasses} ${colorClass} ${textColor} flex flex-col items-center justify-center text-center rounded-none shadow-md p-6`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className={`${titleSize} font-semibold mb-1 leading-tight font-plus-jakarta-sans`}>{title}</h3>
      <p
        className={`${descriptionSize} font-sans font-normal text-pretty leading-relaxed opacity-90`}
      >
        {description}
      </p>
    </div>
  );
}
