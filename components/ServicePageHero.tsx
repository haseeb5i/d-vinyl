import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface ServicePageHeroProps {
  img: string;
  imgAlt?: string;
  eyebrow: string;
  titleLine1: string;
  accentText: string;
  tagline: React.ReactNode;
  certs: string[];
}

export default function ServicePageHero({
  img,
  imgAlt = "",
  eyebrow,
  titleLine1,
  accentText,
  tagline,
  certs,
}: ServicePageHeroProps) {
  return (
    <div className="svc-pg__hero">
      <div className="pg-hero__bg">
        <Image
          src={img}
          alt={imgAlt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="60vw"
        />
      </div>
      <div className="svc-pg__hero-inner">
        <div className="eyebrow" data-reveal>
          <span className="dot" />{eyebrow}
        </div>
        <h1 className="svc-pg__title" data-reveal>
          {titleLine1}<br /><span className="accent">{accentText}</span>
        </h1>
        <p className="svc-pg__tagline" data-reveal>{tagline}</p>
        <div className="svc-pg__hero-actions" data-reveal>
          <Link href="/contact" className="btn btn--primary">
            Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
          <a href={CONTACT.phoneTel} className="btn btn--ghost">
            {CONTACT.phone}
          </a>
        </div>
        {certs.length > 0 && (
          <div className="svc-pg__certs" data-reveal>
            {certs.map((c) => (
              <span key={c} className="svc-cert">{c}</span>
            ))}
          </div>
        )}
      </div>
      <div className="svc-pg__hero-line" aria-hidden="true" />
    </div>
  );
}
