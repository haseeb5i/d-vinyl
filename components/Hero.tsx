"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CDN } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6745dcc560869535bc3e0842/66c669df-1afd-4294-b62e-09316bdfd32b/Tesla%2BCyber%2BTruck%2BCamouflage%2BWrap-min.jpg",
    alt: "Tesla Cybertruck Camouflage Wrap",
  },
  {
    src: `${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`,
    alt: "Rocky Hill Electric Commercial Fleet Wrap",
  },
  {
    src: `${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`,
    alt: "Tesla Model 3 Red Color Change Wrap",
  },
  {
    src: `${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`,
    alt: "Porsche Paint Protection Film and Window Tint",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="hero__swiper"
          aria-hidden="true"
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={slide.src}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__inner">
        <div className="hero__body">
          <div className="hero__copy">
            <div className="hero__eyebrow">Dynamic Wraps &amp; Tint · Est. Marin County</div>
            <h1 className="hero__title">
              <span className="line">Wrap.</span>
              <span className="line"><span className="accent">Tint.</span></span>
              <span className="line"><span className="outlined">Protect.</span></span>
            </h1>
            <p className="hero__sub">
              Premium automotive and commercial wraps, ceramic window tint,
              and XPEL paint protection film — designed, printed and installed under one roof
              in Marin County. Built for builders, fleets, Teslas and weekend toys alike.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">Start a Project <ArrowRight size={14} strokeWidth={2.5} /></a>
              <a href="#services" className="btn btn--ghost">See Services</a>
            </div>
          </div>
        </div>

        <div className="hero__stats" data-reveal-stagger>
          <div>
            <div className="stat__num">100<span className="unit">+</span></div>
            <div className="stat__lbl">Wrap Colors Available</div>
          </div>
          <div>
            <div className="stat__num">4</div>
            <div className="stat__lbl">Core Service Lines</div>
          </div>
          <div>
            <div className="stat__num">10<span className="unit">yr</span></div>
            <div className="stat__lbl">XPEL PPF Warranty</div>
          </div>
          <div>
            <div className="stat__num">1<span className="unit">/1</span></div>
            <div className="stat__lbl">In-House Design + Install</div>
          </div>
        </div>
      </div>

      <div className="hero__xpel">
        <div className="b1">XPEL</div>
        <div className="b2">Authorized Installer</div>
      </div>
    </section>
  );
}
