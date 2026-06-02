import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import { CDN, CONTACT } from "@/lib/constants";
import { TABS } from "@/data";

const TAB = TABS.find((t) => t.id === "commercial")!;

const BENEFITS = [
  {
    title: "24/7 Advertising",
    desc: "A vehicle wrap turns your car into a mobile billboard, continuously advertising your business wherever it goes.",
  },
  {
    title: "Cost Efficiency",
    desc: "Compared to traditional advertising, wraps offer long-term visibility with no monthly costs.",
  },
  {
    title: "Professional Appearance",
    desc: "Showcasing your brand in a sleek, well-designed format sets you apart from the competition.",
  },
  {
    title: "Fleet Consistency",
    desc: "Whether you run one vehicle or 100, wraps keep your brand message uniform and recognizable.",
  },
];

export default function CommercialWrapsContent() {
  return (
    <main className="svc-pg">

      <ServicePageHero
        img={`${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`}
        imgAlt="Rocky Hill Electric commercial fleet wrap"
        eyebrow="Commercial Wraps · Novato, CA"
        titleLine1="Commercial"
        accentText="Vehicle Wraps"
        tagline="Captivating Designs That Stand Out and Deliver Your Message Clearly"
        certs={["3M Certified", "XPEL Certified", "Avery Dennison Certified"]}
      />

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="svc-intro">
        <div className="section">
          <div className="svc-intro__grid">
            <div data-reveal>
              <div className="eyebrow"><span className="dot" />Who We Are</div>
              <h2 className="svc-intro__heading">
                Transform Your<br /><span className="accent">Brand.</span>
              </h2>
            </div>
            <div className="svc-intro__body" data-reveal>
              <p>
                Commercial wraps are more than just a cosmetic upgrade for your vehicles; they are
                a mobile billboard that works for your brand 24/7.
              </p>
              <p>
                As a trusted leader in vehicle wraps and graphics for more than 10 years, Dynamic
                Wraps &amp; Tints holds certifications from 3M, XPEL, and Avery Dennison — so
                every wrap is backed by industry-leading materials and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="svc-benefits">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />Why Invest in a Commercial Vehicle Wrap in Novato?</div>
              <h2 className="section__title">
                Built for<br /><span className="accent">Results.</span>
              </h2>
            </div>
            <p className="section__desc">
              Every mile driven is an opportunity to make an impression — a professional,
              well-branded vehicle builds trust and credibility before a word is spoken.
            </p>
          </div>
          <div className="svc-benefits__grid" data-reveal-stagger>
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="svc-benefit-card">
                <div className="svc-benefit-card__num">0{i + 1}</div>
                <h3 className="svc-benefit-card__title">{b.title}</h3>
                <p className="svc-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features & Vehicle Types ─────────────────────── */}
      <section className="svc-details">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />What&apos;s Included</div>
              <h2 className="section__title">
                How We<br /><span className="accent">Do It.</span>
              </h2>
            </div>
            <p className="section__desc">
              Every job runs through the same four pillars — from the first design proof to
              the final edge tuck in the bay.
            </p>
          </div>
          <div className="svc-features-grid" data-reveal-stagger>
            {TAB.features.map(([num, label, desc]) => (
              <div key={num} className="svc-feature-card">
                <div className="svc-feature-card__num">{num}</div>
                <div className="svc-feature-card__label">{label}</div>
                <div className="svc-feature-card__desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="svc-chips-block" data-reveal>
            <p className="svc-chips-block__label">{TAB.chipsLabel}</p>
            <div className="chips">
              {TAB.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Content sections ─────────────────────────────── */}
      <section className="svc-content">
        <div className="section">
          <div className="svc-content__grid">
            <div className="svc-content__block" data-reveal>
              <div className="eyebrow"><span className="dot" />Mobile Advertising</div>
              <h2 className="svc-content__heading">
                Make a Bold<br /><span className="accent">Statement.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Company vehicles serve as mobile advertisements. Every mile driven is an
                  opportunity to make an impression — a professional, well-branded vehicle
                  builds trust and credibility before a word is spoken.
                </p>
              </div>
            </div>
            <div className="svc-content__block" data-reveal>
              <div className="eyebrow"><span className="dot" />Strategic Branding</div>
              <h2 className="svc-content__heading">
                Strengthen Your<br /><span className="accent">Identity.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Consistent branding builds trust and credibility. Wrapped vehicles create
                  thousands of potential impressions every day — making your fleet the most
                  cost-effective advertising channel available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image + text ─────────────────────────────────── */}
      <section className="svc-img-section">
        <div className="section">
          <div className="svc-img-section__grid">
            <div className="svc-img-section__frame">
              <Image
                src={`${CDN}/2a192e6a-003a-47ca-9a34-91600edc9345/High-Tech-Plumbing----Vehicle-Wrap.png`}
                alt="High Tech Plumbing commercial vehicle wrap"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />Box Trucks &amp; Fleets</div>
              <h2 className="svc-content__heading">
                Every Vehicle.<br /><span className="accent">One Brand.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Whether you run one vehicle or an entire fleet, Dynamic Wraps &amp; Tints
                  delivers consistent, high-impact branding across every surface. Our full-color
                  wraps, cut vinyl, and partial wrap options give you flexibility to fit any
                  budget while keeping your brand message clear and professional.
                </p>
              </div>
              <div style={{ marginTop: "28px" }}>
                <Link href="/contact" className="btn btn--primary">
                  Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Second image section ─────────────────────────── */}
      <section className="svc-content" style={{ borderTop: "none" }}>
        <div className="section">
          <div className="svc-img-section__grid svc-img-section__grid--reverse">
            <div className="svc-img-section__frame">
              <Image
                src={`${CDN}/e9348d45-d1b4-44d3-ae7a-7f02856f6bd7/Box+Truck+Full+Wrap.jpg`}
                alt="Box truck full commercial wrap"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />Full &amp; Partial Wraps</div>
              <h2 className="svc-content__heading">
                Your Most<br /><span className="accent">Powerful Tool.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Turn your commercial vehicles into your most powerful marketing tool. From full
                  box truck wraps to partial graphics on contractor vans, our installations are
                  precise, durable, and designed to perform on the road for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="svc-cta">
        <div className="section">
          <div className="svc-cta__inner" data-reveal>
            <div className="eyebrow"><span className="dot" />Get Started Today</div>
            <h2 className="svc-cta__title">
              Drive Your<br /><span className="accent">Brand Forward.</span>
            </h2>
            <p className="svc-cta__sub">
              Turn your commercial vehicles into your most powerful marketing tool. Contact
              Dynamic Wraps &amp; Tints today for a free quote.
            </p>
            <div className="svc-cta__actions">
              <Link href="/contact" className="btn btn--primary">
                Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <a href={CONTACT.phoneTel} className="btn btn--ghost">
                {CONTACT.phone}
              </a>
            </div>
            <div className="svc-cta__meta">
              <span>{CONTACT.fullAddress}</span>
              <span aria-hidden="true">·</span>
              <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
