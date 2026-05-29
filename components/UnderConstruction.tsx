import { ArrowRight } from "lucide-react";

interface Props {
  category: string;
  title: string;
  titleAccent: string;
  description: string;
}

export default function UnderConstruction({ category, title, titleAccent, description }: Props) {
  return (
    <main className="uc-page">
      <div className="uc-page__inner">
        <div className="uc-page__badge">
          <span className="dot" />
          Coming Soon
        </div>

        <div className="uc-page__cat">{category}</div>

        <h1 className="uc-page__title">
          {title}
          <br />
          <span className="accent">{titleAccent}</span>
        </h1>

        <p className="uc-page__desc">{description}</p>

        <div className="uc-page__actions">
          <a href="/" className="btn btn--ghost">← Back to Home</a>
          <a href="/quote" className="btn btn--primary">Get a Quote <ArrowRight size={14} strokeWidth={2.5} /></a>
        </div>

        <div className="uc-page__divider" aria-hidden="true" />

        <div className="uc-page__meta">
          <a href="tel:+14155550148">(415) 555-0148</a>
          <a href="mailto:hello@dynamicwrapsandtint.com">hello@dynamicwrapsandtint.com</a>
          <span>Mon–Fri 8:00–18:00 · Novato, CA</span>
        </div>
      </div>
    </main>
  );
}
