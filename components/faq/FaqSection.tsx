"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setOpenIndex((current) => current === index ? null : index);
  }

  return (
    <section className={styles.section} id="faq" data-language={language} aria-labelledby="faq-title">
      <div className={styles.shell}>
        <div className={styles.layout}>
          <header className={styles.header}>
            <p className={styles.kicker}>{t.faq.kicker}</p>
            <h2 className={styles.heading} id="faq-title">
              <span>{t.faq.heading[0]}</span>
              <span>{t.faq.heading[1]}</span>
            </h2>
            <p className={styles.supporting}>{t.faq.supporting}</p>
          </header>

          <ol className={styles.accordion} aria-label={t.faq.aria}>
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const number = String(index + 1).padStart(2, "0");
              const triggerId = `faq-trigger-${number}`;
              const panelId = `faq-panel-${number}`;

              return (
                <li key={number} data-open={isOpen ? "true" : undefined}>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      toggleItem(index);
                    }}
                  >
                    <span className={styles.number}>{number}</span>
                    <span className={styles.question}>{item.question}</span>
                    <span className={styles.indicator} aria-hidden="true"><i /><i /></span>
                  </button>

                  <div
                    className={styles.panel}
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.panelInner}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
