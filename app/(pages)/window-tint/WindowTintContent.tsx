import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import { CDN, CONTACT } from "@/lib/constants";
import { TABS } from "@/data";

const TAB = TABS.find((t) => t.id === "tint")!;

const BENEFITS = [
  {
    title: "UV Protection",
    desc: "Blocks up to 99% of harmful UV rays, safeguarding your skin and your vehicle's interior.",
  },
  {
    title: "Heat Reduction",
    desc: "Keeps your car cooler by reducing heat buildup, even on the hottest days.",
  },
  {
    title: "Glare Reduction",
    desc: "Minimizes sun glare for safer and more comfortable driving.",
  },
  {
    title: "Privacy & Security",
    desc: "Adds a layer of privacy while protecting valuables inside your vehicle.",
  },
  {
    title: "Enhanced Appearance",
    desc: "Gives your car a polished, sophisticated look.",
  },
];

export default function WindowTintContent() {
  return (
    <main className="svc-pg">

      <ServicePageHero
        img={`${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`}
        imgAlt="Yellow Porsche with window tint"
        eyebrow="Window Tinting · Novato, CA"
        titleLine1="Window"
        accentText="Tinting"
        tagline="Automotive privacy glass that's 100% designed for visual enhancement"
        certs={["XPEL Authorized Installer", "10+ Years Expertise"]}
      />

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="svc-intro">
        <div className="section">
          <div className="svc-intro__grid">
            <div data-reveal>
              <div className="eyebrow"><span className="dot" />Professional Tinting</div>
              <h2 className="svc-intro__heading">
                Comfort Meets<br /><span className="accent">Style.</span>
              </h2>
            </div>
            <div className="svc-intro__body" data-reveal>
              <p>
                Enhance your vehicle&apos;s comfort, privacy, and style with professional window
                tinting from Dynamic Wraps &amp; Tints. Located in Novato, California, we bring
                over a decade of expertise and craftsmanship to every installation.
              </p>
              <p>
                Whether you&apos;re looking for UV protection, heat reduction, or a sleek
                aesthetic upgrade, our window tinting solutions are designed to exceed your
                expectations. We only use XPEL for long-lasting performance and durability.
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
              <div className="eyebrow"><span className="dot" />Benefits of Window Tinting</div>
              <h2 className="section__title">
                More Than<br /><span className="accent">Just Looks.</span>
              </h2>
            </div>
            <p className="section__desc">
              Our XPEL window tint delivers performance you can feel every time you get behind
              the wheel — from the first sunny commute to the hottest California afternoon.
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

      {/* ── XPEL Tiers & Applications ────────────────────── */}
      <section className="svc-details">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />XPEL Film Lineup</div>
              <h2 className="section__title">
                Three Tiers.<br /><span className="accent">One Standard.</span>
              </h2>
            </div>
            <p className="section__desc">
              Every film is XPEL — signal-safe, non-metallic, and installed by our
              certified team. Pick the tier that fits your heat, clarity, and budget goals.
            </p>
          </div>
          <div className="tiers" data-reveal-stagger>
            {TAB.tiers!.map(([cls, rank, name, desc]) => (
              <div key={cls} className={`tier tier--${cls}`}>
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
          <div className="svc-chips-block" data-reveal>
            <p className="svc-chips-block__label">{TAB.chipsLabel}</p>
            <div className="chips">
              {TAB.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
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
                src={`${CDN}/e59f6da4-c6d9-483c-87f7-50bdb64d8959/Tesla+Custom+Christmas+Wrap.jpg`}
                alt="Tesla with custom window tint and wrap"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="svc-img-section__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />XPEL Certified</div>
              <h2 className="svc-content__heading">
                Premium Film.<br /><span className="accent">Expert Install.</span>
              </h2>
              <div className="svc-content__body">
                <p>
                  We only use XPEL window tint film — trusted by drivers and professionals
                  worldwide for long-lasting performance and optical clarity. Every installation
                  is handled by our experienced, detail-driven team right here in Novato.
                </p>
                <p>
                  From sedans to SUVs, our tinting service is precise, clean, and backed by
                  more than a decade of hands-on expertise.
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
              Stay Cool.<br /><span className="accent">Drive Better.</span>
            </h2>
            <p className="svc-cta__sub">
              Enhance your vehicle&apos;s comfort, privacy, and style with professional window
              tinting from Dynamic Wraps &amp; Tints. Contact us today for a free quote.
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
