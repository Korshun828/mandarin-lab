import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { CoursesSection } from "@/components/courses/CoursesSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { MethodSection } from "@/components/method/MethodSection";
import { ResultsReviewsSection } from "@/components/results/ResultsReviewsSection";
import { getAbsoluteUrl } from "@/lib/site-url";

const homepageTitle = "MANDARIN LAB — онлайн-курсы китайского языка";
const homepageDescription = "Онлайн-курсы китайского языка для жизни, учёбы, HSK, путешествий и бизнеса.";
const homepageUrl = getAbsoluteUrl("/");
const socialImageUrl = getAbsoluteUrl("/social/mandarin-lab-og.png");
const socialImage = socialImageUrl ? {
  url: socialImageUrl,
  width: 1729,
  height: 910,
  alt: "MANDARIN LAB — Learn Chinese. Live China. Shanghai skyline at night.",
} : undefined;

export const metadata: Metadata = {
  alternates: homepageUrl ? { canonical: homepageUrl } : undefined,
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    type: "website",
    images: socialImage ? [socialImage] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: socialImage ? [socialImage] : undefined,
  },
};

const structuredData = homepageUrl ? [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MANDARIN LAB",
    url: homepageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MANDARIN LAB",
    url: homepageUrl,
    logo: getAbsoluteUrl("/icons/icon-512x512.png"),
  },
] : undefined;

export default function Home() {
  return (
    <main>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <Hero />
      <CoursesSection />
      <MethodSection />
      <ExperienceSection />
      <AboutSection />
      <ResultsReviewsSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
