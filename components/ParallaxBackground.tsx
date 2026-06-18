"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          container.style.setProperty("--scroll-y", `${scrollY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="parallax-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="orb orb-1 orb-float" />
      <div className="orb orb-2 orb-float-delayed" />
      <div className="orb orb-3 orb-float-slow" />
      <div className="grid-overlay" />
      <div className="grain-overlay" />
    </div>
  );
}
