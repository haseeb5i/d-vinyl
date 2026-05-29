"use client";

import { useState } from "react";

const SERVICES = [
  "Commercial Vehicle Wrap",
  "Color Change Wrap",
  "Window Tint",
  "Paint Protection Film",
  "Wall Graphics / Architectural",
  "Graphic Design",
  "Not Sure Yet — Help Me Choose",
];

interface ContactFormProps {
  showHeader?: boolean;
  submitLabel?: string;
}

export default function ContactForm({
  showHeader = false,
  submitLabel = "Send Message →",
}: ContactFormProps) {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <form className="contact-form" onSubmit={submit} data-reveal>
      {showHeader && (
        <div className="contact-pg__form-head">
          <div className="contact-pg__form-eyebrow">Send a Message</div>
          <p className="contact-pg__form-note">
            Fill in your details and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

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
          <input className="contact-form__input" placeholder="(415) 569-0763" />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__lbl">Service</label>
          <select className="contact-form__select" defaultValue="">
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label className="contact-form__lbl">Vehicle / Project</label>
          <input
            className="contact-form__input"
            placeholder="2024 Tesla Model 3, fleet of 6 vans, etc."
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field contact-form__field--full">
          <label className="contact-form__lbl">Project Notes</label>
          <textarea
            className="contact-form__textarea"
            rows={5}
            placeholder="Tell us what you're after — colors, references, timeline, vehicle count…"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`contact-form__submit ${sent ? "is-sent" : ""}`}
      >
        {sent ? "Thanks — We'll Be In Touch ✓" : submitLabel}
      </button>
    </form>
  );
}
