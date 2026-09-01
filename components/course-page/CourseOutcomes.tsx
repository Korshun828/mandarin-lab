import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseOutcomes({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-section detail-outcomes" aria-labelledby="detail-outcomes-title">
      <div className="detail-shell">
        <div className="detail-outcomes-heading" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.outcomesLabel}</p>
          <h2 id="detail-outcomes-title">{t.coursePage.outcomesHeading}<br /><span>{t.coursePage.outcomesAccent}</span></h2>
        </div>
        <ol className="detail-outcomes-list">
          {course.page.outcomes.map((outcome, index) => (
            <li key={outcome} data-course-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{outcome}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
