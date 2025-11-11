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
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+65 6291 4540",
      href: "tel:+6562914540",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+65 6291 4541",
      href: "https://wa.me/6562914541",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@sealloyd.com",
      href: "mailto:info@sealloyd.com",
    },
  ];

  return (
    <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
      {contactOptions.map((option) => (
        <a
          key={option.label}
          href={option.href}
          target={option.label === "WhatsApp" ? "_blank" : undefined}
          rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
        >
          <div className="text-white/60 group-hover:text-white transition-colors">
            {option.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white/50">{option.label}</span>
            <span className="text-sm font-medium">{option.value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
