"use client";

import { ADDITIONAL_SERVICES } from "@/data";

export default function AdditionalServices() {
  return (
    <section className="section additional" id="more">
      <div className="section__header" data-reveal>
        <div>
          <div className="eyebrow"><span className="dot" />Beyond The Vehicle · 08</div>
          <h2 className="section__title">
            Architectural<br />
            <span className="accent">&amp; Brand Work.</span>
          </h2>
        </div>
        <p className="section__desc">
          Wall wraps, commercial tint, storefront vinyl and custom signage
          for offices, retail and residential spaces throughout the Bay Area.
        </p>
      </div>

      <div className="other-grid other-grid--full" data-reveal-stagger>
        {ADDITIONAL_SERVICES.map(([n, t, d]) => (
          <div className="other-card" key={n}>
            <div className="other-card__num">{n}</div>
            <div>
              <div className="other-card__title">{t}</div>
              <div className="other-card__desc">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
