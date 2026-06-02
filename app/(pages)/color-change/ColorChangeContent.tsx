import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import { CDN, CONTACT } from "@/lib/constants";
import { TABS } from "@/data";

const TAB = TABS.find((t) => t.id === "color")!;

const BENEFITS = [
  {
    title: "Custom Style",
    desc: "From subtle shades to bold hues, we offer a wide range of wrap options tailored to your vision.",
  },
  {
    title: "Paint Protection",
    desc: "A wrap shields your original paint from scratches, sun damage, and daily wear.",
  },
  {
    title: "Cost-Effective",
    desc: "Achieve a high-end look without the high cost of a full paint job.",
  },
  {
    title: "Reversible",
    desc: "Change your vehicle's look whenever you want — no commitment required.",
  },
];

export default function ColorChangeContent() {
  return (
    <main className="svc-pg">

      <ServicePageHero
        img={`${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`}
        imgAlt="Tesla with red color change wrap"
        eyebrow="Color Change · Novato, CA"
        titleLine1="Color"
        accentText="Change"
        tagline="Transform your vehicle into a work of art with a custom color change wrap from Dynamic Wraps & Tints."
        certs={["3M Certified", "XPEL Certified", "Avery Dennison Certified"]}
      />

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="svc-intro">
        <div className="section">
          <div className="svc-intro__grid">
            <div data-reveal>
              <div className="eyebrow"><span className="dot" />Premium Wraps</div>
              <h2 className="svc-intro__heading">
                Transform Your<br /><span className="accent">Vehicle.</span>
              </h2>
            </div>
            <div className="svc-intro__body" data-reveal>
              <p>
                Transform the look of your vehicle with Dynamic Wraps &amp; Tints&apos; premium
                color change wraps. Located in Novato, California, we bring over a decade of
                expertise in creating stunning, high-quality vehicle transformations.
              </p>
              <p>
                Whether you want to make a bold statement or achieve a sleek, understated
                appearance, our color change wraps are the perfect solution.
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
              <div className="eyebrow"><span className="dot" />Why Choose a Color Change Wrap?</div>
              <h2 className="section__title">
                Style Meets<br /><span className="accent">Protection.</span>
              </h2>
            </div>
            <p className="section__desc">
              A color change wrap is a smart, non-permanent way to refresh your vehicle.
              Instead of investing in a costly paint job, wrapping offers flexibility,
              protection, and style.
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

      {/* ── Features & Finishes ──────────────────────────── */}
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
              Every color change runs through these four steps — from film selection
              to tucked, paint-like edges.
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
              <div className="eyebrow"><span className="dot" />Novato Color Change</div>
              <h2 className="svc-content__heading">
                A New<br /><span className="accent">Identity.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  If you&apos;re ready to give your car a new identity without the commitment
                  of permanent paint, Dynamic Wraps &amp; Tints offers the perfect solution
                  with their professional car color change service in Novato.
                </p>
                <p>
                  Whether you&apos;re aiming for a bold new look or something more refined, a
                  color change wrap can completely redefine your vehicle&apos;s appearance —
                  without affecting the original paint.
                </p>
              </div>
            </div>
            <div className="svc-content__block" data-reveal>
              <div className="eyebrow"><span className="dot" />Why We Stand Out</div>
              <h2 className="svc-content__heading">
                Trusted by<br /><span className="accent">Novato.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Based in Novato, California, our shop is known for delivering flawless finishes
                  and attention to detail. Our team treats every vehicle like a canvas, ensuring
                  each wrap is applied with precision for a factory-like appearance.
                </p>
                <p>
                  We take pride in helping drivers make a statement on the road — whether
                  it&apos;s a classic car, a daily driver, or a high-end performance vehicle.
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
                src={`${CDN}/6e9a89e5-b24b-4389-8fe4-635eb56b6261/Wrapping+a+vinyal+car+wrap.JPG`}
                alt="Professional vinyl wrap installation"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />A Decade of Expertise</div>
              <h2 className="svc-content__heading">
                Precision<br /><span className="accent">Craft.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  A color change wrap offers a non-permanent way to customize your vehicle
                  without the need for a costly paint job. It provides endless possibilities
                  to express your style while protecting your car&apos;s original paint.
                </p>
                <p>
                  From matte finishes to glossy metallics, our wraps deliver a flawless,
                  factory-like appearance that turns heads everywhere you go.
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

      {/* ── Third image section ───────────────────────────── */}
      <section className="svc-content" style={{ borderTop: "none" }}>
        <div className="section">
          <div className="svc-img-section__grid svc-img-section__grid--reverse">
            <div className="svc-img-section__frame">
              <Image
                src={`${CDN}/66c669df-1afd-4294-b62e-09316bdfd32b/Tesla%2BCyber%2BTruck%2BCamouflage%2BWrap-min.jpg`}
                alt="Tesla Cybertruck camouflage color change wrap"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />Matte · Satin · Gloss · Metallic</div>
              <h2 className="svc-content__heading">
                Endless<br /><span className="accent">Finishes.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  At Dynamic Wraps &amp; Tints, we&apos;ve spent over a decade helping clients
                  transform their cars with sleek finishes like matte, satin, gloss, and even
                  eye-catching metallics.
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
              New Look.<br /><span className="accent">Same Car.</span>
            </h2>
            <p className="svc-cta__sub">
              Give your car the makeover it deserves with the trusted car color change service
              in Novato. Let Dynamic Wraps &amp; Tints show you what&apos;s possible — style,
              protection, and personalization all in one.
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
