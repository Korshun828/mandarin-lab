"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "./scroll-to-section";

export function PrimaryCTA() {
  const { t } = useLanguage();
  return (
    <div className="hero-cta-group">
      <motion.a
        className="primary-cta"
        href="#courses"
        whileTap={{ scale: 0.985 }}
        aria-label={t.hero.primaryAria}
      >
        <span>{t.hero.primary}</span>
        <span className="cta-arrow" aria-hidden="true">↗</span>
      </motion.a>
      <a className="hero-secondary-cta" href="#experience" onClick={(event) => scrollToSection(event, "experience")}>{t.hero.secondary} <span aria-hidden="true">→</span></a>
    </div>
  );
}
