"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/data";

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(PORTFOLIO[0].id);
  const railRef = useRef<HTMLElement>(null);

  const filtered = useMemo(
    () => (filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === filter)),
    [filter]
  );

  useEffect(() => {
    if (!filtered.some((p) => p.id === activeId)) {
      setActiveId(filtered[0]?.id);
    }
  }, [filter, filtered, activeId]);

  const active = filtered.find((p) => p.id === activeId) || filtered[0];
  const activeIdx = filtered.findIndex((p) => p.id === active?.id);

  const go = (dir: number) => {
    if (!filtered.length) return;
    const next = (activeIdx + dir + filtered.length) % filtered.length;
    setActiveId(filtered[next].id);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !active) return;
    const el = rail.querySelector<HTMLElement>(`[data-pid="${active.id}"]`);
    if (el) {
      const railRect = rail.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      if (elRect.top < railRect.top || elRect.bottom > railRect.bottom) {
        rail.scrollTo({ top: el.offsetTop - rail.offsetTop - 20, behavior: "smooth" });
      }
    }
  }, [active?.id]);

  if (!active) return null;

  return (
    <section className="section portfolio" id="work">
      <div className="section__header" data-reveal>
        <div>
          <div className="eyebrow"><span className="dot" />Recent Work · Bay Area</div>
          <h2 className="section__title">
            Out Of The <span className="sky">Bay.</span><br />
            <span className="accent">Into The Wild.</span>
          </h2>
        </div>
        <p className="section__desc">
          A look at recent wraps, tints and protection jobs across Marin and the Bay.
          Pick a category — or scroll through the rail to load a project on the big screen.
        </p>
      </div>

      <div className="cinema__filters" role="tablist" data-reveal>
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className="cinema__filter"
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="cinema__filter-count">
              {f.id === "all" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.cat === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="cinema" data-reveal>
        <div className="cinema__stage">
          <div className="cinema__frame">
            {filtered.map((p) => (
              <Image
                key={p.id}
                src={p.img}
                alt={p.title}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                className={`cinema__img ${p.id === active.id ? "is-active" : ""}`}
              />
            ))}

            <div className="cinema__tag">
              <span className="dot" />
              {active.catLabel}
            </div>

            <div className="cinema__counter">
              <span className="cinema__counter-num">{String(activeIdx + 1).padStart(2, "0")}</span>
              <span className="cinema__counter-sep">/</span>
              <span className="cinema__counter-total">{String(filtered.length).padStart(2, "0")}</span>
            </div>

            <div className="cinema__overlay">
              <div className="cinema__title-row">
                <div>
                  <h3 className="cinema__title">{active.title}</h3>
                  <div className="cinema__subtitle">{active.subtitle}</div>
                </div>
                <a href="#contact" className="cinema__case-cta">
                  Start a Build <ArrowRight size={16} />
                </a>
              </div>
              <p className="cinema__blurb">{active.blurb}</p>
              <div className="cinema__specs">
                <div className="cinema__spec">
                  <div className="cinema__spec-lbl">Material</div>
                  <div className="cinema__spec-val">{active.material}</div>
                </div>
                <div className="cinema__spec">
                  <div className="cinema__spec-lbl">Bay Time</div>
                  <div className="cinema__spec-val">{active.duration}</div>
                </div>
                <div className="cinema__spec">
                  <div className="cinema__spec-lbl">Location</div>
                  <div className="cinema__spec-val">{active.location}</div>
                </div>
              </div>
            </div>

            <button className="cinema__nav cinema__nav--prev" onClick={() => go(-1)} aria-label="Previous project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button className="cinema__nav cinema__nav--next" onClick={() => go(1)} aria-label="Next project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <aside className="cinema__rail" ref={railRef}>
          <div className="cinema__rail-head">
            <span>Browse</span>
            <span>{filtered.length} {filtered.length === 1 ? "project" : "projects"}</span>
          </div>
          <div className="cinema__rail-list">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                data-pid={p.id}
                className={`cinema__item ${p.id === active.id ? "is-active" : ""}`}
                onClick={() => setActiveId(p.id)}
              >
                <div className="cinema__item-thumb">
                  <Image src={p.img} alt="" width={72} height={54} loading="lazy" style={{ objectFit: "cover" }} />
                </div>
                <div className="cinema__item-body">
                  <div className="cinema__item-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="cinema__item-title">{p.title}</div>
                  <div className="cinema__item-meta">{p.catLabel}</div>
                </div>
                <div className="cinema__item-arrow">
                  <ArrowRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
