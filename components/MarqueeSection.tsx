"use client";

import { SERVICES_MARQUEE } from "@/data";

export default function MarqueeSection() {
  const doubled = [...SERVICES_MARQUEE, ...SERVICES_MARQUEE];
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__row">
        {doubled.map((s, i) => (
          <span className="marquee__item" key={`a${i}`}>
            {s} <span className="star">✦</span>
          </span>
        ))}
      </div>
      <div className="marquee__row marquee__row--alt">
        {doubled.map((s, i) => (
          <span className="marquee__item" key={`b${i}`}>
            {s} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
