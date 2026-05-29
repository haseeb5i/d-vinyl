import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us · Dynamic Wraps & Tint — Novato, Marin County",
  description:
    "Dynamic Wraps & Tints is a team of passionate professionals dedicated to enhancing the aesthetics and functionality of vehicles and interiors. 10+ years combined expertise. Novato, CA.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
