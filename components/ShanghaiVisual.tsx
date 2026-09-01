"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { CoursePreview } from "./CoursePreview";

export function ShanghaiVisual() {
  const { t } = useLanguage();
  return (
    <figure className="city-panel">
      <div className="city-image-wrap" data-intro="city">
        <Image
          className="city-image"
          src="/shanghai-pudong-night.jpg"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="(max-width: 959px) 94vw, 100vw"
        />
        <CoursePreview />
      </div>
      <figcaption className="city-caption">
        <span>{t.footer.location}</span>
        <span>31.2304° N / 121.4737° E</span>
      </figcaption>
    </figure>
  );
}
