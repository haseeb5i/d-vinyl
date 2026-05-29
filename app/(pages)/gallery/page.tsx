import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery & Portfolio · Dynamic Wraps & Tint — Marin County",
  description:
    "Browse 12 completed vehicle wraps, colour changes, PPF, window tint and commercial fleet projects by Dynamic Wraps & Tint in Marin County, CA.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
