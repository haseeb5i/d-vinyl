import type { Metadata } from "next";
import WallGraphicsContent from "./WallGraphicsContent";

export const metadata: Metadata = {
  title: "Wall Graphics · Dynamic Wraps & Tints — Novato, CA",
  description:
    "Wall graphics are an affordable and creative way to make a bold impact on your space. Custom vinyl wall wraps for commercial, office, retail and residential spaces in Novato, CA.",
};

export default function WallGraphicsPage() {
  return <WallGraphicsContent />;
}
