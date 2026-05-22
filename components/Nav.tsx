"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Drawer } from "vaul";

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const NAV_DROPDOWN = [
  { href: "/commercial-wraps", label: "Commercial Wraps" },
  { href: "/color-change", label: "Color Change" },
  { href: "/window-tint", label: "Window Tinting" },
  { href: "/paint-protection", label: "Paint Protection Film" },
];

const NAV_ITEMS: { key: string; label: string; href?: string }[] = [
  { key: "arch", label: "Architectural", href: "/architectural-services" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contact", label: "Contact", href: "/contact" },
];

const DRAWER_GROUPS: { label: string; items: [string, string][] }[] = [
  {
    label: "Vehicles Wraps",
    items: [
      ["/commercial-wraps", "Commercial Vehicle Wraps"],
      ["/color-change", "Color Change Wraps"],
      ["/window-tint", "Window Tint"],
      ["/paint-protection", "Paint Protection Film"],
    ],
  },
  {
    label: "Architectural & Brand",
    items: [
      ["/architectural-services", "Architectural Services"],
      ["/architectural-services#wall", "Wall Graphics"],
      ["/architectural-services#signage", "Custom Signage"],
    ],
  },
  {
    label: "Studio",
    items: [
      ["/gallery", "Gallery"],
      ["/about", "About Us"],
      ["/blog", "Blog"],
      ["/#process", "Our Process"],
    ],
  },
  {
    label: "Service Area",
    items: [
      ["/areas/novato", "Novato"],
      ["/areas/san-rafael", "San Rafael"],
      ["/areas/petaluma", "Petaluma"],
      ["/areas/marin-county", "Marin County"],
      ["/areas/bay-area", "Bay Area"],
    ],
  },
  {
    label: "Get in Touch",
    items: [
      ["/contact", "Contact Us"],
      ["/quote", "Request a Quote"],
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={close}>
          <Image src="/logo.png" alt="Dynamic Wraps & Tint" width={120} height={44} style={{ height: 44, width: "auto" }} />
        </Link>

        <NavigationMenu.Root className="navdd-root">
          <NavigationMenu.List className="navdd-list">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="navdd__trigger">
                Vehicles Wraps
                <svg className="navdd__chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div className="navdd__panel-inner">
                  <ul className="navdd__items">
                    {NAV_DROPDOWN.map((it) => (
                      <li key={it.href}>
                        <NavigationMenu.Link asChild>
                          <Link href={it.href} className="navdd__item">{it.label}</Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {NAV_ITEMS.map((item) => (
              <NavigationMenu.Item key={item.key}>
                <NavigationMenu.Link asChild>
                  <Link href={item.href ?? "#"} className="navdd__link">{item.label}</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <div className="navdd__viewport-wrap">
            <NavigationMenu.Viewport className="navdd__viewport" />
          </div>
        </NavigationMenu.Root>

        <Link href="/quote" className="nav__cta nav__cta--desktop">
          Get a Quote <ArrowRight />
        </Link>

        <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
          <Drawer.Trigger asChild>
            <button
              className={`nav__burger${open ? " is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="drawer-scrim" />
            <Drawer.Content className="drawer drawer--grouped" aria-describedby={undefined}>
              <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>

              <div className="drawer__head">
                <div className="drawer__brand">
                  <Image src="/logo.png" alt="" width={100} height={40} style={{ height: 40, width: "auto" }} />
                </div>
                <button className="drawer__close" onClick={close} aria-label="Close menu">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="drawer__body">
                {DRAWER_GROUPS.map((g) => (
                  <div className="drawer__group" key={g.label}>
                    <div className="drawer__group-label">{g.label}</div>
                    <nav className="drawer__group-nav">
                      {g.items.map(([href, label]) => (
                        <Link key={href} href={href} onClick={close}>
                          <span>{label}</span>
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>

              <div className="drawer__foot">
                <Link href="/quote" className="btn btn--primary drawer__cta" onClick={close}>
                  Get a Quote <ArrowRight />
                </Link>
                <div className="drawer__contact">
                  <a href="tel:+14155550148">(415) 555-0148</a>
                  <a href="mailto:hello@dynamicwrapsandtint.com">hello@dynamicwrapsandtint.com</a>
                </div>
                <div className="drawer__meta">Mon–Fri 8:00–18:00 · Novato, CA</div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </header>
  );
}
