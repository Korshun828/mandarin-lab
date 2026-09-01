import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseIntro({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-section detail-intro" aria-labelledby="detail-audience-title">
      <div className="detail-shell detail-intro-grid" data-course-reveal>
        <p className="detail-section-label">{t.coursePage.introLabel}</p>
        <div>
          <h2 id="detail-audience-title">{t.coursePage.introHeading[0]}<br />{t.coursePage.introHeading[1]}</h2>
          <p className="detail-intro-copy">{course.page.audience}</p>
        </div>
        <div className="detail-chinese-words" aria-label={t.coursePage.vocabularyAria}>
          {course.page.chineseWords.map((word) => <span key={word} lang="zh-Hans">{word}</span>)}
        </div>
      </div>
    </section>
  );
}
