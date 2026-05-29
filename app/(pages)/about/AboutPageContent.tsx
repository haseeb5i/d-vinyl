import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CDN, CONTACT } from "@/lib/constants";

const SERVICES = [
  {
    num: "01",
    title: "Vehicle Wraps",
    desc: "Commercial fleet branding, color-change wraps, and fully custom graphics. Design, print and installation — all in-house, in a climate-controlled bay.",
    items: [
      "Commercial Wraps",
      "Color Change",
      "Fleet Branding",
      "Food Trucks",
    ],
  },
  {
    num: "02",
    title: "Window Tinting",
    desc: "Authorized XPEL tint installation for automotive, residential and commercial. Three performance tiers from dyed film to nano-ceramic.",
    items: [
      "Automotive Tint",
      "Residential",
      "Commercial Glass",
      "Privacy Film",
    ],
  },
  {
    num: "03",
    title: "Paint Protection",
    desc: "XPEL PPF to shield your finish from rock chips, road debris, and California elements. Software-cut precision, tucked edges, 10-year warranty.",
    items: [
      "Full Vehicle PPF",
      "Partial Front",
      "Stealth / Satin PPF",
      "Ceramic Coating",
    ],
  },
  {
    num: "04",
    title: "Graphics & Design",
    desc: "Wall wraps, storefront graphics, custom branding, and graphic design — for businesses that want their space to work as hard as their vehicles.",
    items: [
      "Wall Wraps",
      "Storefront Graphics",
      "Custom Branding",
      "Graphic Design",
    ],
  },
];

const BRANDS = [
  "Roads Brothers Engineering & Construction",
  "Move Buster",
  "Xolo Junk and Removal",
  "Road Trucking",
  "Antigua Market and Restaurant",
  "AR Plumbing",
  "OCHOAS Cleaning",
  "MI CASA Restaurant",
  "Maria Cleaning Service",
  "Twins Exotics",
  "King Tacos Chapin",
  "Lego Construction",
];

const STATS = [
  { num: "10+", label: "Years Combined Expertise" },
  { num: "100+", label: "Color & Finish Options" },
  { num: "4", label: "Service Categories" },
  { num: "1", label: "Shop · Novato, CA" },
];

