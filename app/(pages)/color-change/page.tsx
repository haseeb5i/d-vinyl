import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Color Change Wraps · Dynamic Wraps & Tint — Marin County",
  description:
    "Transform your vehicle with a full color change wrap. Matte, gloss, satin, chrome and specialty finishes. 100+ colors. Reversible, protects factory paint. Novato, CA.",
};

export default function ColorChangePage() {
  return (
    <UnderConstruction
      category="Vehicle Wraps · 02"
      title="Color"
      titleAccent="Change Wraps."
      description="Matte, gloss, satin, chrome and specialty finishes across 100+ colours. Fully reversible — your factory paint stays pristine underneath."
    />
  );
}
