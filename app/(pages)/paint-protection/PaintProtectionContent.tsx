import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import { CDN, CONTACT } from "@/lib/constants";

const PROTECTS_AGAINST = [
  { title: "Rock Chips & Scratches", desc: "Absorbs road debris impacts before they reach your paint." },
  { title: "Road Debris & Salt", desc: "Shields against corrosive road salt and flying gravel." },
  { title: "Bug Splatter & Bird Droppings", desc: "Easy to clean, prevents acidic damage to the clear coat." },
  { title: "UV Damage & Fading", desc: "Blocks ultraviolet rays that dull and fade painted surfaces over time." },
];

export default function PaintProtectionContent() {
  return (
    <main className="svc-pg">

      <ServicePageHero
        img={`${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`}
        imgAlt="Yellow Porsche with paint protection film"
        eyebrow="Paint Protection Film · Novato, CA"
        titleLine1="Paint"
        accentText="Protection"
        tagline="Trust our XPEL certification for top-notch quality and reliability."
        certs={["XPEL Certified Installer", "10+ Years Expertise"]}
      />

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="svc-intro">
        <div className="section">
          <div className="svc-intro__grid">
            <div data-reveal>
              <div className="eyebrow"><span className="dot" />PPF · Clear Bra</div>
              <h2 className="svc-intro__heading">
                Protect Your<br /><span className="accent">Investment.</span>
              </h2>
            </div>
            <div className="svc-intro__body" data-reveal>
              <p>
                Paint Protection Film (often called PPF or clear bra) is a transparent, durable
                layer of polyurethane film applied to your car&apos;s painted surfaces.
              </p>
              <p>
                Paint Protection Film for cars in Novato is now more accessible than ever through
                Dynamic Wraps &amp; Tints. As XPEL certified installers with over 10 years of
                hands-on experience, we deliver premium-grade PPF installation with custom fitting
                services for every vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What It Protects Against ──────────────────────── */}
      <section className="svc-benefits">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />What PPF Protects Against</div>
              <h2 className="section__title">
                Built to<br /><span className="accent">Endure.</span>
              </h2>
            </div>
            <p className="section__desc">
              California roads are hard on paint. PPF acts as an invisible shield between
              your vehicle&apos;s finish and the road — protecting against everyday hazards
              that chip, scratch, and fade.
            </p>
          </div>
          <div className="svc-benefits__grid" data-reveal-stagger>
            {PROTECTS_AGAINST.map((b, i) => (
              <div key={b.title} className="svc-benefit-card">
                <div className="svc-benefit-card__num">0{i + 1}</div>
                <h3 className="svc-benefit-card__title">{b.title}</h3>
                <p className="svc-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content sections ─────────────────────────────── */}
      <section className="svc-content">
        <div className="section">
          <div className="svc-content__grid">
            <div className="svc-content__block" data-reveal>
              <div className="eyebrow"><span className="dot" />Is PPF Right for You?</div>
              <h2 className="svc-content__heading">
                The Right<br /><span className="accent">Choice.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  Is car paint protection film in Novato the right choice for your vehicle?
                  If you drive on California highways, park outside, or simply want to preserve
                  your car&apos;s resale value, the answer is yes.
                </p>
                <p>
                  PPF is ideal for protecting vehicle investments, especially in California
                  driving conditions where road debris, intense sun, and coastal salt are
                  constant threats to your paint. With high-quality XPEL installation, your
                  vehicle&apos;s finish stays showroom-fresh for years.
                </p>
              </div>
            </div>
            <div className="svc-content__block" data-reveal>
              <div className="eyebrow"><span className="dot" />Why Dynamic Wraps &amp; Tints?</div>
              <h2 className="svc-content__heading">
                Certified<br /><span className="accent">Expertise.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  With over 10 years of expertise, XPEL certification, and a location right
                  here in Novato, Dynamic Wraps &amp; Tints is the trusted choice for
                  premium-grade PPF installation.
                </p>
                <p>
                  We offer custom fitting services tailored to your vehicle — full fronts,
                  track packs, or complete car coverage — so you get exactly the level of
                  protection your investment deserves.
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
                src={`${CDN}/2fd6af27-018e-4d2d-9aef-4f7406ba7d32/WhatsApp+Image+2025-01-09+at+5.35.12+PM.jpeg`}
                alt="Paint protection film installation close-up"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />XPEL PPF</div>
              <h2 className="svc-content__heading">
                Invisible<br /><span className="accent">Armor.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  XPEL paint protection film is optically clear, self-healing, and built to
                  last. Applied by our certified technicians, it conforms precisely to every
                  curve of your vehicle for seamless, invisible coverage.
                </p>
                <p>
                  From daily drivers to weekend performance cars, every vehicle deserves the
                  best protection available — and that&apos;s exactly what we deliver.
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

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="svc-cta">
        <div className="section">
          <div className="svc-cta__inner" data-reveal>
            <div className="eyebrow"><span className="dot" />Get Started Today</div>
            <h2 className="svc-cta__title">
              Protect Your<br /><span className="accent">Investment.</span>
            </h2>
            <p className="svc-cta__sub">
              Protect your investment the right way with XPEL paint protection film from
              Dynamic Wraps &amp; Tints. Contact us today for a free quote.
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
