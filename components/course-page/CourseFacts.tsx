import type { Course } from "@/components/courses/course-data";
import { getCourseFacts } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseFacts({ course }: { course: Course }) {
  const { language, t } = useLanguage();
  return (
    <section className="detail-facts" aria-label={t.coursePage.factsAria}>
      <dl className="detail-shell detail-facts-list" data-course-reveal>
        {getCourseFacts(course, language).map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
