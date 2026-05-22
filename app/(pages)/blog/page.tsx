import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Blog & Notes · Dynamic Wraps & Tint — Marin County",
  description:
    "Tips, installs, material guides and behind-the-scenes notes from the Dynamic Wraps & Tint studio in Novato, CA.",
};

export default function BlogPage() {
  return (
    <UnderConstruction
      category="Studio"
      title="Notes &"
      titleAccent="Insights."
      description="Install tips, material guides, before-and-afters and behind-the-scenes from the studio. Check back soon."
    />
  );
}
