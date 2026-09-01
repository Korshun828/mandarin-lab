import Image from "next/image";
import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";
import { CourseNavigation } from "./CourseNavigation";

export function CourseHero({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <header className="detail-hero" id="top">
      <CourseNavigation courseNumber={course.number} />
      <div className="detail-shell detail-hero-grid">
        <div className="detail-hero-copy" data-course-reveal>
          <a className="detail-back-link" href="/#courses">← {t.coursePage.courseIndex}</a>
          <p className="detail-eyebrow">{course.number} / {course.title}</p>
          <h1><span>{course.page.headline[0]}</span><span>{course.page.headline[1]}</span></h1>
          <div className="detail-hero-intro">
            <p className="detail-hero-chinese" lang="zh-Hans">{course.chinese}</p>
            <p>{course.page.positioning}</p>
          </div>
          <a className="detail-primary-cta" href="#course-cta">
            <span>{course.page.ctaLabel}</span><i aria-hidden="true">↗</i>
          </a>
        </div>
        <figure className="detail-hero-image" data-course-reveal>
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            priority
            quality={88}
            sizes="(max-width: 899px) 100vw, 48vw"
            style={{ objectPosition: course.imagePosition }}
          />
          <figcaption><span>Mandarin Lab / {t.hero.city}</span><span>{course.number} / 05</span></figcaption>
        </figure>
      </div>
    </header>
  );
}