export default function AboutPageContent() {
  return (
    <main className="about-pg">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="about-pg__hero">
        <div className="pg-hero__bg">
          <Image
            src={`${CDN}/66c669df-1afd-4294-b62e-09316bdfd32b/Tesla%2BCyber%2BTruck%2BCamouflage%2BWrap-min.jpg`}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="60vw"
          />
        </div>
        <div className="about-pg__hero-inner">
          <div className="eyebrow" data-reveal>
            <span className="dot" />
            Our Story · Est. Novato, CA
          </div>
          <h1 className="about-pg__title" data-reveal>
            About
            <br />
            <span className="accent">Us.</span>
          </h1>
          <p className="about-pg__sub" data-reveal>
            Welcome to
            Dynamic Wraps &amp; Tints, where innovation meets craftsmanship to
            transform vehicles and spaces with stunning wraps, tints, and
            graphics. Located in Novato, California, we have been delivering
            exceptional services for over a decade, earning the trust of
            countless clients with our commitment to quality and excellence.
          </p>
        </div>
        <div className="about-pg__hero-line" aria-hidden="true" />
      </div>

      {/* ── Mission + Visual ─────────────────────────────── */}
      <section className="about-story">
        <div className="section">
          <div className="about-story__grid">
            {/* Copy */}
            <div className="about-story__copy" data-reveal>
              <div className="eyebrow">
                <span className="dot" />
                Who We Are
              </div>
              <h2 className="about-story__heading">
                Passion Meets
                <br />
                <span className="accent">Precision.</span>
              </h2>
              <p className="about-story__body">
                Dynamic Wraps &amp; Tints is a Novato-based studio with over a
                decade of combined expertise in vehicle wrapping and graphic
                design. We combine cutting-edge technology with unmatched
                craftsmanship to bring your vision to life — whether that&apos;s
                a single color-change on your daily driver or a full fleet
                rebrand for your business.
              </p>
              <p className="about-story__body">
                Our mission is to deliver outstanding results that exceed our
                clients&apos; expectations. From concept through installation,
                every job leaves our bay held to the same standard: clean edges,
                precise fitment, and a finish that speaks for itself.
              </p>
              <div className="about-story__pills" data-reveal-stagger>
                <span className="about-pill">In-House Design</span>
                <span className="about-pill">In-House Print</span>
                <span className="about-pill">Climate-Controlled Bay</span>
                <span className="about-pill">XPEL Authorized</span>
                <span className="about-pill">Novato, CA</span>
              </div>
            </div>

            {/* Visual */}
            <div className="about-story__visual-wrap" data-reveal>
              <div className="about-story__frame">
                <Image
                  src={`${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`}
                  alt="Yellow Porsche with full PPF and window tint"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
              <div className="about-story__badge">
                <div className="about-story__badge-num">
                  10<span>+</span>
                </div>
                <div className="about-story__badge-lbl">
                  Years Combined
                  <br />
                  Expertise
                </div>
              </div>
              <div className="about-story__frame-2">
                <Image
                  src={`${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`}
                  alt="Rocky Hill Electric commercial van wrap"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1100px) 100vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────── */}
      <div className="about-stats">
        <div className="about-stats__inner" data-reveal-stagger>
          {STATS.map((s) => (
            <div key={s.label} className="about-stat">
              <div className="about-stat__num">{s.num}</div>
              <div className="about-stat__lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── What We Do ───────────────────────────────────── */}
      <section className="about-services">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What We Do
              </div>
              <h2 className="section__title">
                Everything Your
                <br />
                <span className="accent">Ride Needs.</span>
              </h2>
            </div>
            <p className="section__desc">
              Enhance comfort, privacy, and style with our premium wraps, tints,
              and graphics. All services designed, produced, and installed under
              one roof.
            </p>
          </div>

          <div className="about-svc-grid" data-reveal-stagger>
            {SERVICES.map((svc) => (
              <div key={svc.num} className="about-svc-card">
                <div className="about-svc-card__num">{svc.num}</div>
                <h3 className="about-svc-card__title">{svc.title}</h3>
                <p className="about-svc-card__desc">{svc.desc}</p>
                <ul className="about-svc-card__list">
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ───────────────────────────────────────── */}
      <section className="about-brands">
        <div className="section">
          <div className="about-brands__head" data-reveal>
            <div className="eyebrow"><span className="dot" />Our Clients</div>
            <h2 className="about-brands__title">
              Branding Creation<br /><span className="accent">Starts With Us.</span>
            </h2>
          </div>
          <div className="about-brands__grid" data-reveal-stagger>
            {BRANDS.map((brand) => (
              <div key={brand} className="about-brand-card">
                <span className="about-brand-card__dot" aria-hidden="true" />
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach Strip ───────────────────────────────── */}
      <div className="about-approach">
        <div className="about-approach__inner">
          <div className="about-approach__text" data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              Our Approach
            </div>
            <blockquote className="about-approach__quote">
              &ldquo;We strive to combine cutting-edge technology with unmatched
              expertise to bring your vision to life.&rdquo;
            </blockquote>
            <div className="about-approach__attr">
              Dynamic Wraps &amp; Tints · Novato, CA
            </div>
          </div>
          <div className="about-approach__img-wrap" data-reveal>
            <Image
              src={`${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`}
              alt="Tesla Model 3 gloss red color change wrap"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1100px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="section">
          <div className="about-cta__inner" data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              Ready to Start?
            </div>
            <h2 className="about-cta__title">
              Let&apos;s Get You
              <br />
              <span className="accent">Wrapped.</span>
            </h2>
            <p className="about-cta__sub">
              One vehicle or a fleet of fifty — reach out and we&apos;ll review
              your project, send back a real quote with a real timeline, and
              book you in. Usually within 24 hours.
            </p>
            <div className="about-cta__actions">
              <Link href="/contact" className="btn btn--primary">
                Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link href="/gallery" className="btn btn--ghost">
                View Our Work
              </Link>
            </div>
            <div className="about-cta__meta">
              <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
              <span aria-hidden="true">·</span>
              <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
              <span aria-hidden="true">·</span>
              <span>{CONTACT.fullAddress}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
