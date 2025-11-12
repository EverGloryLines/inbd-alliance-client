/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { AboutContent } from "./about-content";
import { TableOfContents } from "./table-of-content";

const sections = [
  { id: "history-glory", title: "History & Glory", number: 1 },
  { id: "vision", title: "Vision", number: 2 },
  { id: "our-mission", title: "Our Mission", number: 3 },
  { id: "identity", title: "Identity", number: 4 },
  { id: "ideology", title: "Ideology", number: 5 },
  { id: "philosophy", title: "Philosophy", number: 6 },
  { id: "approach", title: "Approach", number: 7 },
  { id: "commonalities-and-differences", title: "Commonalities and Diferences", number: 8 },
];

export function AboutPageTableOfContent() {
  const [activeSection, setActiveSection] = useState("history-glory");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling 300px
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <AboutContent sections={sections} />

          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-16">
              <TableOfContents
                sections={sections}
                activeSection={activeSection}
              />
            </div>
          </aside>
        </div>
      </div>

     
      {/* Mobile TOC - Collapsible at top */}
      <div className="lg:hidden">
        <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <div className="flex gap-2 p-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {section.number}. {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
