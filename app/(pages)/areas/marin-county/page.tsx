import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Window Tint in Marin County · Dynamic Wraps & Tint",
  description:
    "The go-to wrap and tint shop for all of Marin County. Commercial fleets, colour changes, XPEL PPF and ceramic tint from our Novato studio.",
};

export default function MarinCountyPage() {
  return (
    <UnderConstruction
      category="Service Area · Marin County"
      title="We Wrap"
      titleAccent="Marin County."
      description="The go-to wrap and tint shop for all of Marin County — from Mill Valley to Novato, San Rafael to Tiburon. Commercial fleets to weekend toys."
    />
  );
}
