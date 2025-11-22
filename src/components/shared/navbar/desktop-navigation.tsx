"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav-items";
import DesktopDropdown from "./desktop-dropdown";
import Image from "next/image";
import Link from "next/link";

interface DesktopNavigationProps {
  isScrolled: boolean;
  pathname: string;
}

export default function DesktopNavigation({
  isScrolled,
  pathname,
}: DesktopNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <div key={item.id}>
          {!item?.submenu && item.href ? (
            <Link href={item.href}>
              <div
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isScrolled
                      ? "text-gray-800"
                      : pathname !== "/"
                      ? "text-gray-800"
                      : "text-white hover:text-white/80"
                  } relative pb-1`}
                >
                  <Image
                    src={item.iconSrc as string}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isScrolled
                        ? "bg-gray-800"
                        : pathname !== "/"
                        ? "bg-gray-800"
                        : "bg-white hover:bg-white/80"
                    } ${
                      activeDropdown === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.id && (
                  <DesktopDropdown item={item} isScrolled={isScrolled} />
                )}
              </div>
            </Link>
          ) : (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 cursor-pointer ${
                  isScrolled
                    ? "text-gray-800"
                    : pathname !== "/"
                    ? "text-gray-800"
                    : "text-white hover:text-white/80"
                } relative pb-1`}
              >
                <Image
                  src={item.iconSrc as string}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                {item.label}
                {item.submenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isScrolled
                      ? "bg-gray-800"
                      : pathname !== "/"
                      ? "bg-gray-800"
                      : "bg-white hover:bg-white/80"
                  } ${
                    activeDropdown === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {item.submenu && activeDropdown === item.id && (
                <DesktopDropdown item={item} isScrolled={isScrolled} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
