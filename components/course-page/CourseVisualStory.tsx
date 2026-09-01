import Image from "next/image";
import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseVisualStory({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <section className="detail-story" aria-label={t.coursePage.visualAria}>
      <div className="detail-shell detail-story-grid">
        <figure className="detail-story-image" data-course-reveal>
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            quality={84}
            sizes="(max-width: 899px) 100vw, 62vw"
            style={{ objectPosition: course.secondaryImagePosition }}
          />
        </figure>
        <div className="detail-story-copy" data-course-reveal>
          <p className="detail-section-label">{t.coursePage.perspectiveLabel}</p>
          <h2>
            {course.page.visualStatement.map((line) => <span key={line}>{line}</span>)}
          </h2>
          <span className="detail-story-mark" lang="zh-Hans">{course.chinese}</span>
        </div>
      </div>
    </section>
  );
}
