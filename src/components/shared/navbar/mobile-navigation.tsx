"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav-items";
import MobileMenu from "./mobile-menu";

interface MobileNavigationProps {
  isScrolled: boolean;
}

export default function MobileNavigation({
  isScrolled,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          isScrolled
            ? "text-gray-800 hover:bg-gray-100"
            : "text-white hover:bg-white/10"
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <MobileMenu items={NAV_ITEMS} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
