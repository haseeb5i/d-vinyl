"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function ArrowRight() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#more",     label: "More" },
  { href: "#process",  label: "Process" },
  { href: "#reviews",  label: "Reviews" },
  { href: "#contact",  label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close on route hash change (link tap) and lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a href="#top" className="nav__logo" onClick={close}>
            <Image src="/logo.png" alt="Dynamic Wraps & Tint" width={120} height={44} style={{ height: 44, width: "auto" }} />
          </a>

          {/* Desktop links */}
          <nav className="nav__links">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <div className="nav__right">
            <a href="#contact" className="nav__cta">
              Get a Quote <ArrowRight />
            </a>
            {/* Hamburger — mobile only */}
            <button
              className={`nav__burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="mobile-nav__links">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className="mobile-nav__link"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              onClick={close}
            >
              <span className="mobile-nav__link-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="mobile-nav__cta btn btn--primary" onClick={close}>
          Get a Quote <ArrowRight />
        </a>
        <div className="mobile-nav__footer">
          <span>Novato, CA · Marin County</span>
          <span>(415) 555-0148</span>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-nav__backdrop" onClick={close} aria-hidden="true" />}
    </>
  );
}
