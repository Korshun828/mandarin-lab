import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoursePageView } from "@/components/course-page/CoursePageView";
import { courseIds, getCourseBySlug, type CourseId } from "@/components/courses/course-data";
import { getAbsoluteUrl } from "@/lib/site-url";

type CourseRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CourseRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug, "ru");

  if (!course) return {};

  const canonical = getAbsoluteUrl(`/courses/${slug}`);

  return {
    title: course.page.seoTitle,
    description: course.page.seoDescription,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: course.page.seoTitle,
      description: course.page.seoDescription,
    },
  };
}

export default async function CourseRoute({ params }: CourseRouteProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug, "ru");

  if (!course) notFound();

  return <CoursePageView courseId={course.id as CourseId} />;
}
