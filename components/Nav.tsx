"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Drawer } from "vaul";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CONTACT } from "@/lib/constants";

const NAV_DROPDOWN = [
    { href: "/commercial-wraps", label: "Commercial Wraps" },
    { href: "/color-change", label: "Color Change" },
    { href: "/window-tint", label: "Window Tinting" },
    { href: "/paint-protection", label: "Paint Protection Film" },
];

const NAV_ITEMS: { key: string; label: string; href?: string }[] = [
    { key: "wall", label: "Wall Graphics", href: "/wall-graphics" },
    { key: "about", label: "About Us", href: "/about" },
    { key: "contact", label: "Contact", href: "/contact" },
    { key: "gallery", label: "Gallery", href: "/gallery" },
    { key: "blog", label: "Blog", href: "/blog" },
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
        label: "Wall Graphics",
        items: [
            ["/wall-graphics", "Wall Graphics"],
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
                    <Image src="/logo.png" alt="Dynamic Wraps & Tint" width={220} height={66} style={{ height: 80, width: "auto" }} />
                </Link>

                <NavigationMenu.Root className="navdd-root">
                    <NavigationMenu.List className="navdd-list">
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="navdd__trigger">
                                Vehicles Wraps
                                <ChevronDown className="navdd__chev" size={12} strokeWidth={2} />
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

                <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__social"
                    aria-label="Instagram"
                >
                    <InstagramIcon size={18} />
                </a>

                <Link href="/quote" className="nav__cta nav__cta--desktop">
                    Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
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
                                    <Image src="/logo.png" alt="" width={220} height={66} style={{ height: 66, width: "auto" }} />
                                </div>
                                <button className="drawer__close" onClick={close} aria-label="Close menu">
                                    <X size={22} strokeWidth={2} />
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
                                                    <ArrowRight size={14} strokeWidth={2.5} />
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                ))}
                            </div>

                            <div className="drawer__foot">
                                <Link href="/quote" className="btn btn--primary drawer__cta" onClick={close}>
                                    Get a Quote <ArrowRight size={14} strokeWidth={2.5} />
                                </Link>
                                <div className="drawer__contact">
                                    <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
                                    <a href={CONTACT.emailMailto}>{CONTACT.email}</a>
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
