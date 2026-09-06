"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/components/scroll-to-section";
import styles from "./ContactSection.module.css";

function WeChatQr({ id, mobile = false }: { id: string; mobile?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className={mobile ? styles.mobileQrInner : styles.qrContent} id={id}>
      <div className={styles.qrMeta}>
        <span>{t.contact.scan}</span>
        <span>ID / rocketman828</span>
      </div>
      <Image
        className={styles.qrImage}
        src="/contact/wechat-roman.jpg"
        width={888}
        height={1263}
        sizes={mobile ? "(max-width: 1099px) min(88vw, 390px), 1px" : "(min-width: 1100px) min(29vw, 390px), 1px"}
        alt={t.contact.qrAlt}
        unoptimized
      />
    </div>
  );
}

export function ContactSection() {
  const { language, t } = useLanguage();
  const [wechatHovered, setWechatHovered] = useState(false);
  const [wechatPinned, setWechatPinned] = useState(false);
  const wechatVisible = wechatHovered || wechatPinned;
  const contactChannels = [
    { number: "01", platform: "Telegram", contact: "@rocket_man828", detail: t.contact.fastest, href: "https://t.me/rocket_man828" },
    { number: "03", platform: "Email", contact: "MandarinLAB1@gmail.com", detail: t.contact.emailDetail, href: "mailto:MandarinLAB1@gmail.com" },
    { number: "04", platform: "Instagram", contact: "@mandarinlabacademy", detail: t.contact.instagramDetail, href: "https://instagram.com/mandarinlabacademy" },
  ];

  function handleCoursesLink(event: MouseEvent<HTMLAnchorElement>) {
    scrollToSection(event, "courses");
  }

  return (
    <section className={styles.section} id="contact" data-language={language} aria-labelledby="contact-title">
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.titleBlock}>
            <p className={styles.kicker}>{t.contact.kicker}</p>
            <h2 className={styles.heading} id="contact-title">
              <span>{t.contact.heading[0]}</span>
              <span>{t.contact.heading[1]}</span>
            </h2>
          </div>

          <div className={styles.intro}>
            <div className={styles.chineseLine}>
              <span lang="zh-Hans">开始吧。</span>
              <small>kāishǐ ba. / {t.contact.chineseMeaning}</small>
            </div>
            <p>{t.contact.support}</p>
          </div>
        </header>

        <div className={styles.contactLayout} data-wechat-visible={wechatVisible ? "true" : undefined}>
          <ol className={styles.channelList} aria-label={t.contact.channelsAria}>
            <li data-primary="true">
              <a className={styles.channelRow} href={contactChannels[0].href} target="_blank" rel="noopener noreferrer">
                <span className={styles.number}>{contactChannels[0].number}</span>
                <span className={styles.platform}>{contactChannels[0].platform}</span>
                <strong>{contactChannels[0].contact}</strong>
                <span className={styles.detail}>{contactChannels[0].detail}</span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            </li>

            <li
              data-wechat="true"
              data-open={wechatVisible ? "true" : undefined}
              onPointerEnter={() => setWechatHovered(true)}
              onPointerLeave={() => setWechatHovered(false)}
            >
              <button
                className={styles.channelRow}
                type="button"
                aria-expanded={wechatVisible}
                aria-controls="wechat-qr-desktop wechat-qr-mobile"
                onClick={() => setWechatPinned((current) => !current)}
              >
                <span className={styles.number}>02</span>
                <span className={styles.platform}>WeChat</span>
                <strong>rocketman828</strong>
                <span className={styles.detail}>{t.contact.wechatDetail}</span>
                <span className={styles.arrow} aria-hidden="true">+</span>
              </button>
              <div className={styles.mobileQr} aria-hidden={!wechatVisible}>
                <WeChatQr id="wechat-qr-mobile" mobile />
              </div>
            </li>

            {contactChannels.slice(1).map((channel) => {
              const external = channel.href.startsWith("http");

              return (
                <li key={channel.platform}>
                  <a
                    className={styles.channelRow}
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span className={styles.number}>{channel.number}</span>
                    <span className={styles.platform}>{channel.platform}</span>
                    <strong>{channel.contact}</strong>
                    <span className={styles.detail}>{channel.detail}</span>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </a>
                </li>
              );
            })}
          </ol>

          <aside className={styles.qrStage} aria-label={t.contact.qrPreview} aria-hidden={!wechatVisible}>
            <div className={styles.qrIdle} aria-hidden="true">
              <span>{t.contact.qrPreview}</span>
              <span>{t.contact.qrHint}</span>
            </div>
            <WeChatQr id="wechat-qr-desktop" />
          </aside>
        </div>

        <footer className={styles.footer}>
          <div className={styles.location}>
            <p>{t.contact.location}</p>
            <span>31.2304° N / 121.4737° E</span>
          </div>

          <div className={styles.nextStep}>
            <span>{t.contact.notSure}</span>
            <a href="#courses" onClick={handleCoursesLink}>{t.contact.explore} <i aria-hidden="true">↗</i></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
