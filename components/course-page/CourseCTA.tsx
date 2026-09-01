import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseCTA({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-cta" id="course-cta" aria-labelledby="detail-cta-title">
      <div className="detail-shell detail-cta-grid" data-course-reveal>
        <div>
          <p className="detail-section-label">{t.coursePage.beginLabel}</p>
          <h2 id="detail-cta-title">{t.coursePage.ready}</h2>
          <p lang="zh-Hans">{course.page.ctaChinese}</p>
        </div>
        <a href="/#contact"><span>{course.page.ctaLabel}</span><i aria-hidden="true">↗</i></a>
      </div>
    </section>
  );
}
