import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Contact · Dynamic Wraps & Tint — Novato, Marin County",
  description:
    "Get in touch with Dynamic Wraps & Tint in Novato, CA. Call, email or drop by the studio — Mon–Fri 8:00–18:00.",
};

export default function ContactPage() {
  return (
    <UnderConstruction
      category="Get in Touch"
      title="Let's Get You"
      titleAccent="Wrapped."
      description="Call, email or drop a message. We're in Novato, CA — Mon–Fri 8:00–18:00. No project is too big or too specific."
    />
  );
}
