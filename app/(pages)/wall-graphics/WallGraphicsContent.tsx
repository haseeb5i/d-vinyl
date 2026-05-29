import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CDN, CONTACT } from "@/lib/constants";

const BENEFITS = [
  {
    title: "Versatile Design",
    desc: "From logos and branding to murals and decorative art, wall graphics are tailored to your vision.",
  },
  {
    title: "Cost-Effective",
    desc: "A budget-friendly way to refresh or personalize your space without renovations.",
  },
  {
    title: "Durable and Long-Lasting",
    desc: "Made with high-quality materials that resist fading, peeling, and wear.",
  },
  {
    title: "Easy to Install and Remove",
    desc: "Quickly applied without damage to walls, making them ideal for temporary or permanent use.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Tailored Designs",
    desc: "We collaborate with you to craft designs that reflect your vision—whether you're highlighting your brand or elevating your home décor.",
  },
  {
    title: "Budget-Friendly",
    desc: "Wall graphics are an affordable way to refresh your space—no construction or major renovations are required.",
  },
  {
    title: "Built to Last",
    desc: "Made from durable vinyl, our graphics resist peeling, fading, and wear, even in high-traffic areas.",
  },
  {
    title: "Easy to Install and Remove",
    desc: "Whether you're setting up a temporary promotion or a long-term display, our graphics install effortlessly and remove without leaving a trace.",
  },
];

