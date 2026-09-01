"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "../scroll-to-section";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const { language, t } = useLanguage();
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = section.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.dataset.motion = "ready";
    let settleTimer: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      element.dataset.entered = "true";
      settleTimer = window.setTimeout(() => {
        delete element.dataset.motion;
        delete element.dataset.entered;
      }, 1300);
      observer.disconnect();
    }, { threshold: 0.12 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);

  return (
    <section className={styles.section} id="about" ref={section} data-language={language} aria-labelledby="about-title">
      <div className={styles.shell}>
        <div className={styles.layout}>
          <header className={styles.headingGroup}>
            <p className={styles.kicker} data-about-reveal="kicker">{t.about.kicker}</p>
            <h2 className={styles.heading} id="about-title" data-about-reveal="heading">
              <span>{t.about.heading[0]}</span>
              <span>{t.about.heading[1]}</span>
            </h2>
          </header>

          <figure className={styles.media} data-about-reveal="photo">
            <Image
              className={styles.image}
              src="/founder/roman-shanghai.jpg"
              alt={t.about.imageAlt}
              fill
              quality={88}
              sizes="(max-width: 899px) 100vw, (max-width: 1099px) 45vw, 48vw"
            />
            <span className={styles.imageIndex} aria-hidden="true">31.2345° N / 121.4907° E</span>
          </figure>

          <div className={styles.details}>
            <div className={styles.intro} data-about-reveal="intro">
              <p className={styles.microLabel}>{t.about.founderLabel}</p>
              <p className={styles.introText}>
                <strong>{t.about.introStrong}</strong> {t.about.intro}
              </p>
            </div>

            <ul className={styles.facts} data-about-reveal="facts" aria-label={t.about.factsAria}>
              {t.about.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>

            <blockquote className={styles.quote} data-about-reveal="quote">
              {t.about.quote}
            </blockquote>

            <div className={styles.closing} data-about-reveal="why">
              <div className={styles.chineseDetail}>
                <span lang="zh-Hans">学以致用</span>
                <small>xué yǐ zhì yòng / {t.about.chineseMeaning}</small>
              </div>

              <div className={styles.why}>
                <p>{t.about.whyLabel}</p>
                <p>{t.about.why}</p>
              </div>
            </div>

            <a
              className={styles.cta}
              href="#courses"
              data-about-reveal="cta"
              onClick={(event) => scrollToSection(event, "courses")}
            >
              {t.about.cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
