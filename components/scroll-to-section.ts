import type { MouseEvent } from "react";

export function scrollToSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
  window.history.pushState(null, "", `#${sectionId}`);
}
