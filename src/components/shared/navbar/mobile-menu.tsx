"use client";

import { motion } from "motion/react";

import MobileMenuItem from "./mobile-menu-item";
import type { NavItem } from "@/constants/nav-items";

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200"
    >
      <div className="max-w-full">
        {items.map((item) => (
          <MobileMenuItem key={item.id} item={item} onClose={onClose} />
        ))}
      </div>
    </motion.div>
  );
}