export default function WallGraphicsContent() {
  return (
    <main className="wg-pg">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="wg-pg__hero">
        <div className="pg-hero__bg">
          <Image
            src={`${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="60vw"
          />
        </div>
        <div className="wg-pg__hero-inner">
          <div className="eyebrow" data-reveal>
            <span className="dot" />Wall Graphics · Novato, CA
          </div>
          <h1 className="wg-pg__title" data-reveal>
            Wall<br /><span className="accent">Graphics</span>
          </h1>
          <p className="wg-pg__tagline" data-reveal>
            Wall graphics are an affordable and creative way to make a bold impact on your space.
          </p>
          <div className="wg-pg__hero-actions" data-reveal>
            <Link href="/contact" className="btn btn--primary">
              Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <a href="tel:+14155690763" className="btn btn--ghost">
              (415) 569-0763
            </a>
          </div>
          <div className="wg-pg__certs" data-reveal>
            <span className="wg-cert">3M Certified</span>
            <span className="wg-cert">3M Preferred Graphics Installer</span>
            <span className="wg-cert">Avery Dennison Certified Wrap Installer</span>
          </div>
        </div>
        <div className="wg-pg__hero-line" aria-hidden="true" />
      </div>

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="wg-intro">
        <div className="section">
          <div className="wg-intro__grid">
            <div data-reveal>
              <div className="eyebrow"><span className="dot" />Who We Are</div>
              <h2 className="wg-intro__heading">
                Transform Your<br /><span className="accent">Space.</span>
              </h2>
            </div>
            <div className="wg-intro__body" data-reveal>
              <p>
                Transform your space with eye-catching wall graphics from Dynamic Wraps &amp; Tints.
                Based in Novato, California, we bring over 10 years of experience in creating custom
                designs that enhance any environment. Whether you want to make a bold statement,
                promote your brand, or add a personal touch to your space, our wall graphics are
                the perfect solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Are Wall Graphics ───────────────────────── */}
      <section className="wg-what">
        <div className="section">
          <div className="wg-what__grid">
            <div className="wg-what__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />What Are Wall Graphics?</div>
              <p className="wg-what__body">
                Wall graphics are custom-designed vinyl decals or wraps that adhere seamlessly
                to walls, transforming plain surfaces into vibrant displays. They are perfect
                for commercial spaces, offices, retail stores, and even residential interiors,
                offering endless possibilities for creativity and branding.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="wg-what__visual" aria-hidden="true">
              <div className="wg-what__deco-box">
                <span className="wg-what__deco-text">TRANSFORM<br />YOUR WALLS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="wg-benefits">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />Benefits of Wall Graphics</div>
              <h2 className="section__title">
                Why Wall<br /><span className="accent">Graphics?</span>
              </h2>
            </div>
            <p className="section__desc">
              At Dynamic Wraps &amp; Tints, we specialize in crafting high-quality wall graphics
              that meet your unique needs. Our team of talented designers and certified installers
              works closely with you to bring your ideas to life.
            </p>
          </div>
          <div className="wg-benefits__grid" data-reveal-stagger>
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="wg-benefit-card">
                <div className="wg-benefit-card__num">0{i + 1}</div>
                <h3 className="wg-benefit-card__title">{b.title}</h3>
                <p className="wg-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bold Statement ───────────────────────────────── */}
      <section className="wg-bold">
        <div className="section">
          <div className="wg-bold__grid">
            <div className="wg-bold__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />Novato Wall Graphics</div>
              <h2 className="wg-bold__heading">
                Make a Bold<br /><span className="accent">Statement.</span>
              </h2>
              <p>
                When you&apos;re ready to refresh your space with color, creativity, and purpose,
                wall graphics services in Novato are a smart, impactful solution. At Dynamic
                Wraps &amp; Tints, we specialize in transforming blank walls into stunning focal
                points that express your brand, personality, or message. Whether you&apos;re
                upgrading a storefront, office, or home interior, our team is here to help you
                turn your vision into reality.
              </p>
            </div>
            <div className="wg-bold__copy" data-reveal>
              <div className="eyebrow"><span className="dot" />Interior Wall Wraps</div>
              <h2 className="wg-bold__heading">
                Speak<br /><span className="accent">Volumes.</span>
              </h2>
              <p>
                Interior wall wraps do more than fill up a wall—they set the tone for your space.
                From custom logos and quotes to artistic murals and branded visuals, wall wraps
                allow you to personalize your surroundings in a way that paint simply can&apos;t.
                They&apos;re a powerful option for businesses and homeowners alike who want their
                space to make an impression.
              </p>
              <p>
                Crafted from premium vinyl, our wraps are ideal for commercial settings like
                retail shops, offices, salons, and even residential interiors. Whether your goal
                is to impress clients, inspire employees, or simply make your home feel more you,
                our wraps deliver both function and flair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="wg-why">
        <div className="section">
          <div className="section__header" data-reveal>
            <div>
              <div className="eyebrow"><span className="dot" />Why Choose Us</div>
              <h2 className="section__title">
                Why Dynamic<br /><span className="accent">Wraps &amp; Tints?</span>
              </h2>
            </div>
            <p className="section__desc">
              Based in Novato, California, we bring more than 10 years of experience in providing
              reliable, high-quality wall wrap services. Our process is built on creativity,
              precision, and customer satisfaction.
            </p>
          </div>
          <div className="wg-why__grid" data-reveal-stagger>
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="wg-why-card">
                <div className="wg-why-card__check">
                  <Check size={14} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="wg-why-card__title">{item.title}</h3>
                  <p className="wg-why-card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional Printing & Install ──────────────── */}
      <section className="wg-pro">
        <div className="section">
          <div className="wg-pro__inner" data-reveal>
            <div className="wg-pro__copy">
              <div className="eyebrow"><span className="dot" />Professional Service</div>
              <h2 className="wg-pro__heading">
                Printing &amp; Installation<br /><span className="accent">Done Right.</span>
              </h2>
              <p>
                Our wall graphic printing service ensures your graphics look crisp and vivid.
                Combined with professional installation, you get flawless results from start to
                finish. We handle everything—from design to printing and application—so you
                don&apos;t have to worry about a thing.
              </p>
              <p>
                Whether you need full-wall murals, branded signage, or decorative pieces,
                we&apos;re your local experts in wall graphics services in Novato.
              </p>
            </div>
            <div className="wg-pro__badges" data-reveal-stagger>
              <div className="wg-badge">
                <div className="wg-badge__title">3M Certified</div>
                <div className="wg-badge__sub">Preferred Graphics Installer</div>
              </div>
              <div className="wg-badge">
                <div className="wg-badge__title">Avery Dennison</div>
                <div className="wg-badge__sub">Certified Wrap Installer</div>
              </div>
              <div className="wg-badge">
                <div className="wg-badge__title">10+ Years</div>
                <div className="wg-badge__sub">Combined Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Started CTA ──────────────────────────────── */}
      <section className="wg-cta">
        <div className="section">
          <div className="wg-cta__inner" data-reveal>
            <div className="eyebrow"><span className="dot" />Get Started Today</div>
            <h2 className="wg-cta__title">
              Let Your Walls<br /><span className="accent">Do the Talking.</span>
            </h2>
            <p className="wg-cta__sub">
              If you&apos;re ready to change the way your space looks and feels, contact Dynamic
              Wraps &amp; Tints today. Call us or request an online quote to start your project
              with the top provider of Novato wall graphics.
            </p>
            <p className="wg-cta__close">
              Let your walls do the talking—with custom designs from your trusted team for wall
              graphic printing service and high-quality wall wraps services in Novato that bring
              your ideas to life.
            </p>
            <div className="wg-cta__actions">
              <Link href="/contact" className="btn btn--primary">
                Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <a href={CONTACT.phoneTel} className="btn btn--ghost">
                {CONTACT.phone}
              </a>
            </div>
            <div className="wg-cta__meta">
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
