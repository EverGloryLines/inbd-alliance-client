"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

interface DropdownItemProps {
  item: {
    id: string;
    label: string;
    description?: string;
    icon?: LucideIcon | ReactNode;
    href?: string;
  };
}

export default function DropdownItem({ item }: DropdownItemProps) {
  // Safely cast the icon. If it's null/undefined, Icon will be null.
  const Icon = item.icon as React.ElementType;

  return (
    <Link 
      href={item?.href || "#"} 
      // Added '!no-underline' to forcibly remove default browser underlines
      className="group block relative pb-1.5"
    >
      <div className="flex items-start gap-3 hover:bg-gray-50 transition-colors duration-30 p-2">
        {/* Icon Section - Renders if Icon exists */}
        {Icon && (
          <div className="shrink-0 mt-1 text-neutral-950 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5" />
          </div>
        )}
        
        <div className="flex-1">
          {/* Label with Sliding Underline */}
          <div className="relative inline-block">
            <span className="text-base font-sans font-medium text-neutral-950 transition-colors">
              {item.label}
            </span>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-sm font-sans font-normal text-[#727272] mt-0.5 leading-snug">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
