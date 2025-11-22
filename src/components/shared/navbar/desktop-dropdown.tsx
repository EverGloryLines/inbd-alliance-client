/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { NavItem } from "@/constants/nav-items";
import { motion } from "motion/react";
import Image from "next/image";
import DropdownItem from "./dropdown-item";

interface DesktopDropdownProps {
  item: NavItem;
  isScrolled: boolean;
}

export default function DesktopDropdown({
  item,
  isScrolled,
}: DesktopDropdownProps) {
  // Identify specific dropdown types
  const isInbdDropdown = item.id === "inbd";
  const isServicesDropdown = item.id === "services";

  // 1. WIDTH CONTROL
  const widthClass = isInbdDropdown
    ? "w-[900px]"
    : isServicesDropdown
    ? "w-120"
    : "w-80";

  // 2. POSITION CONTROL (Fixing Overflow)
  // Shift INBD dropdown to the left to prevent it from going off-screen
  const positionClass = isInbdDropdown ? "-left-[200px]" : "left-0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full mt-0 bg-white rounded-md shadow-2xl overflow-hidden ${widthClass} ${positionClass}`}
    >
      <div className="relative z-10 h-full">
        {isInbdDropdown && item.submenu ? (
          /* INBD Specific Layout: 3 Columns (1 Image + 2 Links) */
          <div className="grid grid-cols-3 h-full min-h-[350px]">
            {/* Column 1: Full Height Image */}
            <div className="relative col-span-1 h-full bg-gray-100">
              <Image
                src="/ship-container-nav.jpeg"
                alt="Company Overview"
                fill
                className="object-cover"
              />
              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end p-6">
                <h3 className="text-white text-xl font-medium drop-shadow-md mb-1">
                  Overview
                </h3>
                <p className="text-white/90 text-sm font-light leading-relaxed drop-shadow-md">
                  Get to know us better.
                </p>
              </div>
            </div>

            {/* Columns 2 & 3: Navigation Links */}
            <div className="col-span-2 grid grid-cols-2 gap-6 p-8 bg-white">
              <div className="space-y-5">
                {item.submenu
                  .slice(0, Math.ceil(item.submenu.length / 2))
                  .map((subitem) => (
                    <DropdownItem key={subitem.id} item={subitem} />
                  ))}
              </div>
              <div className="space-y-5">
                {item.submenu
                  .slice(Math.ceil(item.submenu.length / 2))
                  .map((subitem) => (
                    <DropdownItem key={subitem.id} item={subitem} />
                  ))}
              </div>
            </div>
          </div>
        ) : isServicesDropdown && item.submenu ? (
          /* Services Layout: 2 Columns */
          <div className="grid grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              {item.submenu
                .slice(0, Math.ceil(item.submenu.length / 2))
                .map((subitem) => (
                  <DropdownItem key={subitem.id} item={subitem} />
                ))}
            </div>
            <div className="space-y-4">
              {item.submenu
                .slice(Math.ceil(item.submenu.length / 2))
                .map((subitem) => (
                  <DropdownItem key={subitem.id} item={subitem} />
                ))}
            </div>
          </div>
        ) : (
          /* Default Single Column Layout */
          <div className="space-y-2 p-6">
            {item.submenu?.map((subitem) => (
              <DropdownItem key={subitem.id} item={subitem} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
