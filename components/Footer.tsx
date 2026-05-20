"use client";

import Image from "next/image";

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
              <li><a href="#services">Commercial Vehicle Wraps</a></li>
              <li><a href="#services">Color Change Wraps</a></li>
              <li><a href="#services">Window Tint</a></li>
              <li><a href="#services">Paint Protection Film</a></li>
              <li><a href="#services">Architectural &amp; Commercial</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Service Area</h5>
            <ul>
              <li><a href="#">Novato</a></li>
              <li><a href="#">San Rafael</a></li>
              <li><a href="#">Petaluma</a></li>
              <li><a href="#">Marin County</a></li>
              <li><a href="#">San Francisco Bay Area</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#process">Process</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Request a Quote</a></li>
              <li><a href="#">Instagram ↗</a></li>
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
