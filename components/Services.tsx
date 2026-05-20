"use client";

import { useState } from "react";
import Image from "next/image";
import { TABS } from "@/data";
import type { HeadlinePart } from "@/data";
import React from "react";

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="section" id="services">
      <div className="section__header" data-reveal>
        <div>
          <div className="eyebrow"><span className="dot" />What We Do · 04 Services</div>
          <h2 className="section__title">
            Services<br />
            <span className="accent">Built In-House.</span>
          </h2>
        </div>
        <p className="section__desc">
          Four core service lines, all under one roof. Pick a tab to dig in —
          every job is designed, produced and installed by the same team.
        </p>
      </div>

      <div className="tabs">
        <div className="tabs__pills" role="tablist" data-reveal>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === active}
              className="tabs__pill"
              onClick={() => setActive(i)}
            >
              <span className="pill-num">0{i + 1}</span>
              {t.short}
            </button>
          ))}
          <span className="tabs__pill-count">{tab.count}</span>
        </div>

        <div className="tab-panel" key={tab.id}>
          <div className="tab-panel__visual-wrap">
            <div className="tab-panel__visual">
              <div className="tab-panel__tag"><span className="dot" />{tab.tag}</div>
              <Image src={tab.images.main} alt={tab.vehicleLabel} fill style={{ objectFit: "cover" }} />
              <div className="tab-panel__detail">
                <Image src={tab.images.detail} alt={tab.detailLabel} fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>

          <div className="tab-panel__copy">
            <div className="eyebrow"><span className="dot" />0{active + 1} / {TABS.length} · {tab.name}</div>
            <h3>
              {tab.headlineParts.map((p: HeadlinePart, i: number) => (
                <React.Fragment key={i}>
                  {p.block ? <br /> : null}
                  <span className={p.cls || ""}>{p.text}</span>
                </React.Fragment>
              ))}
            </h3>
            <p>{tab.body}</p>

            {tab.chips && (
              <div className="tab-panel__sublist">
                <h4>{tab.chipsLabel}</h4>
                <div className="chips">
                  {tab.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                </div>
              </div>
            )}

            {tab.features && tab.features.length > 0 && (
              <div className="tab-panel__features">
                {tab.features.map(([n, l, d]) => (
                  <div className="feature" key={n}>
                    <div className="feature__num">{n}</div>
                    <div className="feature__lbl">{l}</div>
                    <div className="feature__desc">{d}</div>
                  </div>
                ))}
              </div>
            )}

            {tab.tiers && (
              <div className="tiers">
                {tab.tiers.map(([cls, rank, name, desc]) => (
                  <div className={`tier tier--${cls}`} key={cls}>
                    <div>
                      <div className="tier__rank">{rank === "Good" ? "01" : rank === "Better" ? "02" : "03"}</div>
                    </div>
                    <div>
                      <div className="tier__title">{name}</div>
                      <div className="tier__desc">{desc}</div>
                    </div>
                    <div className="tier__tag">{rank}</div>
                  </div>
                ))}
              </div>
            )}

            <a href={`#service-${tab.id}`} className="tab-panel__cta">
              {tab.cta} <ArrowRight size={18} />
            </a>

            <div className="brands">
              <span className="brands__lbl">We install</span>
              <div className="brands__list">
                <span>XPEL</span><span>3M</span><span>KPMF</span><span>Avery Dennison</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
