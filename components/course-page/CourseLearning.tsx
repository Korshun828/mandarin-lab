import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseLearning({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-section detail-learning" aria-labelledby="detail-learning-title">
      <div className="detail-shell">
        <div className="detail-heading-row" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.learningLabel}</p>
          <h2 id="detail-learning-title">{t.coursePage.learningHeading}</h2>
          <p>{t.coursePage.learningLead}</p>
        </div>
        <ol className="detail-learning-list">
          {course.page.learning.map((item, index) => (
            <li key={item.title} data-course-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
