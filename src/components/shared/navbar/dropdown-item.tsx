"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

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
  const Icon = typeof item.icon === "function" ? item.icon : null;

  return (
    <motion.a
      href={item?.href || "#"}
      className="group block relative pb-1"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3">
        {Icon && <Icon className="w-5 h-5 text-[#EB6E36] shrink-0 mt-0.5" />}
        <div className="flex-1">
          <div className="text-base font-sans font-medium text-[#EB6E36] group-hover:text-[#EB6E36]/90 transition-colors">
            {item.label}
            {/* Slide underline animation */}
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#EB6E36] transition-all duration-300 group-hover:w-12"
              style={{
                width: "0px",
              }}
            />
          </div>
          {item.description && (
            <p className="text-sm font-sans font-normal text-gray-700 mt-0.5">{item.description}</p>
          )}
        </div>
      </div>
    </motion.a>
  );
}
