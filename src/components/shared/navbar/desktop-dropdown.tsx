/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { NavItem } from "@/constants/nav-items";
import { motion } from "motion/react";
import Image from "next/image";
import DropdownItem from "./dropdown-item";
import Link from "next/link";

interface DesktopDropdownProps {
  item: NavItem;
  isScrolled: boolean;
}

export default function DesktopDropdown({
  item,
  isScrolled,
}: DesktopDropdownProps) {
  const isWideDropdown = item.id === "inbd" || item.id === "services";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full left-0 mt-0 bg-white rounded-lg shadow-2xl overflow-hidden ${
        isWideDropdown ? "w-120" : "w-80"
      }`}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-10">
        <Image
          src="/shipping-containers-stacked.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div> */}

      <div className="relative z-10">
        {/* Two Column Layout for INBD and Services */}
        {isWideDropdown && item.submenu ? (
          <div className={`grid grid-cols-2 gap-6 p-6`}>
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
          /* Single Column Layout */
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
