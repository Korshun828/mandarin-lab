"use client";

import { FormEvent, useId, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./ExperienceSection.module.css";

type LessonStep = 1 | 2 | 3 | 4;
type RevealLayer = 0 | 1 | 2;

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const [step, setStep] = useState<LessonStep>(1);
  const [revealLayer, setRevealLayer] = useState<RevealLayer>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userName, setUserName] = useState("");
  const inputId = useId();
  const answerIsCorrect = selectedAnswer === 1;

  function restart() {
    setStep(1);
    setRevealLayer(0);
    setSelectedAnswer(null);
    setUserName("");
  }

  function finishLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (userName.trim()) setStep(4);
  }

  return (
    <section className={styles.section} id="experience" data-language={language} aria-labelledby="experience-title">
      <div className={styles.shell}>
        <div className={styles.layout}>
          <header className={styles.header}>
            <p className={styles.kicker}>{t.experience.kicker}</p>
            <h2 className={styles.heading} id="experience-title">
              <span>{t.experience.heading[0]}</span>
              <span>{t.experience.heading[1]}</span>
            </h2>
            <p className={styles.intro}>{t.experience.intro}</p>
          </header>

          <div className={styles.stage}>
            <div className={styles.stageHeader}>
              <span>{t.experience.session}</span>
              <ol className={styles.progress} aria-label={t.experience.progressAria}>
                {[1, 2, 3].map((item) => {
                  const state = step === 4 || item < step ? "complete" : item === step ? "current" : "upcoming";
                  return <li key={item} data-state={state} aria-current={item === step ? "step" : undefined}>0{item}</li>;
                })}
              </ol>
            </div>

            <div className={styles.stageContent} key={`step-${step}`}>
              {step === 1 && (
                <div className={styles.lesson}>
                  <p className={styles.labLabel}>{t.experience.stepCharacter}</p>
                  <p className={styles.character} lang="zh-Hans">你好</p>

                  <div className={styles.layers} aria-live="polite">
                    {revealLayer >= 1 && (
                      <div className={styles.layer}>
                        <span>{t.experience.pinyin}</span><strong>nǐ hǎo</strong>
                      </div>
                    )}
                    {revealLayer >= 2 && (
                      <div className={styles.layer}>
                        <span>{t.experience.meaning}</span><strong>{t.experience.hello}</strong>
                      </div>
                    )}
                  </div>

                  <div className={styles.actions}>
                    {revealLayer === 0 && <button type="button" onClick={() => setRevealLayer(1)}>{t.experience.showPinyin} <span>↗</span></button>}
                    {revealLayer === 1 && <button type="button" onClick={() => setRevealLayer(2)}>{t.experience.showMeaning} <span>↗</span></button>}
                    {revealLayer === 2 && <button type="button" onClick={() => setStep(2)}>{t.experience.continue} <span>↗</span></button>}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className={styles.lesson}>
                  <p className={styles.labLabel}>{t.experience.stepUnderstand}</p>
                  <p className={`${styles.character} ${styles.question}`} lang="zh-Hans">你叫什么名字？</p>
                  <p className={styles.pinyin}>nǐ jiào shénme míngzi?</p>
                  <h3 className={styles.prompt}>{t.experience.prompt}</h3>

                  <div className={styles.options} role="group" aria-label={t.experience.optionsAria}>
                    {t.experience.answers.map((answer, index) => {
                      const optionState = selectedAnswer === null
                        ? "idle"
                        : index === 1 && selectedAnswer === index
                          ? "correct"
                          : selectedAnswer === index
                            ? "incorrect"
                            : "idle";
                      return (
                        <button
                          key={answer}
                          type="button"
                          aria-pressed={selectedAnswer === index}
                          disabled={selectedAnswer !== null}
                          data-state={optionState}
                          onClick={() => setSelectedAnswer(index)}
                        >
                          <span>{String.fromCharCode(65 + index)}</span>
                          <strong>{answer}</strong>
                          {optionState === "correct" && <i>{t.experience.correct}</i>}
                          {optionState === "incorrect" && <i>{t.experience.tryAgain}</i>}
                        </button>
                      );
                    })}
                  </div>

                  {selectedAnswer !== null && (
                    <div className={styles.answerResult} role="status">
                      <p>{answerIsCorrect ? <><span lang="zh-Hans">对</span> / {t.experience.correct}</> : t.experience.notQuite}</p>
                      {answerIsCorrect
                        ? <button type="button" onClick={() => setStep(3)}>{t.experience.continue} <span>↗</span></button>
                        : <button type="button" onClick={() => setSelectedAnswer(null)}>{t.experience.tryAgain} <span>↗</span></button>}
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <form className={styles.lesson} onSubmit={finishLesson}>
                  <p className={styles.labLabel}>{t.experience.stepRespond}</p>
                  <p className={`${styles.character} ${styles.response}`} lang="zh-Hans">
                    我叫 <span>{userName.trim() || "..."}</span>.
                  </p>

                  <div className={styles.anatomy} aria-label={t.experience.phraseAria}>
                    <div><span>{t.experience.character}</span><strong lang="zh-Hans">我叫</strong></div>
                    <div><span>{t.experience.pinyin}</span><strong>wǒ jiào</strong></div>
                    <div><span>{t.experience.meaning}</span><strong>{t.experience.phraseMeaning}</strong></div>
                  </div>

                  <div className={styles.nameField}>
                    <label htmlFor={inputId}>{t.experience.yourName}</label>
                    <input
                      id={inputId}
                      type="text"
                      value={userName}
                      maxLength={32}
                      autoComplete="name"
                      autoCapitalize="words"
                      placeholder="Alex"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>

                  <div className={styles.actions}>
                    <button type="submit" disabled={!userName.trim()}>{t.experience.finish} <span>↗</span></button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className={`${styles.lesson} ${styles.complete}`}>
                  <p className={styles.labLabel}>{t.experience.complete}</p>
                  <h3>{t.experience.completeHeading[0]}<br />{t.experience.completeHeading[1]}<br />{t.experience.completeHeading[2]}</h3>
                  <div className={styles.transcript} lang="zh-Hans" aria-label={t.experience.transcriptAria}>
                    <span>你好。</span>
                    <span>你叫什么名字？</span>
                    <span>我叫 {userName.trim()}。</span>
                  </div>
                  <div className={styles.finalActions}>
                    <a href="/courses/beginner">{t.experience.keepLearning} <span>↗</span></a>
                    <button type="button" onClick={restart}>{t.experience.restart}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
