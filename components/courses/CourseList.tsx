import type { Course } from "./course-data";
import { CourseRow } from "./CourseRow";

type CourseListProps = {
  courses: Course[];
  activeId: Course["id"];
  onActivate: (id: Course["id"]) => void;
  ariaLabel: string;
};

export function CourseList({ courses, activeId, onActivate, ariaLabel }: CourseListProps) {
  return (
    <div className="course-index" role="list" aria-label={ariaLabel}>
      {courses.map((course) => (
        <div role="listitem" key={course.id}>
          <CourseRow course={course} active={course.id === activeId} onActivate={onActivate} />
        </div>
      ))}
    </div>
  );
}
