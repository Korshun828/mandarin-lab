"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/components/scroll-to-section";
import styles from "./SiteFooter.module.css";

const navigation = [
  { key: "main", target: "top" },
  { key: "courses", target: "courses" },
  { key: "method", target: "method" },
  { key: "experience", target: "experience" },
  { key: "about", target: "about" },
  { key: "results", target: "results" },
  { key: "faq", target: "faq" },
  { key: "contact", target: "contact" },
] as const;

type ConnectLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  target?: string;
};

const connect: readonly ConnectLink[] = [
  { label: "Telegram", value: "@rocket_man828", href: "https://t.me/rocket_man828", external: true },
  { label: "WeChat", value: "rocketman828", href: "#contact", target: "contact" },
  { label: "Email", value: "MandarinLAB1@gmail.com", href: "mailto:MandarinLAB1@gmail.com" },
  { label: "Instagram", value: "@Korshun_828", href: "https://www.instagram.com/korshun_828/", external: true },
];

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function SiteFooter() {
  const { language, t } = useLanguage();
  function handleSectionLink(event: MouseEvent<HTMLAnchorElement>, target: string) {
    scrollToSection(event, target);
  }

  return (
    <motion.footer
      className={styles.footer}
      data-language={language}
      aria-label={t.footer.aria}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ staggerChildren: 0.08 }}
    >
      <div className={styles.shell}>
        <motion.div className={styles.wordmark} variants={reveal} transition={{ duration: 0.46, ease: "easeOut" }} aria-label="Mandarin Lab">
          <span>Mandarin</span><span> Lab</span>
        </motion.div>

        <motion.nav className={styles.navigation} aria-label={t.footer.navAria} variants={reveal} transition={{ duration: 0.4, ease: "easeOut" }}>
          <span className={styles.rowLabel}>{t.footer.navigate}</span>
          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <a key={item.target} href={`#${item.target}`} onClick={(event) => handleSectionLink(event, item.target)}>
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        </motion.nav>

        <motion.div className={styles.middle} variants={reveal} transition={{ duration: 0.4, ease: "easeOut" }}>
          <div className={styles.brandNote}>
            <p>{t.footer.tagline[0]}<br />{t.footer.tagline[1]}</p>
            <div className={styles.chineseBrand}>
              <span lang="zh-Hans">中文，从这里开始。</span>
              <small>ZHŌNGWÉN, CÓNG ZHÈLǏ KĀISHǏ.</small>
            </div>
          </div>

          <div className={styles.connectBlock}>
            <p className={styles.blockLabel}>{t.footer.connect}</p>
            <div className={styles.connectLinks}>
              {connect.map((item) => {
                const clickTarget = item.target;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={clickTarget ? (event) => handleSectionLink(event, clickTarget) : undefined}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.location}>
            <p>{t.footer.location}</p>
            <span>31.2304° N</span>
            <span>121.4737° E</span>
          </div>
        </motion.div>

        <motion.div className={styles.meta} variants={reveal} transition={{ duration: 0.38, ease: "easeOut" }}>
          <span>{t.footer.copyright}</span>
          <span>{t.footer.meta}</span>
          <a href="#top" onClick={(event) => handleSectionLink(event, "top")}>{t.footer.backTop} <i aria-hidden="true">↑</i></a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
