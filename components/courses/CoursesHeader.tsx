"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function CoursesHeader() {
  const { t } = useLanguage();
  return (
    <header className="courses-header">
      <p className="courses-kicker">{t.courses.kicker}</p>
      <h2 className="courses-heading" id="courses-title">
        <span className="courses-heading-line">{t.courses.heading[0]}</span>
        <span className="courses-heading-line">{t.courses.heading[1]}</span>
      </h2>
      <p className="courses-lead">{t.courses.lead[0]}<br />{t.courses.lead[1]}</p>
    </header>
  );
}
