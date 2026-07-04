"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : "on-hero"}`}>
      <div className="wrap nav-inner">
        <span className="nav-word">Ally Roofing</span>
        <div className="nav-links">
          <div className="nav-links-desktop" style={{ display: "flex", gap: "1.9rem" }}>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#work">The Work</a>
            <a className="nav-link" href="#visit">Visit</a>
          </div>
          <a className="btn-amber" href="tel:8622632675" aria-label="Call Ally Roofing at (862) 263-2675">
            <Phone size={15} /> (862) 263-2675
          </a>
        </div>
      </div>
    </nav>
  );
}
