"use client";

import { useEffect, useRef } from "react";

/* The signature: a 500vh storm-to-clear gradient behind the whole page,
   translated by scroll so the sky lifts as you read. rAF-throttled,
   transform-only (compositor cheap), inert under reduced motion. */
export default function Sky() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "translateY(-40%)";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const p = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      // gradient is 500vh; viewport shows 100vh — sweep through 400vh of it
      el.style.transform = `translateY(${-p * 400}vh)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="sky" aria-hidden="true">
      <div ref={ref} className="sky-gradient" />
    </div>
  );
}
