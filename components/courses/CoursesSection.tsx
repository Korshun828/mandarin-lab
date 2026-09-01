"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CourseList } from "./CourseList";
import { CoursePreview } from "./CoursePreview";
import { CoursesHeader } from "./CoursesHeader";
import { getCourses, type Course } from "./course-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CoursesSection() {
  const { language, t } = useLanguage();
  const courses = getCourses(language);
  const section = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<Course["id"]>("beginner");
  const activeCourse = courses.find((course) => course.id === activeId) ?? courses[0];

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const entrance = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top 78%", once: true } });
    entrance
      .from(".courses-kicker", { autoAlpha: 0, y: 14, duration: 0.4, ease: "power2.out" })
      .from(".courses-heading-line", { autoAlpha: 0, yPercent: 105, stagger: 0.08, duration: 0.62, ease: "power3.out" }, 0.1)
      .from(".courses-lead", { autoAlpha: 0, y: 16, duration: 0.45, ease: "power2.out" }, 0.46)
      .from(".course-index-row", { autoAlpha: 0, y: 20, stagger: 0.07, duration: 0.48, ease: "power2.out" }, 0.58)
      .from(".courses-preview", { autoAlpha: 0, y: 20, scale: 1.012, duration: 0.62, ease: "power2.out" }, 0.66);
  }, { scope: section });

  return (
    <section className="courses-section" id="courses" ref={section} aria-labelledby="courses-title">
      <div className="courses-shell">
        <CoursesHeader />
        <div className="courses-layout">
          <CourseList courses={courses} activeId={activeId} onActivate={setActiveId} ariaLabel={t.courses.listAria} />
          <CoursePreview course={activeCourse} />
        </div>
      </div>
    </section>
  );
}
