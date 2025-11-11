"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Ship, Anchor } from "lucide-react";
import { RegionalMapTab } from "./_components/regional-map-tab";
import { SingleVesselTab } from "./_components/single-vessel-tab";
import { FleetTrackingTab } from "./_components/fleet-tracking-tab";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export default function VesselTrackingMaps() {
  const [activeTab, setActiveTab] = useState("regional");

  return (
    <div className="w-full container mx-auto p-4 space-y-6 overflow-hidden">
      {/* Header Section */}
      <div className="space-y-2 text-center mb-8">
        <SectionTitle> Vessel Tracking & Monitoring Hub </SectionTitle>
        <SectionDescription>
          Access real-time position data for regional traffic, individual ships,
          or your entire fleet through dynamic, interactive map views.
        </SectionDescription>
      </div>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-gray-100 dark:bg-gray-800 rounded-none shadow-inner">
          <TabsTrigger
            value="regional"
            className="flex items-center gap-2 p-2 sm:p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all duration-300 text-sm sm:text-base rounded-none cursor-pointer"
          >
            <MapPin className="h-4 w-4" />
            <span className="hidden lg:inline font-sans font-medium">
              Regional Fleet Density View
            </span>
            <span className="lg:hidden">Regional</span>
          </TabsTrigger>
          <TabsTrigger
            value="single"
            className="flex items-center gap-2 p-2 sm:p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all duration-300 text-sm sm:text-base rounded-none cursor-pointer"
          >
            <Ship className="h-4 w-4" />
            <span className="hidden lg:inline font-sans font-medium">
              Individual Vessel Live Position
            </span>
            <span className="lg:hidden">Individual</span>
          </TabsTrigger>
          <TabsTrigger
            value="fleet"
            className="flex items-center gap-2 p-2 sm:p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all duration-300 text-sm sm:text-base rounded-none cursor-pointer"
          >
            <Anchor className="h-4 w-4" />
            <span className="hidden lg:inline font-sans font-medium">
              Global Company Fleet Tracking
            </span>
            <span className="lg:hidden">Fleet</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="regional" className="mt-4">
          <RegionalMapTab isActive={activeTab === "regional"} />
        </TabsContent>

        <TabsContent value="single" className="mt-4">
          <SingleVesselTab isActive={activeTab === "single"} />
        </TabsContent>

        <TabsContent value="fleet" className="mt-4">
          <FleetTrackingTab isActive={activeTab === "fleet"} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
