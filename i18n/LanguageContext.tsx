"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getCourseBySlug } from "@/components/courses/course-data";
import { en } from "./en";
import { ru } from "./ru";
import { LANGUAGE_STORAGE_KEY, type Language } from "./types";

const dictionaries = { en, ru };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof en | typeof ru;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru");
  const pathname = usePathname();

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === "en" || saved === "ru") setLanguageState(saved);
  }, []);

  useEffect(() => {
    const applyLocale = () => {
      document.documentElement.lang = language;
      document.documentElement.dataset.language = language;

      const slug = pathname.match(/^\/courses\/([^/]+)/)?.[1];
      const course = slug ? getCourseBySlug(slug, language) : undefined;
      const dictionary = dictionaries[language];
      const isNotFound = document.querySelector('[data-not-found="true"]');
      document.title = isNotFound ? "404 — MANDARIN LAB" : course?.page.seoTitle ?? dictionary.meta.homeTitle;

      let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!description) {
        description = document.createElement("meta");
        description.name = "description";
        document.head.appendChild(description);
      }
      description.content = course?.page.seoDescription ?? dictionary.meta.homeDescription;
    };

    applyLocale();
    const settleTimer = window.setTimeout(applyLocale, 300);
    return () => window.clearTimeout(settleTimer);
  }, [language, pathname]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  const value = useMemo(() => ({ language, setLanguage, t: dictionaries[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
