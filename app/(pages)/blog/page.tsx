import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

const CDN =
  "https://images.squarespace-cdn.com/content/v1/6745dcc560869535bc3e0842";

export const metadata: Metadata = {
  title: "Blog & Notes · Dynamic Wraps & Tint — Marin County",
  description:
    "Tips, installs, material guides and behind-the-scenes notes from the Dynamic Wraps & Tint studio in Novato, CA.",
};

export default function BlogPage() {
  return (
    <main className="blog-pg">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="blog-pg__hero">
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
        <div className="blog-pg__hero-inner">
          <div className="eyebrow" data-reveal>
            <span className="dot" />
            Insights &amp; Tips · Dynamic Wraps &amp; Tints
          </div>
          <h1 className="blog-pg__title" data-reveal>
            Blog
            <br />
            <span className="accent">Latest.</span>
          </h1>
          <p className="blog-pg__sub" data-reveal>
            Install notes, material guides, care tips and behind-the-scenes from
            the Dynamic Wraps &amp; Tints studio in Novato, CA.
          </p>
        </div>
        <div className="blog-pg__hero-line" aria-hidden="true" />
      </div>

      {/* ── Post Grid ────────────────────────────────────── */}
      <section className="blog-list">
        <div className="section">
          <div className="blog-list__grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link href={`/blog/${post.slug}`} className="blog-card__img-wrap">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 740px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span className="blog-card__cat">{post.category}</span>
                </Link>
                <div className="blog-card__body">
                  <h2 className="blog-card__title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__foot">
                    <span className="blog-card__meta">
                      {post.date} &middot; {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="blog-card__read-more"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
