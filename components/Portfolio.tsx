import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/data";

const FEATURED_IDS = ["cyber", "rocky", "tesla-red", "porsche", "tacos", "boxtruck"];
const FEATURED = FEATURED_IDS.map((id) => PORTFOLIO.find((p) => p.id === id)!);

export default function Portfolio() {
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
          A look at recent wraps, tints and protection jobs across Marin and the Bay Area.
        </p>
      </div>

      <div className="portfolio-grid" data-reveal-stagger>
        {FEATURED.map((p) => (
          <article key={p.id} className="portfolio-card">
            <Image
              src={p.img}
              alt={p.title}
              fill
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <div className="portfolio-card__caption">
              <div className="portfolio-card__title">{p.title}</div>
              <div className="portfolio-card__cat">{p.catLabel}</div>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-cta" data-reveal>
        <Link href="/gallery" className="btn btn--ghost">See All Work →</Link>
      </div>
    </section>
  );
}
