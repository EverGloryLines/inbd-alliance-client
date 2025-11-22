import React from "react";
import { HistoryGlorySection } from "./_components/history-glory";
import { VisionSection } from "./_components/vision-section";
import { OurMissionSection } from "./_components/our-mission-section";
import { IdentitySection } from "./_components/identity-section";
import { IdeologySection } from "./_components/ideology-section";
import { PhilosophySection } from "./_components/philosophy-section";
import { ApproachSection } from "./_components/approach-section";
import { CommonalitiesAndDifferenceSection } from "./_components/commonalities-differences-section";

interface Section {
  id: string;
  title: string;
  number: number;
}

interface AboutContentProps {
  sections: Section[];
}

export function AboutContent({ sections }: AboutContentProps) {
  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case "history-glory":
        return <HistoryGlorySection />;
      case "vision":
        return <VisionSection />;
      case "our-mission":
        return <OurMissionSection />;
      case "identity":
        return <IdentitySection />;
      case "ideology":
        return <IdeologySection />;
      case "philosophy":
        return <PhilosophySection />;
      case "approach":
        return <ApproachSection />;
      case "commonalities-and-differences":
        return <CommonalitiesAndDifferenceSection />;
      // Add more cases for other sections if you decide to break them out
      default:
        return (
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>Content for {sectionId} goes here.</p>
            <p>
              This is a placeholder. Please implement the specific component for
              this section.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="space-y-16">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-8 rounded-none border border-border bg-[#FDFDFD] py-5 lg:py-6 px-6 lg:px-10"
        >
          <h2 className="text-xl md:text-3xl 2xl:text-5xl font-song-myung font-medium tracking-[-0.02em] bg-linear-to-b from-[#ed733b] via-[#ea6f36] to-[#a13706] bg-clip-text text-transparent leading-[1.4] mb-4 md:mb-6">
            {section.title}
          </h2>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {renderSectionContent(section.id)}
          </div>
        </section>
      ))}
    </main>
  );
}
