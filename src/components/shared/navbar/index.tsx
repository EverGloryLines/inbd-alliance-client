"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  //console.log(pathname);
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
        isScrolled ? "bg-white shadow-lg" : pathname !== "/" ? "bg-white shadow-lg" : isMobile ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src="/logo/INBD-Logo-removedBg.png"
              alt="Sea Lloyd Logo"
              width={180}
              height={40}
              className={`${isScrolled ? "h-16" : pathname !== "/" ? "h-16" : isMobile ? "h-12" : "h-20"} w-auto`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && <DesktopNavigation pathname={pathname} isScrolled={isScrolled} />}

        {/* Mobile Navigation */}
        {isMobile && <MobileNavigation isMobile={isMobile} isScrolled={isScrolled} />}
      </div>
    </nav>
  );
}
