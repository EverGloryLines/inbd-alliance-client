/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface FleetConfig {
  latitude: string;
  longitude: string;
  fleet: string;
  fleet_name: string;
  fleet_timespan: string;
}

interface FleetTrackingTabProps {
  isActive: boolean;
}

// Utility function to generate the map's full HTML content (Shared helper)
const getMapHtmlContent = (
  config: any,
  mapType: "regional" | "single" | "fleet"
): string => {
  let configScriptContent = "";

  if (mapType === "regional") {
    const regionalConfig = config as {
      latitude: string;
      longitude: string;
      zoom: string;
    };
    configScriptContent = `
      var width = "100%";
      var height = "500";
      var latitude = "${regionalConfig.latitude}";
      var longitude = "${regionalConfig.longitude}";
      var zoom = "${regionalConfig.zoom}";
    `;
  } else if (mapType === "single") {
    const singleConfig = config as { imo: string; showTrack: boolean };
    configScriptContent = `
      var width = "100%";
      var height = "500";
      var names = true;
      var imo = "${singleConfig.imo}";
      var show_track = ${singleConfig.showTrack};
    `;
  } else if (mapType === "fleet") {
    const fleetConfig = config as FleetConfig;
    configScriptContent = `
      var width = "100%";
      var height = "500";
      var latitude = "${fleetConfig.latitude}";
      var longitude = "${fleetConfig.longitude}";
      var names = true;
      var fleet = "${fleetConfig.fleet}";
      var fleet_name = "${fleetConfig.fleet_name}";
      var fleet_timespan = "${fleetConfig.fleet_timespan}";
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vessel Map</title>
        <style>body { margin: 0; overflow: hidden; background-color: #f8f8f8; }</style>
      </head>
      <body>
        <div id="map-container" style="width: 100%; height: 100%;">
          <script type="text/javascript">${configScriptContent}</script>
          <script type="text/javascript" src="https://www.vesselfinder.com/aismap.js"></script>
        </div>
      </body>
    </html>
  `;
};

/**
 * Custom hook to manage map rendering via iframe data URL injection
 * to safely load the document.write-dependent third-party script.
 */
const useMapIframeLoader = (
  mapContainerRef: React.RefObject<HTMLDivElement>,
  config: any, // Generic type for simplicity in the shared hook
  isActive: boolean,
  mapType: "regional" | "single" | "fleet"
) => {
  useEffect(() => {
    if (!isActive || !mapContainerRef.current) return;

    const container = mapContainerRef.current;
    container.innerHTML = ""; // Clear existing content

    // 1. Create the iframe
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "0.5rem";
    iframe.title = `Vessel Tracking Map - ${mapType}`;
    iframe.allow = "geolocation"; // Ensure map features work

    // Append a simple loading indicator
    const loadingDiv = document.createElement("div");
    loadingDiv.className =
      "flex items-center justify-center absolute inset-0 text-muted-foreground";
    loadingDiv.innerText = "Loading Map...";
    container.appendChild(loadingDiv);

    // Append the iframe
    container.appendChild(iframe);

    // 2. Generate content and set src to data URL
    const htmlContent = getMapHtmlContent(config, mapType);

    // Use data URI for reliable cross-browser script execution
    const dataUri =
      "data:text/html;charset=utf-8," + encodeURIComponent(htmlContent);

    iframe.onload = () => {
      // Remove loading indicator once content is loaded in the iframe
      loadingDiv.remove();
    };

    // Set the src attribute to trigger iframe load
    iframe.src = dataUri;

    // Cleanup: remove all elements on unmount or state change
    return () => {
      container.innerHTML = "";
    };
  }, [isActive, config, mapContainerRef, mapType]);
};

export function FleetTrackingTab({ isActive }: FleetTrackingTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fleetConfig, setFleetConfig] = useState<FleetConfig>({
    latitude: "36.00",
    longitude: "-5.40",
    fleet: "e48ab3d80a0e2a9bf28930f2dd08800c",
    fleet_name: "Carnival",
    fleet_timespan: "1440",
  });
  const [formData, setFormData] = useState(fleetConfig);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to handle map rendering
  useMapIframeLoader(
    mapContainerRef as React.RefObject<HTMLDivElement>,
    fleetConfig,
    isActive,
    "fleet"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFleetConfig(formData);
    setIsModalOpen(false);
  };

  return (
    <Card className="p-4 bg-background rounded-none">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="text-base font-song-myung font-medium">
              Global Company Fleet Tracking
            </h3>
            <p className="text-sm text-muted-foreground">
              Monitor the simultaneous locations and status of your entire fleet
              across global shipping lanes in one unified view.
            </p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 text-sm font-song-myung font-medium cursor-pointer bg-[#4c6faf] hover:bg-[#4c6faf]/90 rounded-none"
          >
            Add Fleet Information
          </Button>
        </div>

        {/* Map Container - Position relative for the loading overlay */}
        <div
          ref={mapContainerRef}
          className="w-full min-h-[500px] bg-muted rounded-lg overflow-hidden border relative"
        >
          {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
              <p className="text-white text-xl font-medium">
                Select tab to view map
              </p>
            </div>
          )}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl rounded-none">
            <DialogHeader>
              <DialogTitle className="text-base md:text-lg font-song-myung font-medium">
                Configure Fleet Tracking
              </DialogTitle>
              <DialogDescription className="text-sm font-sans font-medium">
                Enter your fleet details and map center coordinates.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="fleet-latitude"
                      className="text-sm font-song-myung font-medium"
                    >
                      Latitude
                    </Label>
                    <Input
                      id="fleet-latitude"
                      type="text"
                      placeholder="36.00"
                      value={formData.latitude}
                      onChange={(e) =>
                        setFormData({ ...formData, latitude: e.target.value })
                      }
                      required
                      className="rounded-none font-sans text-sm font-regular"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="fleet-longitude"
                      className="text-sm font-song-myung font-medium"
                    >
                      Longitude
                    </Label>
                    <Input
                      id="fleet-longitude"
                      type="text"
                      placeholder="-5.40"
                      value={formData.longitude}
                      onChange={(e) =>
                        setFormData({ ...formData, longitude: e.target.value })
                      }
                      required
                      className="rounded-none font-sans text-sm font-regular"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="fleet-key"
                    className="text-sm font-song-myung font-medium"
                  >
                    Fleet Key
                  </Label>
                  <Input
                    id="fleet-key"
                    type="text"
                    placeholder="e48ab3d80a0e2a9bf28930f2dd08800c"
                    value={formData.fleet}
                    onChange={(e) =>
                      setFormData({ ...formData, fleet: e.target.value })
                    }
                    required
                    className="rounded-none font-sans text-sm font-regular"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your personal fleet key from VesselFinder User Profile
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="fleet-name"
                    className="text-sm font-song-myung font-medium"
                  >
                    Fleet Name
                  </Label>
                  <Input
                    id="fleet-name"
                    type="text"
                    placeholder="Carnival"
                    value={formData.fleet_name}
                    onChange={(e) =>
                      setFormData({ ...formData, fleet_name: e.target.value })
                    }
                    required
                    className="rounded-none font-sans text-sm font-regular"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="fleet-timespan"
                    className="text-sm font-song-myung font-medium"
                  >
                    Timespan (minutes)
                  </Label>
                  <Input
                    id="fleet-timespan"
                    type="text"
                    placeholder="1440"
                    value={formData.fleet_timespan}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fleet_timespan: e.target.value,
                      })
                    }
                    required
                    className="rounded-none font-sans text-sm font-regular"
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum age of displayed ship positions (e.g., 1440 = 24
                    hours)
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer rounded-none"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="text-sm font-song-myung font-medium cursor-pointer bg-[#4c6faf] hover:bg-[#4c6faf]/90 rounded-none"
                >
                  Update Fleet Map
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}
