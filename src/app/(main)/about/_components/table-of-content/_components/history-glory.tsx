import React from 'react';
import Image from 'next/image';

export function HistoryGlorySection() {
  return (
    <>
      {/* Square Image above description (placeholder) */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/about/table-of-contents/section-1-img.jpg" 
          alt="Abstract representation of history"
          width={850} // Set your desired width
          height={350} // Set your desired height to make it square
          className="rounded-none object-cover shadow-md"
        />
      </div>


      {/* Description Text */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        From <strong className="text-foreground">Uniglory</strong> to{' '}
        <strong className="text-foreground">Everglory Group</strong>. Members of
        the creation team initiated the foundation process in <strong className="text-foreground">1985</strong>. At the
        inception members named the Group as “Uniglory”. Over the period of last
        forty years the Group has progressed, improved and enhanced its ability
        and emerged as a knowledge-based well experienced business house. The
        Group was renamed in 2024 to <strong className="text-foreground">“Everglory Group”</strong> and strengthened its
        entities at home and abroad and finally arose as one of the strongest
        business houses of the region.
      </p>

      {/* Timeline Design */}
      <div className="flex items-center justify-between text-muted-foreground mt-8">
        {/* Start Point */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="rounded-full border-2 border-muted-foreground p-3 mb-2">
            {/* You could use an SVG icon here if desired */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6H12a2.25 2.25 0 00-2.25 2.25V12a2.25 2.25 0 002.25 2.25h3.75M12 18.75V21M9 12H3.375M18.75 12H21"
              />
            </svg>
          </div>
          <p className="text-sm font-semibold whitespace-nowrap">1985 Uniglory</p>
        </div>

        {/* Connecting Line (wavy style placeholder) */}
        <div className="grow mx-4 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted-foreground transform -translate-y-1/2"></div>
           {/* A wavy line is harder with pure CSS; this is a simplified representation.
               For a true wavy line, you might use an SVG or a background image.
               Here's a simpler visual hint of progression.
           */}
          <svg className="w-full h-8 absolute top-1/2 left-0 transform -translate-y-1/2" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground opacity-70"/>
          </svg>
        </div>


        {/* End Point */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="rounded-full border-2 border-muted-foreground p-3 mb-2">
            {/* You could use an SVG icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21L.75 12m0 0l1.5-9L3 3m18 18l1.5-9m0 0l-1.5-9L21 3m0 18H5.25c-.621 0-1.125-.504-1.125-1.125V11.25c0-1.036 1.092-1.854 2.074-1.664L10.5 11.25m4.5 10.5h-4.5V11.25m4.5 10.5H18c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-1.092-1.854-2.074-1.664L13.5 11.25m0 7.5V21m-6-3.75H8.25m-1.5 0H5.25V11.25m1.5 7.5H8.25m0-10.5h1.5V12c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125V12h1.5zm6 7.5h1.5V12c0-.621-.504-1.125-1.125-1.125H12c-.621 0-1.125.504-1.125 1.125V12h1.5z"
              />
            </svg>
          </div>
          <p className="text-sm font-semibold whitespace-nowrap">2024 Everglory</p>
        </div>
      </div>
    </>
  );
}