import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Paint Protection Film · Dynamic Wraps & Tint — Marin County",
  description:
    "XPEL paint protection film (PPF) installation in Marin County. Self-healing, 10-year warranty. Full fronts, track packs and full-car coverage for daily drivers and weekend cars.",
};

export default function PaintProtectionPage() {
  return (
    <UnderConstruction
      category="Vehicle Wraps · 04"
      title="Paint"
      titleAccent="Protection Film."
      description="XPEL PPF with a 10-year manufacturer warranty. Self-healing film for full fronts, track packs and full-vehicle coverage — the last thing between your paint and the road."
    />
  );
}
