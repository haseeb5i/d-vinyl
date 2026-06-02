import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section">
        <div className="section__header" data-reveal>
          <div>
            <div className="eyebrow"><span className="dot" />Get a Quote · Marin County</div>
            <h2 className="section__title">
              Let&apos;s Get You<br />
              <span className="accent">Wrapped.</span>
            </h2>
          </div>
          <p className="section__desc">
            One vehicle or a fleet of fifty — we&apos;ll review your project, send back a real
            quote with a real timeline, and book you into the bay. Usually within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <ContactForm submitLabel="Send Request →" />

          <div className="contact-info" data-reveal-stagger>
            <div className="contact-block">
              <div className="contact-block__lbl">Visit The Bay</div>
              <div className="contact-block__val">{CONTACT.address}</div>
              <div className="contact-block__sub">{CONTACT.cityState} · Marin County</div>
              <div className="contact-block__sub">Mon–Sat 8am–6pm · Sun Closed</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Direct Line</div>
              <div className="contact-block__val">
                <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
              </div>
              <div className="contact-block__sub">Real humans. Real quotes. Usually within the hour.</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Email</div>
              <div className="contact-block__val">
                <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
              </div>
              <div className="contact-block__sub">Send photos and we&apos;ll send back numbers.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
