import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} · Dynamic Wraps & Tint`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((block, idx) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={idx} className="blog-detail__h2">
          {block.replace(/^## /, "")}
        </h2>
      );
    }
    // Parse **bold** inline
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <p key={idx} className="blog-detail__p">
        {rendered}
      </p>
    );
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="blog-detail">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="blog-detail__hero">
        <div className="pg-hero__bg">
          <Image
            src={post.heroImage}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="60vw"
          />
        </div>
        <div className="blog-detail__hero-inner">
          <div className="eyebrow" data-reveal>
            <span className="dot" />
            {post.category}
          </div>
          <h1 className="blog-detail__title" data-reveal>
            {post.title}
          </h1>
          <p className="blog-detail__meta" data-reveal>
            {post.date} &middot; {post.readTime} &middot; {post.author}
          </p>
        </div>
        <div className="blog-detail__hero-line" aria-hidden="true" />
      </div>

      {/* ── Article Body ─────────────────────────────────── */}
      <section className="blog-detail__article">
        <div className="section">
          <div className="blog-detail__body">{renderContent(post.content)}</div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────── */}
      <section className="blog-detail__cta">
        <div className="section">
          <div className="blog-detail__cta-inner">
            <p className="blog-detail__cta-label">Ready to protect your vehicle?</p>
            <h2 className="blog-detail__cta-heading">
              Let&apos;s Talk About Your&nbsp;
              <span className="accent">Project.</span>
            </h2>
            <div className="blog-detail__cta-actions">
              <Link href="/contact" className="btn btn--primary">
                Get a Free Quote
              </Link>
              <Link href="/blog" className="btn btn--ghost">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
