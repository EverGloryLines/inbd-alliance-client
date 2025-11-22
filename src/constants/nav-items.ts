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
  href?: string;
}

export interface NavItem {
  id: string;
  label: string;
  iconSrc?: string;
  href?: string;
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
        href: "/work-in-progress",
      },
      {
        id: "about-us",
        label: "About Us",
        description: "Our company profile",
        icon: Briefcase,
        href: "/about",
      },
      {
        id: "our-offices",
        label: "Our Offices",
        description: "You are always welcome",
        icon: Building2,
        href: "/our-offices",
      },
      {
        id: "agency-network",
        label: "Agency Network",
        description: "Say goodbye to breakouts",
        icon: Globe,
        href: "/work-in-progress",
      },
      {
        id: "services-network",
        label: "Services Network",
        description: "It can help your business",
        icon: TrendingUp,
        href: "/work-in-progress",
      },
      {
        id: "career",
        label: "Career",
        description: "Grow your future with us",
        icon: Briefcase,
        href: "/work-in-progress",
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
        href: "/work-in-progress",
      },
      {
        id: "liner-service",
        label: "Liner Service",
        description: "Liner Service under Seaway Arrangements",
        icon: Ship,
        href: "/work-in-progress",
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
        href: "/work-in-progress",
      },
      {
        id: "multimodal-service",
        label: "Multimodal Service",
        description: "Comprehensive logistics solutions",
        icon: Package,
        href: "/work-in-progress",
      },
      {
        id: "other-services",
        label: "Other Services",
        description: "Comprehensive logistics solutions",
        icon: Package,
        href: "/work-in-progress",
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
        href: "/work-in-progress",
      },
      {
        id: "schedules",
        label: "Schedules",
        description: "Plan your next shipment",
        icon: Package,
        href: "/work-in-progress",
      },
      {
        id: "shipping-rates",
        label: "Shipping Rates",
        description: "Calculate your shipping cost",
        icon: TrendingUp,
        href: "/work-in-progress",
      },
    ],
  },
  {
    id: "news",
    label: "News",
    iconSrc: "/icon/news-icon-2.png",
    href: "/news",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    iconSrc: "/icon/chat-icon.png",
    href: "/contact",
  },
];
