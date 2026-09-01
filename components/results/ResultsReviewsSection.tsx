"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "../scroll-to-section";
import styles from "./ResultsReviewsSection.module.css";

export function ResultsReviewsSection() {
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
      }, 1700);
      observer.disconnect();
    }, { threshold: 0.08 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);

  return (
    <section className={styles.section} id="results" ref={section} data-language={language} aria-labelledby="results-reviews-title">
      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.kicker} data-results-reveal="kicker">{t.results.kicker}</p>
          <div className={styles.headerLayout}>
            <h2 className={styles.heading} id="results-reviews-title" data-results-reveal="heading">
              <span>{t.results.heading[0]}</span>
              <span>{t.results.heading[1]}</span>
            </h2>
            <p className={styles.lead} data-results-reveal="lead">
              {t.results.lead}
            </p>
          </div>
        </header>

        <div className={styles.resultsHeader} data-results-reveal="results-label">
          <p>{t.results.resultsLabel}</p>
          <p>{t.results.resultsNote}</p>
        </div>

        <ol className={styles.results} aria-label={t.results.resultsAria}>
          {t.results.items.map((result, index) => (
            <li key={index} tabIndex={0} data-result-item>
              <p className={styles.resultNumber}>0{index + 1}</p>
              <div className={styles.resultPath}>
                <span>{result.from}</span>
                <i aria-hidden="true">→</i>
                <strong>{result.to}</strong>
              </div>
              <p className={styles.resultDescription}>{result.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.statement} data-results-reveal="statement">
          <div className={styles.chineseDetail}>
            <span lang="zh-Hans">一步一步</span>
            <small>yí bù yí bù / {t.results.chineseMeaning}</small>
          </div>
          <p>{t.results.statement[0]}<br />{t.results.statement[1]}</p>
        </div>

        <div className={styles.reviewsHeader} data-results-reveal="reviews-header">
          <h3>{t.results.voices}</h3>
          <div className={styles.disclaimer} role="note" aria-label={t.results.disclaimerAria}>
            <strong>{t.results.sampleLabel}</strong>
            <span>{t.results.disclaimer}</span>
          </div>
        </div>

        <ol className={styles.reviews} aria-label={t.results.reviewsAria}>
          {t.results.reviews.map((review, index) => (
            <li key={review.name} tabIndex={0} data-review-item>
              <article className={styles.review}>
                <p className={styles.reviewIndex}>0{index + 1}</p>
                <div className={styles.reviewMeta}>
                  <p>{review.name}</p>
                  <p>{review.course}</p>
                </div>
                <blockquote>
                  <p>“{review.quote}”</p>
                </blockquote>
              </article>
            </li>
          ))}
        </ol>

        <footer className={styles.footer} data-results-reveal="cta">
          <a className={styles.primaryCta} href="#courses" onClick={(event) => scrollToSection(event, "courses")}>
            {t.results.primaryCta} <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.secondaryCta} href="#experience" onClick={(event) => scrollToSection(event, "experience")}>
            {t.results.secondaryCta} <span aria-hidden="true">→</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
