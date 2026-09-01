"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "../scroll-to-section";
import { MethodStep } from "./MethodStep";

export function MethodSection() {
  const { language, t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const methodSteps = [
    { number: "01", ...t.method.steps[0], chinese: <><span>听</span><i>+</i><span>懂</span></> },
    { number: "02", ...t.method.steps[1], chinese: <span>说</span> },
    { number: "03", ...t.method.steps[2], chinese: <span>用</span> },
  ];

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
      }, 950);
      observer.disconnect();
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);

  return (
    <section className="method-section" id="method" ref={section} data-language={language} aria-labelledby="method-title">
      <div className="method-shell">
        <div className="method-layout">
          <header className="method-header">
            <p className="method-kicker">{t.method.kicker}</p>
            <h2 className="method-heading" id="method-title">
              {t.method.heading.map((line) => <span className="method-heading-line" key={line}>{line}</span>)}
            </h2>
          </header>

          <ol className="method-steps" aria-label={t.method.aria}>
            {methodSteps.map((step) => <MethodStep key={step.number} {...step} />)}
          </ol>
        </div>

        <div className="method-footer">
          <p className="method-tagline">{t.method.tagline} <strong>{t.method.taglineStrong}</strong></p>
          <a className="method-action" href="#experience" onClick={(event) => scrollToSection(event, "experience")}>{t.method.action} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
