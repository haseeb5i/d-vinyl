import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Window Tint in San Rafael, CA · Dynamic Wraps & Tint",
  description:
    "Vehicle wraps, ceramic window tint and XPEL PPF serving San Rafael and all of Marin County from our Novato studio.",
};

export default function SanRafaelPage() {
  return (
    <UnderConstruction
      category="Service Area · San Rafael, CA"
      title="We Wrap"
      titleAccent="San Rafael."
      description="Vehicle wraps, ceramic tint and XPEL PPF for San Rafael residents and businesses — just a short drive from our Novato studio."
    />
  );
}
