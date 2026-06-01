import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import StickyBanner from "@/components/StickyBanner";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dynamic Wraps & Tint — Vehicle Wraps, Window Tint & PPF · Marin County",
  description:
    "Premium commercial vehicle wraps, color change wraps, XPEL window tint and paint protection film. Designed, printed and installed in Marin County, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <StickyBanner />
        {children}
      </body>
    </html>
  );
}
