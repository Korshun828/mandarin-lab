import type { MouseEvent } from "react";
import type { Course } from "./course-data";

type CourseRowProps = {
  course: Course;
  active: boolean;
  onActivate: (id: Course["id"]) => void;
};

export function CourseRow({ course, active, onActivate }: CourseRowProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const activationFirst = window.matchMedia("(hover: none), (max-width: 899px)").matches;
    if (activationFirst && !active) {
      event.preventDefault();
      onActivate(course.id);
    }
  };

  return (
    <a
      className="course-index-row"
      data-active={active ? "true" : "false"}
      href={course.href}
      onClick={handleClick}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) {
          window.requestAnimationFrame(() => onActivate(course.id));
        }
      }}
      onMouseEnter={() => {
        if (window.matchMedia("(min-width: 900px) and (hover: hover)").matches) onActivate(course.id);
      }}
      aria-current={active ? "true" : undefined}
    >
      <span className="course-row-indicator" aria-hidden="true" />
      <span className="course-row-number">{course.number}</span>
      <span className="course-row-title">{course.title}</span>
      <span className="course-row-chinese" lang="zh-Hans">{course.chinese}</span>
      <span className="course-row-description">{course.description}</span>
      <span className="course-row-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
