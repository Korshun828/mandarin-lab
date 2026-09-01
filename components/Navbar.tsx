"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { scrollToSection } from "./scroll-to-section";

const links = [
  { key: "main", target: "top" },
  { key: "courses", target: "courses" },
  { key: "method", target: "method" },
  { key: "experience", target: "experience" },
  { key: "about", target: "about" },
  { key: "results", target: "results" },
  { key: "faq", target: "faq" },
  { key: "contact", target: "contact" },
] as const;

export function Navbar() {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof links)[number]["key"]>("main");

  useEffect(() => {
    const sections = links
      .map((link) => ({ key: link.key, element: document.getElementById(link.target) }))
      .filter((section): section is { key: (typeof links)[number]["key"]; element: HTMLElement } => Boolean(section.element));
    let frame = 0;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34;
      let current = sections[0]?.key ?? "main";

      sections.forEach((section) => {
        if (section.element.getBoundingClientRect().top <= activationLine) current = section.key;
      });

      setActiveSection(current);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function handleLink(event: MouseEvent<HTMLAnchorElement>, link: (typeof links)[number]) {
    setOpen(false);
    if (document.getElementById(link.target)) scrollToSection(event, link.target);
  }

  return (
    <nav className="navbar" data-intro="nav" data-language={language} aria-label={t.nav.aria}>
      <a className="brand" href="#top">Mandarin Lab</a>
      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link.key}
            href={`#${link.target}`}
            data-active={activeSection === link.key ? "true" : undefined}
            aria-current={activeSection === link.key ? "location" : undefined}
            onClick={(event) => handleLink(event, link)}
          >
            {t.nav[link.key]}
          </a>
        ))}
      </div>
      <div className="nav-end">
        <div className="coordinates"><span>31.2304° N</span><span>121.4737° E</span></div>
        <LanguageSwitcher />
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? t.nav.close : t.nav.menu}</span><i aria-hidden="true">{open ? "×" : "+"}</i>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.key}
                href={`#${link.target}`}
                data-active={activeSection === link.key ? "true" : undefined}
                aria-current={activeSection === link.key ? "location" : undefined}
                onClick={(event) => handleLink(event, link)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >{t.nav[link.key]}</motion.a>
            ))}
            <LanguageSwitcher mobile />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
