"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/logo/INBD-Logo-removedBg.png"
            alt="Sea Lloyd Logo"
            width={180}
            height={40}
            className={`${isScrolled? "h-16" : "h-20"} w-auto`}
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && <DesktopNavigation isScrolled={isScrolled} />}

        {/* Mobile Navigation */}
        {isMobile && <MobileNavigation isScrolled={isScrolled} />}
      </div>
    </nav>
  );
}
