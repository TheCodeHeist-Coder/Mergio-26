"use client";

import { useEffect } from "react";

// Adds the `in` class when elements scroll into view:
// `.reveal` fades content up, and the final pine forest rises into place.
// Kept as one effect so every section can stay a server component.
export function ScrollEffects() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const scene = document.querySelector(".night .final-scene");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      scene?.classList.add("in");
      return;
    }

    const observe = (targets: Iterable<Element>, threshold: number) => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        },
        { threshold },
      );
      for (const target of targets) observer.observe(target);
      return observer;
    };

    const revealObserver = observe(reveals, 0.12);
    const sceneObserver = observe(scene ? [scene] : [], 0.2);
    return () => {
      revealObserver.disconnect();
      sceneObserver.disconnect();
    };
  }, []);

  return null;
}
