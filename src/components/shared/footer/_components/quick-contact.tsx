"use client";

import type React from "react";

import { Mail, MessageCircle, Phone } from "lucide-react";

interface ContactOption {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export function QuickContact() {
  const contactOptions: ContactOption[] = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+971 504 314 303",
      href: "tel:+971504314303",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+91 987 485 8133",
      href: "https://wa.me/919874858133",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "info@inbdalliance.com",
      href: "mailto:info@inbdalliance.com",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between mt-8 pt-8 border-t border-white/10 space-y-3">
      {contactOptions.map((option) => (
        <a
          key={option.label}
          href={option.href}
          target={option.label === "WhatsApp" ? "_blank" : undefined}
          rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
        >
          <div className="text-white/70 group-hover:text-white transition-colors">
            {option.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white/60">{option.label}</span>
            <span className="text-sm font-medium">{option.value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
