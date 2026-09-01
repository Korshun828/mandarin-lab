"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={mobile ? "language-switcher language-switcher-mobile" : "language-switcher"} aria-label={t.language.label}>
      {mobile && <span className="language-switcher-label">{t.language.label}</span>}
      <div className="language-options">
        <button type="button" data-active={language === "ru" ? "true" : undefined} aria-pressed={language === "ru"} onClick={() => setLanguage("ru")}>{t.language.russian}</button>
        <i aria-hidden="true" />
        <button type="button" data-active={language === "en" ? "true" : undefined} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>{t.language.english}</button>
      </div>
    </div>
  );
}
