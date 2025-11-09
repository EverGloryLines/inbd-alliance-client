"use client";

import { onComplete } from "@/lib/router-events/events";
import { usePathname, useSearchParams } from "next/navigation";
import * as NProgress from "nprogress";
import React, { JSX, Suspense, useEffect, useState } from "react";

function Innards() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      onComplete();
    }
  }, [pathname, searchParams]);

  return null;
}

export interface NProgressBarProps {
  /**
   * The color of the bar.
   * @default "#29D"
   */
  color?: string;
  /**
   * The start position of the bar.
   * @default 0.3
   */
  startPosition?: number;
  /**
   * The stop delay in milliseconds.
   * @default 200
   */
  stopDelayMs?: number;
  /**
   * The height of the bar.
   * @default 3
   */
  height?: number;
  /**
   * Whether to show the bar on shallow routes.
   * @default true
   */
  showOnShallow?: boolean;
  /**
   * The other NProgress configuration options to pass to NProgress.
   * @default null
   */
  options?: Partial<NProgress.NProgressOptions>;
  /**
   * The nonce attribute to use for the `style` tag.
   * @default undefined
   */
  nonce?: string;
  /**
   * Use your custom CSS tag instead of the default one.
   * This is useful if you want to use a different style or minify the CSS.
   * @default (css) => <style nonce={nonce}>{css}</style>
   */
  transformCSS?: (css: string) => JSX.Element;
}

const NProgressBarComponent = ({
  color = "#29D",
  startPosition = 0.3,
  height = 3,
  options,
  nonce,
  transformCSS = (css) => <style nonce={nonce}>{css}</style>,
}: NProgressBarProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (options) {
        NProgress.configure(options);
      }
      NProgress.set(startPosition);
      setIsClient(true);
    }
  }, [options, startPosition]);

  const css = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${color};
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: ${height}px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
  `;

  return (
    <>
      {transformCSS(css)}
      {isClient && (
        <Suspense fallback={null}>
          <Innards />
        </Suspense>
      )}
    </>
  );
};

const NProgressBar = React.memo(NProgressBarComponent);

export default NProgressBar;
