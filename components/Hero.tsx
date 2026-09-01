"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { HeroTagline } from "./HeroTagline";
import { Navbar } from "./Navbar";
import { ShanghaiVisual } from "./ShanghaiVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function LetterLine({ children, className }: { children: string; className: string }) {
  return (
    <span className={className} aria-label={children}>
      {[...children].map((letter, index) => (
        <span className="title-letter" aria-hidden="true" key={`${letter}-${index}`}>{letter}</span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const scope = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const heroFrame = frame.current;
    if (!heroFrame) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set("[data-intro], .title-letter", { autoAlpha: 1, clearProps: "transform,filter,clipPath" });
      return;
    }

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(heroFrame, { autoAlpha: 0, clipPath: "inset(2% 2% 2% 2% round 24px)", duration: 0.32 })
      .from("[data-intro='city']", { autoAlpha: 0, scale: 1.02, filter: "blur(12px)", duration: 0.95 }, 0.3)
      .from("[data-intro='nav']", { autoAlpha: 0, y: -8, duration: 0.36 }, 0.4)
      .from(".editorial-brand .title-letter", { autoAlpha: 0, yPercent: 105, stagger: 0.045, duration: 0.64 }, 0.66)
      .from("[data-intro='location']", { autoAlpha: 0, y: 8, duration: 0.42 }, 1.05)
      .from("[data-intro='tagline'] > *", { autoAlpha: 0, y: 14, stagger: 0.09, duration: 0.5 }, 1.16)
      .from("[data-intro='course'] > *", { autoAlpha: 0, y: 10, stagger: 0.05, duration: 0.4 }, 1.6);
  }, { scope });

  useGSAP(() => {
    const root = scope.current;
    const heroFrame = frame.current;
    if (!root || !heroFrame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 960px)", () => {
      const scroll = gsap.timeline({
        defaults: { ease: "none", overwrite: "auto" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.4}`,
          pin: heroFrame,
          pinSpacing: true,
          scrub: 1.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: [0, 0.53, 0.64, 0.82, 1],
            duration: { min: 0.16, max: 0.4 },
            delay: 0.18,
            ease: "power1.inOut",
            directional: false,
            inertia: false,
          },
        },
      });

      scroll
        // State 1 — the panel holds while Shanghai already exists behind it.
        .to({}, { duration: 3 })
        // State 2 — move one physical panel away and reveal the stable city.
        .to(".editorial-panel", { xPercent: -112, duration: 2.3, ease: "power1.inOut" }, 3)
        .to(".editorial-panel-content", { opacity: 0.32, duration: 1.25, ease: "power1.in" }, 3.05)
        .to(".city-image", { scale: 1.025, duration: 2.3, ease: "power1.inOut" }, 3)
        .to(".course-preview", { autoAlpha: 0, y: -10, duration: 0.58 }, 3.25)
        .to(".brand", { color: "#F4F1EA", duration: 0.75 }, 3.7)
        // State 3 — a short uninterrupted full-Shanghai hold.
        .to({}, { duration: 0.5 }, 5.3)
        // State 4 — Chinese message over the exact same image.
        .fromTo(".night-message-one .night-message-content",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out", immediateRender: false },
          5.8,
        )
        .to(".night-message-one .night-message-content", { autoAlpha: 1, duration: 0.95 }, 6.2)
        .to(".night-message-one .night-message-content", { autoAlpha: 0, y: -16, duration: 0.38, ease: "power2.in" }, 7.15)
        // State 5 — final message, still over the same continuous camera shot.
        .fromTo(".night-message-two .night-message-content",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out", immediateRender: false },
          7.58,
        )
        .to(".night-message-two .night-message-content", { autoAlpha: 1, duration: 2 }, 8);
    });

    return () => mm.revert();
  }, { scope });

  return (
    <section className="hero-scroll" ref={scope} id="top">
      <div className="hero-frame" ref={frame}>
        <ShanghaiVisual />
        <div className="editorial-panel">
          <div className="editorial-panel-content">
            <div className="editorial-brand">
              <h1>
                <LetterLine className="title-mandarin">MANDARIN</LetterLine>
                <LetterLine className="title-lab">LAB</LetterLine>
              </h1>
              <div className="city-label" data-intro="location">
                <span lang="zh-Hans">上海</span>
                <i aria-hidden="true">/</i>
                <em>{t.hero.city}</em>
              </div>
            </div>
            <HeroTagline />
          </div>
        </div>
        <Navbar />
        <div className="night-message night-message-one" aria-hidden="true">
          <div className="night-message-content">
            <strong lang="zh-Hans">不只是学中文</strong>
            <span>{t.hero.cinematicSubtitle}</span>
          </div>
        </div>
        <div className="night-message night-message-two" aria-hidden="true">
          <div className="night-message-content">
            <strong>{t.hero.cinematicFinal}</strong>
            <span>{t.hero.city} / 31.2304° N</span>
          </div>
        </div>
      </div>
    </section>
  );
}
