import {
  Building2,
  Package,
  Ship,
  TrendingUp,
  Globe,
  Briefcase,
  LucideProps,
} from "lucide-react";
import React from "react";

export interface SubmenuItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
}

export interface NavItem {
  id: string;
  label: string;
  iconSrc?: string;
  submenu?: SubmenuItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "inbd",
    label: "INBD",
    iconSrc: "/logo/INBD-Logo-removedBg.png",
    submenu: [
      {
        id: "leadership",
        label: "Leadership",
        description: "Strong management body of Sea Lloyd",
        icon: Building2,
      },
      {
        id: "about-us",
        label: "About Us",
        description: "Our company profile",
        icon: Briefcase,
      },
      {
        id: "our-offices",
        label: "Our Offices",
        description: "You are always welcome",
        icon: Building2,
      },
      {
        id: "agency-network",
        label: "Agency Network",
        description: "Say goodbye to breakouts",
        icon: Globe,
      },
      {
        id: "services-network",
        label: "Services Network",
        description: "It can help your business",
        icon: TrendingUp,
      },
      {
        id: "career",
        label: "Career",
        description: "Grow your future with us",
        icon: Briefcase,
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    iconSrc: "/icon/setting-icon.png",
    submenu: [
      {
        id: "service-maps",
        label: "Service Maps",
        description: "Regional and Global services",
        icon: Building2,
      },
      {
        id: "liner-service",
        label: "Liner Service",
        description: "Liner Service under Seaway Arrangements",
        icon: Ship,
      },
      {
        id: "feeder-service",
        label: "Feeder Service",
        description: "Slot Expert under Seaway Arrangements",
        icon: Package,
      },
      {
        id: "intermodal-service",
        label: "Intermodal Service",
        description: "Globally, We're Expert in Freight Forwarders",
        icon: Globe,
      },
      {
        id: "multimodal-service",
        label: "Multimodal Service",
        description: "Comprehensive logistics solutions",
        icon: Package,
      },
      {
        id: "other-services",
        label: "Other Services",
        description: "Comprehensive logistics solutions",
        icon: Package,
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping",
    iconSrc: "/icon/shipping-icon.png",
    submenu: [
      {
        id: "tracking",
        label: "Tracking",
        description: "Locate Your shipment Status",
        icon: Ship,
      },
      {
        id: "schedules",
        label: "Schedules",
        description: "Plan your next shipment",
        icon: Package,
      },
      {
        id: "shipping-rates",
        label: "Shipping Rates",
        description: "Calculate your shipping cost",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "news",
    label: "News",
    iconSrc: "/icon/news-icon-2.png",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    iconSrc: "/icon/chat-icon.png",
  },
];
