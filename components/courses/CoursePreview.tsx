"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Course } from "./course-data";

export function CoursePreview({ course }: { course: Course }) {
  const { t } = useLanguage();
  return (
    <figure className="courses-preview" aria-live="polite">
      <div className="courses-preview-viewport">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            className="courses-preview-media"
            key={course.id}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={course.image}
              alt={course.imageAlt}
              fill
              priority={course.id === "beginner"}
              quality={88}
              sizes="(max-width: 899px) 92vw, (max-width: 1199px) 40vw, 34vw"
              style={{ objectPosition: course.imagePosition }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="courses-preview-shade" aria-hidden="true" />
        <figcaption className="courses-preview-caption">
          <span>{course.number} / {course.title}</span>
          <span lang="zh-Hans">{course.chinese}</span>
        </figcaption>
      </div>
      <div className="courses-preview-meta"><span>{t.courses.direction}</span><span>Mandarin Lab®</span></div>
    </figure>
  );
}
