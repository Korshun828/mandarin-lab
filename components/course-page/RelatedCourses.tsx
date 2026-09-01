import type { Course } from "@/components/courses/course-data";
import { getRelatedCourses } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function RelatedCourses({ course }: { course: Course }) {
  const { language, t } = useLanguage();
  const related = getRelatedCourses(course, language);

  return (
    <aside className="detail-related" aria-labelledby="detail-related-title">
      <div className="detail-shell">
        <div className="detail-related-heading" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.otherLabel}</p>
          <h2 id="detail-related-title">{t.coursePage.otherHeading}</h2>
        </div>
        <div className="detail-related-links">
          {related.map((item) => (
            <a key={item.id} href={item.href} data-course-reveal>
              <span className="detail-related-number">{item.number}</span>
              <span className="detail-related-title">{item.title}</span>
              <span className="detail-related-chinese" lang="zh-Hans">{item.chinese}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <footer className="detail-footer">
          <a href="/">Mandarin Lab</a><span>{t.coursePage.footerLocation}</span><span>{t.coursePage.footerTagline}</span>
        </footer>
      </div>
    </aside>
  );
}
