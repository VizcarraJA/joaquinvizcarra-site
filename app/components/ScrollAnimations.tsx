"use client";

import { useEffect } from "react";

/**
 * Null-rendering client component that wires up IntersectionObserver
 * for fade-in-on-scroll. Any element with className="fade-in" will
 * get the "visible" class added when it enters the viewport.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
