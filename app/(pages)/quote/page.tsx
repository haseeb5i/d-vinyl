import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Request a Quote · Dynamic Wraps & Tint — Marin County",
  description:
    "Start your wrap, tint or PPF project with a free quote from Dynamic Wraps & Tint in Novato, CA. Fast turnaround, honest pricing.",
};

export default function QuotePage() {
  return (
    <UnderConstruction
      category="Get Started"
      title="Request"
      titleAccent="a Quote."
      description="Tell us about your vehicle and what you have in mind — we'll come back with honest pricing and a realistic timeline. No fluff, no surprise fees."
    />
  );
}
