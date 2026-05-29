import type { Metadata } from "next";
import PaintProtectionContent from "./PaintProtectionContent";

export const metadata: Metadata = {
  title: "Paint Protection Film · Dynamic Wraps & Tints — Novato, CA",
  description:
    "XPEL paint protection film (PPF) installation in Novato, CA. Full fronts, track packs, and full-vehicle coverage. XPEL certified installer with 10+ years of expertise.",
};

export default function PaintProtectionPage() {
  return <PaintProtectionContent />;
}
