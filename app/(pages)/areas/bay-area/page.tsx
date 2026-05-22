import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Window Tint in the Bay Area · Dynamic Wraps & Tint",
  description:
    "Serving the greater San Francisco Bay Area with premium vehicle wraps, ceramic window tint and XPEL paint protection film from our Novato, CA studio.",
};

export default function BayAreaPage() {
  return (
    <UnderConstruction
      category="Service Area · San Francisco Bay Area"
      title="We Wrap the"
      titleAccent="Bay Area."
      description="From San Francisco to Santa Rosa and everywhere in between — premium wraps, ceramic tint and XPEL PPF delivered from our Novato studio."
    />
  );
}
