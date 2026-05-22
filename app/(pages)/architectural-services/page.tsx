import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Architectural & Brand Services · Dynamic Wraps & Tint — Marin County",
  description:
    "Wall wraps, storefront vinyl, commercial window tint, custom signage, graphic design and web services for businesses throughout the Bay Area.",
};

export default function ArchitecturalServicesPage() {
  return (
    <UnderConstruction
      category="Architectural & Brand"
      title="Architectural"
      titleAccent="Services."
      description="Wall wraps, storefront graphics, commercial tint, interior signage, graphic design and web — everything your brand needs beyond the vehicle."
    />
  );
}
