import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact · Dynamic Wraps & Tint — Novato, Marin County",
  description:
    "Get in touch with Dynamic Wraps & Tint. Call (415) 569-0763, email dynwraps@gmail.com, or visit our shop at 7515 Redwood Blvd., Novato, CA 94945.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
