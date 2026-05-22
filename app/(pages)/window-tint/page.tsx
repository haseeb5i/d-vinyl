import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Window Tint · Dynamic Wraps & Tint — Marin County",
  description:
    "XPEL ceramic window tint for vehicles, homes and commercial spaces. Heat rejection, UV protection and privacy. Authorized XPEL installer in Novato, Marin County.",
};

export default function WindowTintPage() {
  return (
    <UnderConstruction
      category="Vehicle Wraps · 03"
      title="Window"
      titleAccent="Tint."
      description="XPEL ceramic window tint for vehicles, homes and commercial properties. Heat rejection, UV protection and privacy — installed by an authorized XPEL dealer."
    />
  );
}
