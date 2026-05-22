import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Window Tint in Petaluma, CA · Dynamic Wraps & Tint",
  description:
    "Serving Petaluma with premium vehicle wraps, window tint and paint protection film. Drop your vehicle at our Novato studio — we handle the rest.",
};

export default function PetalumaPage() {
  return (
    <UnderConstruction
      category="Service Area · Petaluma, CA"
      title="We Wrap"
      titleAccent="Petaluma."
      description="Premium wraps, tint and PPF for Petaluma vehicles and businesses. Drop it off at our Novato studio — we'll have it looking sharp."
    />
  );
}
