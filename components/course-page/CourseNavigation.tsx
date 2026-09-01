"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const navigation = [
  { key: "main", href: "/" },
  { key: "courses", href: "/#courses" },
  { key: "method", href: "/#method" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/#contact" },
] as const;

export function CourseNavigation({ courseNumber }: { courseNumber: string }) {
  const { language, t } = useLanguage();
  return (
    <nav className="detail-nav" data-language={language} aria-label={t.coursePage.navigationAria}>
      <a className="detail-nav-brand" href="/">Mandarin Lab</a>
      <div className="detail-nav-links">
        {navigation.map((item) => <a key={item.key} href={item.href}>{t.nav[item.key]}</a>)}
      </div>
      <div className="detail-nav-end"><span className="detail-nav-index">{t.coursePage.course} {courseNumber} / 05</span><LanguageSwitcher /></div>
      <details className="detail-nav-menu">
        <summary>{t.coursePage.menu} <span aria-hidden="true">+</span></summary>
        <div>
          {navigation.map((item) => <a key={item.key} href={item.href}>{t.nav[item.key]}</a>)}
          <LanguageSwitcher mobile />
        </div>
      </details>
    </nav>
  );
}
