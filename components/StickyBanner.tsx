"use client";

import { ArrowRight } from "lucide-react";

export default function StickyBanner() {
  return (
    <div className="sticky-banner" role="banner">
      <a href="#contact" className="sticky-banner__link">
        <span>Get Started Now</span>
        <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </div>
  );
}
