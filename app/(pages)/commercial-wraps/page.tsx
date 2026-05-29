import type { Metadata } from "next";
import CommercialWrapsContent from "./CommercialWrapsContent";

export const metadata: Metadata = {
  title: "Commercial Vehicle Wraps · Dynamic Wraps & Tints — Novato, CA",
  description:
    "Trusted commercial vehicle wrap installation in Novato, CA. Fleet wraps, contractor vans, box trucks — 3M, XPEL, and Avery Dennison certified. 10+ years experience.",
};

export default function CommercialWrapsPage() {
  return <CommercialWrapsContent />;
}
