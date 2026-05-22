"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Image src="/logo.png" alt="Dynamic Wraps & Tint" width={120} height={56} style={{ height: 56, width: "auto" }} />
            <p className="footer__tag">
              Premium automotive and commercial wraps, window tint and paint protection.
              Designed, printed and installed in Marin County since day one.
            </p>
          </div>
          <div className="footer__col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/commercial-wraps">Commercial Vehicle Wraps</Link></li>
              <li><Link href="/color-change">Color Change Wraps</Link></li>
              <li><Link href="/window-tint">Window Tint</Link></li>
              <li><Link href="/paint-protection">Paint Protection Film</Link></li>
              <li><Link href="/architectural-services">Architectural &amp; Brand</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Service Area</h5>
            <ul>
              <li><Link href="/areas/novato">Novato</Link></li>
              <li><Link href="/areas/san-rafael">San Rafael</Link></li>
              <li><Link href="/areas/petaluma">Petaluma</Link></li>
              <li><Link href="/areas/marin-county">Marin County</Link></li>
              <li><Link href="/areas/bay-area">San Francisco Bay Area</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Studio</h5>
            <ul>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#process">Our Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/quote">Request a Quote</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Dynamic Wraps &amp; Tint · All rights reserved</span>
          <span>Authorized XPEL Installer · 3M · KPMF · Avery Dennison</span>
        </div>
      </div>
    </footer>
  );
}
