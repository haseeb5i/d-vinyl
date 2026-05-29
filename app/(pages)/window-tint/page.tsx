import type { Metadata } from "next";
import WindowTintContent from "./WindowTintContent";

export const metadata: Metadata = {
  title: "Window Tinting · Dynamic Wraps & Tints — Novato, CA",
  description:
    "Professional XPEL window tinting in Novato, CA. UV protection, heat reduction, privacy, and enhanced appearance. Authorized XPEL installer with 10+ years experience.",
};

export default function WindowTintPage() {
  return <WindowTintContent />;
}
