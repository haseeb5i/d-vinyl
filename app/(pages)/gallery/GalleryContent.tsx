"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, X, Expand } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_FILTERS, type PortfolioItem } from "@/data";
import { CDN } from "@/lib/constants";

export default function GalleryContent() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered = filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === filter);
  const lbIdx = lightbox ? filtered.findIndex((p) => p.id === lightbox.id) : -1;

  const goLb = useCallback(
    (dir: number) => {
      if (!filtered.length) return;
      const next = (lbIdx + dir + filtered.length) % filtered.length;
      setLightbox(filtered[next]);
    },
    [lbIdx, filtered]
  );

  const closeLb = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") goLb(1);
      if (e.key === "ArrowLeft") goLb(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, goLb, closeLb]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <main className="gallery-pg">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="gallery-pg__hero">
        <div className="pg-hero__bg">
          <Image
            src={`${CDN}/e9348d45-d1b4-44d3-ae7a-7f02856f6bd7/Box+Truck+Full+Wrap.jpg`}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            sizes="60vw"
          />
        </div>
        <div className="gallery-pg__hero-inner">
          <div className="eyebrow" data-reveal>
            <span className="dot" />Portfolio · {PORTFOLIO.length} Projects
          </div>
          <h1 className="gallery-pg__title" data-reveal>
            Our<br /><span className="accent">Work.</span>
          </h1>
          <p className="gallery-pg__sub" data-reveal>
            Completed wraps, tints and protection jobs across Marin and the Bay Area.
            From Tesla colour changes and Porsche PPF to HVAC fleet wraps and food truck graphics.
          </p>
        </div>
        <div className="gallery-pg__hero-line" aria-hidden="true" />
      </div>

      {/* ── Filter + Grid ────────────────────────────────── */}
      <div className="gallery-main">
        <div className="section">

          {/* Filters */}
          <div className="gallery-filters" role="tablist" data-reveal>
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className="gallery-filter"
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                <span className="gallery-filter__count">
                  {f.id === "all" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.cat === f.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <button
                key={`${filter}-${item.id}`}
                className={`gallery-card${i % 5 === 0 ? " gallery-card--wide" : ""}`}
                style={{ animationDelay: `${Math.min(i * 45, 300)}ms` }}
                onClick={() => setLightbox(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-card__frame">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 740px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <div className="gallery-card__overlay">
                    <div className="gallery-card__overlay-top">
                      <span className="gallery-card__cat">{item.catLabel}</span>
                      <span className="gallery-card__expand"><Expand size={14} strokeWidth={2} /></span>
                    </div>
                    <div className="gallery-card__overlay-bottom">
                      <div className="gallery-card__title">{item.title}</div>
                      <div className="gallery-card__subtitle">{item.subtitle}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">No projects in this category yet.</div>
          )}
        </div>
      </div>

      {/* ── CTA strip ────────────────────────────────────── */}
      <div className="gallery-cta" data-reveal>
        <div className="gallery-cta__inner">
          <div>
            <div className="eyebrow"><span className="dot" />Ready to Start?</div>
            <p className="gallery-cta__text">Like what you see? Let&apos;s build something for you.</p>
          </div>
          <Link href="/contact" className="btn btn--primary">
            Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox && (
        <div
          className="gallery-lb"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
        >
          <div className="gallery-lb__inner">

            {/* Image panel */}
            <div className="gallery-lb__img-panel">
              <div className="gallery-lb__img-wrap">
                <Image
                  key={lightbox.id}
                  src={lightbox.img}
                  alt={lightbox.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1100px) 100vw, 65vw"
                  priority
                />
                <div className="gallery-lb__img-overlay" />
              </div>

              {/* Prev / Next on image */}
              {filtered.length > 1 && (
                <>
                  <button className="gallery-lb__nav gallery-lb__nav--prev" onClick={() => goLb(-1)} aria-label="Previous project">
                    <ArrowLeft size={20} strokeWidth={2} />
                  </button>
                  <button className="gallery-lb__nav gallery-lb__nav--next" onClick={() => goLb(1)} aria-label="Next project">
                    <ArrowRight size={20} strokeWidth={2} />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="gallery-lb__counter">
                <span className="gallery-lb__counter-cur">{String(lbIdx + 1).padStart(2, "0")}</span>
                <span className="gallery-lb__counter-sep">/</span>
                <span className="gallery-lb__counter-tot">{String(filtered.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Info panel */}
            <div className="gallery-lb__info">
              <button className="gallery-lb__close" onClick={closeLb} aria-label="Close">
                <X size={20} strokeWidth={2} />
              </button>

              <div className="gallery-lb__cat">
                <span className="dot" />{lightbox.catLabel}
              </div>

              <h2 className="gallery-lb__title">{lightbox.title}</h2>
              <p className="gallery-lb__subtitle">{lightbox.subtitle}</p>

              <p className="gallery-lb__blurb">{lightbox.blurb}</p>

              <div className="gallery-lb__specs">
                <div className="gallery-lb__spec">
                  <div className="gallery-lb__spec-lbl">Material</div>
                  <div className="gallery-lb__spec-val">{lightbox.material}</div>
                </div>
                <div className="gallery-lb__spec">
                  <div className="gallery-lb__spec-lbl">Bay Time</div>
                  <div className="gallery-lb__spec-val">{lightbox.duration}</div>
                </div>
                <div className="gallery-lb__spec">
                  <div className="gallery-lb__spec-lbl">Location</div>
                  <div className="gallery-lb__spec-val">{lightbox.location}</div>
                </div>
              </div>

              <Link href="/contact" className="btn btn--primary gallery-lb__cta" onClick={closeLb}>
                Start Your Build <ArrowRight size={14} strokeWidth={2.5} />
              </Link>

              {filtered.length > 1 && (
                <div className="gallery-lb__thumb-nav">
                  {filtered.map((p, i) => (
                    <button
                      key={p.id}
                      className={`gallery-lb__thumb${p.id === lightbox.id ? " is-active" : ""}`}
                      onClick={() => setLightbox(p)}
                      aria-label={p.title}
                    >
                      <Image src={p.img} alt="" width={56} height={42} style={{ objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
