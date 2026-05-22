import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Commercial Vehicle Wraps · Dynamic Wraps & Tint — Marin County",
  description:
    "Fleet wraps, contractor vans, food trucks and company vehicles wrapped in Marin County. Full-color, cut vinyl and partial wrap options. XPEL, 3M, Avery Dennison.",
};

export default function CommercialWrapsPage() {
  return (
    <UnderConstruction
      category="Vehicle Wraps · 01"
      title="Commercial"
      titleAccent="Vehicle Wraps."
      description="Fleet wraps, contractor vans, food trucks and company vehicles — designed, printed and installed under one roof in Novato. Full-colour, cut vinyl and partial wrap options available."
    />
  );
}
