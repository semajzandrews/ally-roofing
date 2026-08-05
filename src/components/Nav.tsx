"use client";

import { useEffect, useState } from "react";
import CallOrText from "./CallOrText";
import { site } from "@/lib/site";

/* Nav rides the sky: light text while the page is dark (first ~55% of
   scroll), flips to ink once the sky has lifted. Driven by the same
   scroll fraction as the Sky component so they can never disagree. */
export default function Nav() {
  const [phase, setPhase] = useState<"storm" | "clear">("storm");
  const [inset, setInset] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const p = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      setPhase(p > 0.55 ? "clear" : "storm");
      setInset(doc.scrollTop > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const storm = phase === "storm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        inset
          ? storm
            ? "bg-nimbus/80 backdrop-blur-md border-b border-[var(--line-dark)]"
            : "bg-clear/85 backdrop-blur-md border-b border-[var(--line-light)]"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className={`font-[family-name:var(--font-panchang)] text-lg font-semibold tracking-tight transition-colors duration-500 ${
            storm ? "text-bone" : "text-ink"
          }`}
        >
          ALLY<span className="text-torch">/</span>ROOFING
        </a>
        <div
          className={`hidden gap-8 text-sm font-medium md:flex transition-colors duration-500 ${
            storm ? "text-bone/85" : "text-ink/80"
          }`}
        >
          <a href="#severity" className="transition-opacity hover:opacity-60">The Scale</a>
          <a href="#proof" className="transition-opacity hover:opacity-60">The Work</a>
          <a href="#visit" className="transition-opacity hover:opacity-60">Visit</a>
        </div>
        <CallOrText
          phone={site.phone}
          smsBody={site.smsBody}
          trigger="nav"
        />
      </nav>
    </header>
  );
}
