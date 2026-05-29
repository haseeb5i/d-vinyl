import type { Metadata } from "next";
import ColorChangeContent from "./ColorChangeContent";

export const metadata: Metadata = {
  title: "Color Change Wraps · Dynamic Wraps & Tints — Novato, CA",
  description:
    "Premium color change wraps in Novato, CA. Matte, gloss, satin, and metallic finishes. Non-permanent, protects factory paint. Over a decade of expertise.",
};

export default function ColorChangePage() {
  return <ColorChangeContent />;
}
