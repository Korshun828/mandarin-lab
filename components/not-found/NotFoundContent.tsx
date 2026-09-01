"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./NotFoundContent.module.css";

export function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <main className={styles.page} aria-labelledby="not-found-title" data-not-found="true">
      <Link className={styles.brand} href="/">
        MANDARIN LAB
      </Link>

      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title} id="not-found-title">
          {t.notFound.title}
        </h1>
        <Link className={styles.action} href="/">
          {t.notFound.action} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
