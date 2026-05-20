"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

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
          <form className="contact-form" onSubmit={submit} data-reveal>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__lbl">Name</label>
                <input className="contact-form__input" placeholder="Your name" required />
              </div>
              <div className="contact-form__field">
                <label className="contact-form__lbl">Business (optional)</label>
                <input className="contact-form__input" placeholder="Company name" />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__lbl">Email</label>
                <input className="contact-form__input" type="email" placeholder="you@email.com" required />
              </div>
              <div className="contact-form__field">
                <label className="contact-form__lbl">Phone</label>
                <input className="contact-form__input" placeholder="(415) 555-0148" />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__lbl">Service</label>
                <select className="contact-form__select" defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>Commercial Vehicle Wrap</option>
                  <option>Color Change Wrap</option>
                  <option>Window Tint</option>
                  <option>Paint Protection Film</option>
                  <option>Architectural / Commercial</option>
                  <option>Not Sure Yet — Help Me Choose</option>
                </select>
              </div>
              <div className="contact-form__field">
                <label className="contact-form__lbl">Vehicle / Project</label>
                <input className="contact-form__input" placeholder="2024 Tesla Model 3, fleet of 6 vans, etc." />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__field contact-form__field--full">
                <label className="contact-form__lbl">Project Notes</label>
                <textarea className="contact-form__textarea" placeholder="Tell us what you're after — colors, references, timeline, vehicle count…" />
              </div>
            </div>
            <button type="submit" className={`contact-form__submit ${sent ? "is-sent" : ""}`}>
              {sent ? "Thanks — We'll Be In Touch ✓" : "Send Request →"}
            </button>
          </form>

          <div className="contact-info" data-reveal-stagger>
            <div className="contact-block">
              <div className="contact-block__lbl">Visit The Bay</div>
              <div className="contact-block__val">Novato, CA</div>
              <div className="contact-block__sub">Marin County · Open by appointment for walkthroughs.</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Direct Line</div>
              <div className="contact-block__val"><a href="tel:+14155550148">(415) 555-0148</a></div>
              <div className="contact-block__sub">Real humans. Real quotes. Usually within the hour.</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Email</div>
              <div className="contact-block__val"><a href="mailto:hello@dynamicwrapsandtint.com">hello@dynamicwrapsandtint.com</a></div>
              <div className="contact-block__sub">Send photos and we&apos;ll send back numbers.</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Bay Hours</div>
              <div className="hours-grid">
                <div className="hours-row"><span>Mon – Fri</span><span>8:00 – 18:00</span></div>
                <div className="hours-row"><span>Saturday</span><span>9:00 – 15:00</span></div>
                <div className="hours-row is-closed"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
