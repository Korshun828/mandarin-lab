import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseCurriculum({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-section detail-roadmap" aria-labelledby="detail-roadmap-title">
      <div className="detail-shell">
        <div className="detail-heading-row detail-heading-row-dark" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.roadmapLabel}</p>
          <h2 id="detail-roadmap-title">{t.coursePage.roadmapHeading}</h2>
          <p>{t.coursePage.roadmapLead}</p>
        </div>
        <ol className="detail-roadmap-list">
          {course.page.curriculum.map((step) => (
            <li key={step.number} data-course-reveal>
              <span>{step.number}</span>
              <div className="detail-roadmap-line" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
