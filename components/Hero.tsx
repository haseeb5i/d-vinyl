"use client";

import Image from "next/image";

function ArrowRight() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/6745dcc560869535bc3e0842/66c669df-1afd-4294-b62e-09316bdfd32b/Tesla%2BCyber%2BTruck%2BCamouflage%2BWrap-min.jpg"
          alt="Tesla Cybertruck Camouflage Wrap"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero__bar" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__meta">
          <span>● Now booking · Spring 2026</span>
          <span>Marin County · Novato · San Rafael · Petaluma · Bay Area</span>
          <span />
        </div>

        <div className="hero__body">
          <div className="hero__copy">
            <div className="hero__eyebrow">Dynamic Wraps &amp; Tint · Est. Marin County</div>
            <h1 className="hero__title">
              <span className="line">Wrap.</span>
              <span className="line"><span className="accent">Tint.</span></span>
              <span className="line"><span className="outlined">Protect.</span></span>
            </h1>
            <p className="hero__sub">
              Premium automotive and commercial wraps, ceramic window tint,
              and XPEL paint protection film — designed, printed and installed under one roof
              in Marin County. Built for builders, fleets, Teslas and weekend toys alike.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">Start a Project <ArrowRight /></a>
              <a href="#services" className="btn btn--ghost">See Services</a>
            </div>
          </div>
        </div>

        <div className="hero__stats" data-reveal-stagger>
          <div>
            <div className="stat__num">100<span className="unit">+</span></div>
            <div className="stat__lbl">Wrap Colors Available</div>
          </div>
          <div>
            <div className="stat__num">4</div>
            <div className="stat__lbl">Core Service Lines</div>
          </div>
          <div>
            <div className="stat__num">10<span className="unit">yr</span></div>
            <div className="stat__lbl">XPEL PPF Warranty</div>
          </div>
          <div>
            <div className="stat__num">1<span className="unit">/1</span></div>
            <div className="stat__lbl">In-House Design + Install</div>
          </div>
        </div>
      </div>

      <div className="hero__xpel">
        <div className="b1">XPEL</div>
        <div className="b2">Authorized Installer</div>
      </div>
    </section>
  );
}
