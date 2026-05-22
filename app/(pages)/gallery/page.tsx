import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Gallery & Portfolio · Dynamic Wraps & Tint — Marin County",
  description:
    "Browse completed vehicle wraps, window tint, PPF and architectural projects by Dynamic Wraps & Tint in Marin County, CA.",
};

export default function GalleryPage() {
  return (
    <UnderConstruction
      category="Portfolio"
      title="Work We're"
      titleAccent="Proud Of."
      description="Completed wraps, tints and protection projects — from Tesla colour changes and Porsche PPF to HVAC fleet wraps and food truck graphics."
    />
  );
}
