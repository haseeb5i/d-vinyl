import Image from "next/image";
import Link from "next/link";
import { TABS, ADDITIONAL_SERVICES } from "@/data";

export default function Services() {
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
          Four core service lines, all under one roof — every job designed,
          produced and installed by the same team.
        </p>
      </div>

      <div className="services-grid" data-reveal-stagger>
        {TABS.map((tab) => (
          <article key={tab.id} className="service-card">
            <div className="service-card__img">
              <Image
                src={tab.images.main}
                alt={tab.vehicleLabel}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__title">{tab.name}</h3>
              <p className="service-card__desc">
                {tab.body.split(".")[0]}.
              </p>
              <Link href={tab.href || "#services"} className="service-card__link">
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="services-also" data-reveal>
        <div className="services-also__title">Also Available</div>
        <ul className="services-also__list">
          {ADDITIONAL_SERVICES.map(([, title]) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
