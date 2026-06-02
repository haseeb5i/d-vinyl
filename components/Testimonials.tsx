"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/data";
import React from "react";

function Star() {
  return <span>★</span>;
}

export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="section__header" data-reveal>
        <div>
          <div className="eyebrow"><span className="dot" />Reviews · Marin County</div>
          <h2 className="section__title">
            What Clients <br />
            <span className="accent">Drive Away</span> Saying.
          </h2>
        </div>
        <p className="section__desc">
          Plumbers, restaurateurs, Tesla owners and Porsche enthusiasts.
          Different vehicles, same standard — work that holds up to the daily,
          and to the photos.
        </p>
      </div>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{ 741: { slidesPerView: 2, spaceBetween: 24 } }}
        a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
        className="testimonials-swiper"
        data-reveal
      >
        {TESTIMONIALS.map((t, i) => (
          <SwiperSlide key={i}>
            <article className="tcard">
              <div className="tcard__stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="tcard__quote">
                &ldquo;
                {t.quote.map((q, j) =>
                  typeof q === "string" ? (
                    <React.Fragment key={j}>{q}</React.Fragment>
                  ) : "hl" in q ? (
                    <span className="hl" key={j}>{q.hl}</span>
                  ) : (
                    <span className="hl-sky" key={j}>{q.hlSky}</span>
                  )
                )}
                &rdquo;
              </p>
              <p className="tcard__body">{t.body}</p>
              <div className="tcard__foot">
                <div className="tcard__who">
                  <div className="tcard__avatar">{t.initials}</div>
                  <div>
                    <div className="tcard__name">{t.name}</div>
                    <div className="tcard__role">{t.role}</div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
