"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { PrimaryCTA } from "./PrimaryCTA";

export function HeroTagline() {
  const { t } = useLanguage();
  return (
    <div className="hero-tagline" data-intro="tagline">
      <h2>{t.hero.tagline[0]}<br />{t.hero.tagline[1]}</h2>
      <p>{t.hero.description[0]}<br />{t.hero.description[1]}</p>
      <PrimaryCTA />
    </div>
  );
}
