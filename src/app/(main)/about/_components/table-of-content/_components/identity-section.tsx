import React from "react";

export function IdentitySection() {
  return (
    <>
      {/* Summarized Identity Key Points (Icon & List Based) */}
      <div className="mb-10 p-6 rounded-none bg-card-foreground/5 dark:bg-card-foreground/10 border border-border">
        {/* <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
          Our Distinct Identity
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          {/* Key Point 1: Name & Purpose */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Name & Memorable Impact
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-sans font-normal">
                &quot;EVERGLORY&quot; is chosen for its memorability and its
                aspirational reference to glorifying the Creator, signifying a
                distinct regional operator for South Asia.
              </p>
            </div>
          </div>

          {/* Key Point 2: Logo Symbolism */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zm5.813-2.604l2.25 2.25m0 0l2.25 2.25M15.75 12l2.25-2.25M15.75 12l-2.25 2.25m-4.5-4.5l2.25-2.25m0 0l2.25-2.25M9.75 9l2.25 2.25M9.75 9l-2.25 2.25"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Logo & Maritime Pride
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-sans font-normal">
                The logotype, written in capital letters, signifies strength and
                authority. The curve, mounting South Asia like a crown,
                symbolizes efficient sailing and regional maritime pride.
              </p>
            </div>
          </div>

          {/* Key Point 3: Color Symbolism */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.788 1.122A2.395 2.395 0 015.58 20.5H18.42a2.395 2.395 0 011.83-3.256 3 3 0 00-5.788-1.122M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Colors: Roots & Prosperity
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-sans font-normal">
                Green and Red represent the nation&apos;s colors, robustness,
                and deep roots in the Sub-continent. Gold signifies noble
                ambitions, prosperity, and happiness for the region.
              </p>
            </div>
          </div>

          {/* Key Point 4: Foundational Principles (Summarized from the problematic paragraph) */}
          <div className="flex items-start space-x-4">
            <div className="shrink-0 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Commitment & Values
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-sans font-normal">
                Our identity is built on safety, quality, and a profound
                commitment to the communities and customers of the South Asian
                region, reflecting a blend of cultural roots and ambitious
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
