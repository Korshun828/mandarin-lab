"use client";

import { getCourseBySlug, type CourseId } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";
import { CourseCTA } from "./CourseCTA";
import { CourseCurriculum } from "./CourseCurriculum";
import { CourseFacts } from "./CourseFacts";
import { CourseFormat } from "./CourseFormat";
import { CourseHero } from "./CourseHero";
import { CourseIntro } from "./CourseIntro";
import { CourseLearning } from "./CourseLearning";
import { CourseMicroLesson } from "./CourseMicroLesson";
import { CourseOutcomes } from "./CourseOutcomes";
import { CoursePageMotion } from "./CoursePageMotion";
import { CourseVisualStory } from "./CourseVisualStory";
import { RelatedCourses } from "./RelatedCourses";

export function CoursePageView({ courseId }: { courseId: CourseId }) {
  const { language } = useLanguage();
  const course = getCourseBySlug(courseId, language);
  if (!course) return null;

  return (
    <main className={`detail-page detail-page-${course.id}`}>
      <CoursePageMotion />
      <CourseHero course={course} />
      <CourseFacts course={course} />
      <CourseIntro course={course} />
      <CourseVisualStory course={course} />
      <CourseLearning course={course} />
      <CourseMicroLesson course={course} />
      <CourseCurriculum course={course} />
      <CourseOutcomes course={course} />
      <CourseFormat />
      <CourseCTA course={course} />
      <RelatedCourses course={course} />
    </main>
  );
}
