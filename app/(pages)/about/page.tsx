import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "About Us · Dynamic Wraps & Tint — Marin County",
  description:
    "The story behind Dynamic Wraps & Tint — a Marin County shop built on precision installs, honest advice and work that earns repeat customers.",
};

export default function AboutPage() {
  return (
    <UnderConstruction
      category="Studio"
      title="Behind the"
      titleAccent="Wrap."
      description="A Marin County shop built on precision installs, honest advice and work that earns repeat customers. We design, print and install — all under one roof."
    />
  );
}
