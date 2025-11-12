import React from "react";

export function IdeologySection() {
  return (
    <>
      {/* Initial Summary Paragraph */}
      <p className="mb-10 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        Our ideology is distinct and purpose-driven, acknowledging the inherent
        differences across communities, states, and nations. We embrace these
        varied perspectives, striving for a unique path that is tailored to our
        specific context and ambitions. This distinctiveness shapes our entire
        operational philosophy, from our objectives to our contributions towards
        national development and a stronger maritime future.
      </p>

      {/* Card Layout for "Our Distinctives" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Our Purpose & National Expectations */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.5V3.75m0 0L3 9.75m10.5-6V9.75m0 0l10.5 5.25m1.5 0L21 12m-2.25 4.5L13.5 16.5"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Purpose-Driven & Nation-Focused
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            Our presence is driven by a unique purpose: to meet the specific
            expectations of our nation and its distinct people, considering
            their accommodative nature and unique requirements.
          </p>
        </div>

        {/* Card 2: Distinct Approach & Abilities */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L15.75 21.75 17.25 12h-7.5l-3.75 6.75L4.5 13.5h-.75z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Adaptive Approach & Unique Abilities
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            Our approach is rooted in our distinct abilities, mentality, and
            strategy, which are shaped by necessity, acquired capabilities, and
            a commitment to continuous learning from experience.
          </p>
        </div>

        {/* Card 3: Quality Services & Methods */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Distinct Methods & Quality Services
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            Driven by unique priorities and methods, our services stand apart.
            They are built upon our exceptional knowledge, expertise, and
            experience, ensuring quality in every initiative.
          </p>
        </div>

        {/* Card 4: Economic Contribution & Commitment */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182L12 10.5M12 18L9.75 16.293m-2.25 2.083L12 18zM12 18l2.25 1.707m-2.25-1.707h3.375m-3.375 0H9.75M12 18.75V21M12 6V3M6.375 15.75H5.25A2.25 2.25 0 013 13.5V4.875c0-.621.504-1.125 1.125-1.125H9.75v11.25ZM18.375 7.5H19.5a2.25 2.25 0 012.25 2.25v10.875a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V19.5m10.875-11.25H18.75v11.25m-6-11.25v11.25"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Economic Contribution & Growth
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            Our commitment extends to our people, customers, and the entire
            commerce and industry. We strive to significantly contribute to our
            nation&apos;s economy, even as an emerging, undiversified entity.
          </p>
        </div>

        {/* Card 5: Focused Future & National Development */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L15.75 21.75 17.25 12h-7.5l-3.75 6.75L4.5 13.5h-.75z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Clear Focus & Developed Nation Goal
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            With a different way forward, our focus, aim, ambition, and targets
            are clearly defined. We are working diligently to make our
            contribution visible, helping our nation emerge as a developed
            maritime power.
          </p>
        </div>

        {/* Card 6: Maritime Strength & Independence */}
        <div className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12c0 1.011-.607 1.91-1.524 2.378C17.584 15.312 16.5 16.5 16.5 18H20.25c.414 0 .75.336.75.75s-.336.75-.75.75H16.5a2.25 2.25 0 01-2.25-2.25c0-1.378-1.07-2.522-2.316-2.733C10.74 13.996 9.75 12.793 9.75 11.5a.75.75 0 01.75-.75h4.5a.75.75 0 00.75-.75V7.5a.75.75 0 01.75-.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.5A2.25 2.25 0 0015 3.75c0-1.378-1.07-2.522-2.316-2.733C10.74 0.996 9.75-0.207 9.75 1.042V4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 00-.75.75v10.5a.75.75 0 01-.75.75H3.75a.75.75 0 00-.75.75s.336.75.75.75H9a2.25 2.25 0 002.25 2.25c0 1.378 1.07 2.522 2.316 2.733C15.26 23.004 16.25 24.207 16.25 22.958V19.5a.75.75 0 01.75-.75h4.5a.75.75 0 00.75-.75V12z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Empowering Bangladesh&apos;s Maritime Future
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
            Our success will be the success of our people and Bangladesh,
            standing strong through enhanced maritime commerce as a main source
            of income, contributing to an independent economy.
          </p>
        </div>
      </div>
    </>
  );
}
