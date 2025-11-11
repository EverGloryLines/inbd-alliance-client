"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { NavItem } from "@/constants/nav-items";

interface MobileMenuItemProps {
  item: NavItem;
  onClose: () => void;
}

export default function MobileMenuItem({ item, onClose }: MobileMenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => hasSubmenu && setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span>{item.label}</span>
        {hasSubmenu && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* Submenu Items */}
      <AnimatePresence>
        {hasSubmenu && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-50 overflow-hidden"
          >
            <div className="px-6 py-3 space-y-3">
              {item.submenu!.map((subitem) => (
                <button
                  key={subitem.id}
                  onClick={onClose}
                  className="block w-full text-left text-sm text-gray-700 hover:text-orange-600 hover:font-medium transition-colors py-2"
                >
                  <div>{subitem.label}</div>
                  {subitem.description && (
                    <p className="text-xs text-gray-500 mt-1">
                      {subitem.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
