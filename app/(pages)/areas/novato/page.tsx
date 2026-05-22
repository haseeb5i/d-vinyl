import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Window Tint in Novato, CA · Dynamic Wraps & Tint",
  description:
    "Local vehicle wraps, window tint and paint protection film in Novato, CA. Dynamic Wraps & Tint is your hometown shop — walk-ins welcome.",
};

export default function NovátoPage() {
  return (
    <UnderConstruction
      category="Service Area · Novato, CA"
      title="We Wrap"
      titleAccent="Novato."
      description="Your local Novato shop for vehicle wraps, window tint and paint protection film. Walk-ins welcome — we're right here in the neighbourhood."
    />
  );
}
