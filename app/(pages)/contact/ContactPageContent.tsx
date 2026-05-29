import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CDN, CONTACT, HOURS } from "@/lib/constants";

export default function ContactPageContent() {
  return (
    <main className="contact-pg">

      {/* ── Page Hero ─────────────────────────────────────── */}
      <div className="contact-pg__hero">
        <div className="pg-hero__bg">
          <Image
            src={`${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="60vw"
          />
        </div>
        <div className="contact-pg__hero-inner">
          <div className="eyebrow" data-reveal><span className="dot" />Get in Touch · Novato, CA</div>
          <h1 className="contact-pg__title" data-reveal>
            Contact<br /><span className="accent">Us.</span>
          </h1>
          <p className="contact-pg__sub" data-reveal>
            We&apos;re here to help you elevate your vehicle or space with our premium wraps,
            tints, and graphics. Have questions or ready to start your next project? Reach out
            to Dynamic Wraps &amp; Tints today—we&apos;d love to hear from you!
          </p>
        </div>
        <div className="contact-pg__hero-bar" aria-hidden="true" />
      </div>

      {/* ── Main Content ──────────────────────────────────── */}
      <section className="contact contact--page">
        <div className="section">
          <div className="contact-grid">

            <ContactForm showHeader submitLabel="Send Message →" />

            <div className="contact-info" data-reveal-stagger>

              <div className="contact-block">
                <div className="contact-block__lbl">
                  <Phone size={16} strokeWidth={2} />
                  Phone
                </div>
                <div className="contact-block__val">
                  <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
                </div>
                <div className="contact-block__sub">Real humans. Real quotes. Usually within the hour.</div>
              </div>

              <div className="contact-block">
                <div className="contact-block__lbl">
                  <Mail size={16} strokeWidth={2} />
                  Email
                </div>
                <div className="contact-block__val">
                  <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
                </div>
                <div className="contact-block__sub">Send photos and we&apos;ll send back numbers.</div>
              </div>

              <div className="contact-block">
                <div className="contact-block__lbl">
                  <MapPin size={16} strokeWidth={2} />
                  Visit the Shop
                </div>
                <div className="contact-block__val">
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {CONTACT.address}
                  </a>
                </div>
                <div className="contact-block__sub">{CONTACT.cityState} · Marin County</div>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pg__map-link"
                >
                  Get Directions <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>

              <div className="contact-block">
                <div className="contact-block__lbl">Bay Hours</div>
                <div className="hours-grid">
                  {HOURS.map((h) => (
                    <div key={h.days} className={`hours-row${h.closed ? " is-closed" : ""}`}>
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block__lbl">
                  <InstagramIcon size={16} />
                  Instagram
                </div>
                <div className="contact-block__val contact-block__val--sm">
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                    {CONTACT.instagramHandle}
                  </a>
                </div>
                <div className="contact-block__sub">Follow our latest installs and builds.</div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
