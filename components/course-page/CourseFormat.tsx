import { getCourseFormat, getLessonMethod } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseFormat() {
  const { language, t } = useLanguage();
  const format = getCourseFormat(language);
  const lessonMethod = getLessonMethod(language);
  const practicalDetails = [format.format, format.lesson, format.frequency, format.program, format.language]
    .map((value, index) => ({ label: t.coursePage.formatLabels[index], value }));
  return (
    <section className="detail-section detail-format" aria-labelledby="detail-format-title">
      <div className="detail-shell">
        <div className="detail-heading-row" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.methodLabel}</p>
          <h2 id="detail-format-title">{t.coursePage.methodHeading}</h2>
          <p>{t.coursePage.methodLead}</p>
        </div>
        <ol className="detail-method-list">
          {lessonMethod.map((item) => (
            <li key={item.number} data-course-reveal>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p>
            </li>
          ))}
        </ol>
        <dl className="detail-format-strip" data-course-reveal>
          {practicalDetails.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
