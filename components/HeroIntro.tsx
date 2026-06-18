"use client";

import { useEffect, useState, type ReactNode } from "react";

interface HeroIntroProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HeroIntro({ children, className = "", delay = 0 }: HeroIntroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`hero-intro ${visible ? "hero-intro-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

interface HeroWordProps {
  children: string;
  highlight?: boolean;
  delay?: number;
}

export function HeroWord({ children, highlight, delay = 0 }: HeroWordProps) {
  return (
    <span className="hero-word inline-block overflow-hidden pb-1">
      <span
        className={`hero-word-inner inline-block ${highlight ? "text-gradient" : ""}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}
