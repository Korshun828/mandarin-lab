"use client";

import { useState } from "react";
import type { Course } from "@/components/courses/course-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CourseMicroLesson({ course }: { course: Course }) {
  const { t } = useLanguage();
  const lesson = course.page.microLesson;
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="detail-micro" aria-labelledby="detail-micro-title">
      <div className="detail-shell detail-micro-grid" data-course-reveal>
        <div className="detail-micro-heading">
          <p className="detail-section-label">{t.coursePage.microLabel}</p>
          <h2 id="detail-micro-title">{t.coursePage.microHeading[0]}<br />{t.coursePage.microHeading[1]}</h2>
          <p>{lesson.label}</p>
        </div>

        {lesson.kind === "reveal" ? (
          <div className="detail-lesson-panel">
            <p className="detail-lesson-chinese" lang="zh-Hans">{lesson.chinese}</p>
            <button
              className="detail-lesson-action"
              type="button"
              aria-expanded={revealed}
              onClick={() => setRevealed((value) => !value)}
            >
              <span>{revealed ? t.coursePage.hideMeaning : t.coursePage.revealMeaning}</span><i aria-hidden="true">{revealed ? "−" : "+"}</i>
            </button>
            <div className="detail-lesson-answer" data-visible={revealed ? "true" : "false"} aria-live="polite">
              <span>{lesson.pinyin}</span>
              <strong>{lesson.translation}</strong>
            </div>
          </div>
        ) : (
          <div className="detail-lesson-panel detail-quiz">
            <p className="detail-quiz-question" lang="zh-Hans">{lesson.question}</p>
            <p className="detail-quiz-pinyin">{lesson.pinyin}</p>
            <div className="detail-quiz-options" role="group" aria-label={t.coursePage.chooseAnswer}>
              {lesson.options.map((option, index) => {
                const isCorrect = index === lesson.correctIndex;
                const state = selected === null ? "idle" : isCorrect ? "correct" : selected === index ? "incorrect" : "idle";
                return (
                  <button key={option} type="button" data-state={state} aria-pressed={selected === index} onClick={() => setSelected(index)}>
                    <span>{String.fromCharCode(65 + index)}</span><strong lang="zh-Hans">{option}</strong>
                  </button>
                );
              })}
            </div>
            <p className="detail-quiz-result" aria-live="polite">
              {selected === null ? t.coursePage.selectWord : lesson.explanation}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
