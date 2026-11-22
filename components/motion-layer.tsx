"use client";

import { useEffect } from "react";

export function MotionLayer() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section, .page-intro, .product-card, .info-card, .faq-list details, .detail-art, .detail-copy"
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((target) => {
      target.classList.add("motion-reveal");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
