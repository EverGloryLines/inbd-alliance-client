"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Building2, ArrowRight, Package } from "lucide-react";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

type ActiveTab = "tracking" | "schedules" | "offices";

export function ShippingToolsPanel() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("tracking");
  const [trackingInput, setTrackingInput] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [officeSearch, setOfficeSearch] = useState("");

  const tabs = [
    { id: "tracking", label: "Tracking", icon: LuMapPin },
    { id: "schedules", label: "Schedules", icon: AiOutlineSchedule },
    { id: "offices", label: "Offices", icon: HiOutlineOfficeBuilding },
  ] as const;

  return (
    <motion.div
      className="bg-white rounded-t-lg shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-4 md:py-6 text-gray-800 font-medium hover:text-gray-900 transition-colors relative group"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden sm:inline font-sans font-medium text-sm md:text-base">
                {tab.label}
              </span>

              {/* Active Tab Underline */}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#EB6E36]"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-4 md:p-6 lg:p-8">
        {/* Tracking Tab */}
        {activeTab === "tracking" && (
          <motion.div
            className="flex flex-col md:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 relative">
              <label className="block text-sm font-sans font-medium text-gray-800 mb-2 tracking-[-0.02em]">
                B/L or Container Number
              </label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  placeholder="B/L or Container Number"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:border-[#EB6E36] focus:outline-none transition-colors text-base font-sans font-normal tracking-tight"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full md:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Track <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Schedules Tab */}
        {activeTab === "schedules" && (
          <motion.div
            className="flex flex-col md:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 relative">
              <label className="block text-sm font-sans font-medium text-gray-800 mb-2 tracking-[-0.02em]">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Origin"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:border-[#EB6E36] focus:outline-none transition-colors text-base font-sans font-normal tracking-tight"
                />
              </div>
            </div>
            <div className="flex-1 relative">
              <label className="block text-sm font-sans font-medium text-gray-800 mb-2 tracking-[-0.02em]">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:border-[#EB6E36] focus:outline-none transition-colors text-base font-sans font-normal tracking-tight"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full md:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Search <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Offices Tab */}
        {activeTab === "offices" && (
          <motion.div
            className="flex flex-col md:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 relative">
              <label className="block text-sm font-sans font-medium text-gray-800 mb-2 tracking-[-0.02em]">
                Search for an office
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={officeSearch}
                  onChange={(e) => setOfficeSearch(e.target.value)}
                  placeholder="Enter country/region name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:border-[#EB6E36] focus:outline-none transition-colors text-base font-sans font-normal tracking-tight"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full md:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Find <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
