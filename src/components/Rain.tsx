"use client";

import { useEffect, useRef } from "react";

/* Lightweight canvas rain over the hero only. Pauses off-screen,
   disabled under reduced motion. ~50 streaks, no allocation per frame. */
export default function Rain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      raf = 0,
      running = false;

    const N = window.innerWidth < 640 ? 28 : 54;
    const drops = Array.from({ length: N }, () => ({
      x: 0,
      y: 0,
      len: 0,
      spd: 0,
      seeded: false,
    }));

    const seed = (d: (typeof drops)[number], anywhere: boolean) => {
      d.x = Math.random() * w;
      d.y = anywhere ? Math.random() * h : -30;
      d.len = 12 + Math.random() * 22;
      d.spd = 9 + Math.random() * 9;
      d.seeded = true;
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops.forEach((d) => seed(d, true));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(190, 214, 228, 0.32)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const d of drops) {
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 2, d.y + d.len);
        d.x -= 0.7;
        d.y += d.spd;
        if (d.y > h + 30) seed(d, false);
      }
      ctx.stroke();
      if (running) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        running = e.isIntersecting;
        if (running && !raf) raf = requestAnimationFrame(tick);
        if (!running && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );

    resize();
    window.addEventListener("resize", resize);
    io.observe(canvas);
    return () => {
      window.removeEventListener("resize", resize);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
