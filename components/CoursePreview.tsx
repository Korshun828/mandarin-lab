"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function CoursePreview() {
  const { t } = useLanguage();
  return (
    <a className="course-preview" href="#courses" data-intro="course">
      <div className="course-kicker"><span>{t.hero.previewKicker}</span><span>{t.hero.previewLevel}</span></div>
      <p>{t.hero.previewTitle[0]}<br />{t.hero.previewTitle[1]}</p>
      <span className="course-link">{t.hero.previewLink} <i aria-hidden="true">↗</i></span>
    </a>
  );
}
