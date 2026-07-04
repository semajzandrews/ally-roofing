"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    n: "01",
    name: "Leak Repair",
    note: "Tracked to the source and sealed, not just patched over.",
  },
  {
    n: "02",
    name: "Roof Replacement",
    note: "Full tear-off and re-roof when repair is no longer the answer.",
  },
  {
    n: "03",
    name: "Inspections",
    note: "A straight report on what your roof needs, and what it doesn't.",
  },
  {
    n: "04",
    name: "Storm Damage",
    note: "Wind, hail, and fallen-limb damage assessed and repaired.",
  },
  {
    n: "05",
    name: "Gutters",
    note: "Keeping water moving away from the roof and the foundation.",
  },
];

function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Nav />

      {/* fixed tap-to-call CTA */}
      <a
        href="tel:8622632675"
        className="callpill"
        aria-label="Call Ally Roofing & Leak Repair Of Bloomfield at (862) 263-2675"
      >
        <Phone size={16} />
        <span className="callpill-label">(862) 263-2675</span>
      </a>

      {/* ─── HERO: storm to clear ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-photo">
          <Image
            src="/img/hero-roofer-shingles.jpg"
            alt="A roofer carrying a bundle of shingles across a rooftop against a dramatic sky"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="storm-sweep" />
        <div className="storm-clouds" />

        <div className="wrap hero-content">
          <motion.div
            className="marker"
            style={{ color: "rgba(244,245,246,0.82)" }}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.4 }}
          >
            <b style={{ color: "var(--clear)" }}>&#9733; 4.2</b> &middot; GOOGLE RATED &middot; BLOOMFIELD, NJ
          </motion.div>
          <motion.h1
            className="display-xl"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 6.2rem)",
              marginTop: "1rem",
              color: "var(--clear)",
              maxWidth: "16ch",
            }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.55 }}
          >
            After the storm, we make it clear again.
          </motion.h1>
          <motion.p
            className="body-tx"
            style={{
              fontSize: "clamp(1.02rem, 1.5vw, 1.2rem)",
              color: "rgba(244,245,246,0.86)",
              maxWidth: "46ch",
              marginTop: "1.3rem",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.75 }}
          >
            Leak repair, roof replacement, inspections, storm damage and
            gutters for homes across Bloomfield, New Jersey. Open every day,
            8 AM to 8 PM.
          </motion.p>
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1.9rem" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.95 }}
          >
            <a className="btn-amber" href="tel:8622632675">
              <Phone size={16} /> Call for an inspection
            </a>
            <a className="btn-line" href="#services">
              See our services
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── STAT / TRUST BAR ────────────────────────────────────── */}
      <section className="stat-bar">
        <div className="wrap">
          <div className="stat-grid">
            <div className="stat-cell">
              <div className="stat-num">4.2 &#9733;</div>
              <div className="stat-label">Google rating</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">5</div>
              <div className="stat-label">Google reviews</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">07003</div>
              <div className="stat-label">Bloomfield, NJ service area</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">8&ndash;8</div>
              <div className="stat-label">Open daily, Mon&ndash;Sun</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES: inspection-report ledger ─────────────────── */}
      <section className="section" id="services">
        <div className="wrap">
          <Reveal>
            <div className="marker" style={{ color: "var(--steel-deep)" }}>
              <b>INSPECTION REPORT</b>
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)", marginTop: "1.1rem", maxWidth: "18ch" }}
            >
              What we look at, and what we fix.
            </h2>
            <p className="body-tx" style={{ marginTop: "1.1rem", maxWidth: "50ch" }}>
              Every visit starts the same way, top of the roof to the gutter
              line. Here is the full list of what Ally Roofing handles.
            </p>
          </Reveal>

          <div style={{ marginTop: "clamp(2rem,4vw,3rem)" }}>
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="ledger-row">
                  <span className="ledger-num">{s.n}</span>
                  <div>
                    <div className="ledger-name">{s.name}</div>
                    <div className="ledger-note">{s.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ONE STRONG ROOF-IMAGERY MOMENT ──────────────────────── */}
      <section style={{ position: "relative", minHeight: "62vh", display: "flex", alignItems: "center" }} id="work">
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/img/roofers-chimney-repair.jpg"
            alt="Two roofers working near a chimney on a tile roof under a clear sky"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(24,28,32,0.78) 0%, rgba(24,28,32,0.4) 45%, rgba(24,28,32,0.82) 100%)",
            }}
          />
        </div>
        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingBlock: "clamp(3.5rem,8vw,6rem)" }}>
          <Reveal>
            <div className="marker" style={{ color: "rgba(244,245,246,0.8)" }}>
              <b style={{ color: "var(--clear)" }}>ON THE ROOF</b>
            </div>
            <blockquote
              className="display"
              style={{
                fontSize: "clamp(1.7rem, 4vw, 3rem)",
                color: "var(--clear)",
                maxWidth: "22ch",
                marginTop: "1.2rem",
                lineHeight: 1.08,
              }}
            >
              We check the chimney flashing, the valleys, and every seam a
              leak could start from.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ─── VISIT / MAP ─────────────────────────────────────────── */}
      <section className="section" id="visit">
        <div className="wrap">
          <div className="cols-2">
            <div>
              <Reveal>
                <div className="marker" style={{ color: "var(--steel-deep)" }}>
                  <b>VISIT US</b>
                </div>
                <h2
                  className="display"
                  style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)", marginTop: "1.1rem", maxWidth: "14ch" }}
                >
                  Call, and we&apos;ll come take a look.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <MapPin size={20} style={{ color: "var(--steel)", flexShrink: 0, marginTop: 3 }} />
                    <div>
                      <div className="display" style={{ fontSize: 18 }}>326 Glenwood Ave Suite 3</div>
                      <div className="body-tx" style={{ fontSize: 14 }}>Bloomfield, NJ 07003</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Phone size={20} style={{ color: "var(--steel)", flexShrink: 0 }} />
                    <a className="display" href="tel:8622632675" style={{ fontSize: 18, textDecoration: "none" }}>
                      (862) 263-2675
                    </a>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <Clock size={20} style={{ color: "var(--steel)", flexShrink: 0, marginTop: 3 }} />
                    <div>
                      <div className="body-tx" style={{ color: "var(--ink)", fontSize: 15 }}>
                        Open daily, 8:00 AM &ndash; 8:00 PM
                      </div>
                      <div className="body-tx" style={{ fontSize: 13 }}>Monday through Sunday</div>
                    </div>
                  </div>
                </div>
                <a className="btn-amber" href="tel:8622632675" style={{ marginTop: "2rem" }}>
                  <Phone size={16} /> Call the office <ArrowUpRight size={16} />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="map-frame" style={{ height: "clamp(300px, 40vw, 440px)" }}>
                <iframe
                  title="Ally Roofing & Leak Repair Of Bloomfield location — 326 Glenwood Ave Suite 3, Bloomfield, NJ 07003"
                  src="https://www.google.com/maps?q=326+Glenwood+Ave+Suite+3,+Bloomfield,+NJ+07003&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: "var(--storm)", color: "var(--clear)", paddingBlock: "clamp(3rem,6vw,5rem)" }}>
        <div className="wrap">
          <div className="display" style={{ fontSize: "clamp(1.8rem,5.5vw,3.6rem)", lineHeight: 1 }}>
            Ally Roofing &amp; Leak Repair
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "2.2rem",
            }}
          >
            <span className="label" style={{ color: "rgba(244,245,246,0.62)" }}>
              326 GLENWOOD AVE SUITE 3 &middot; BLOOMFIELD, NJ 07003
            </span>
            <span className="label" style={{ color: "rgba(244,245,246,0.62)" }}>
              (862) 263-2675
            </span>
            <span className="label" style={{ color: "rgba(244,245,246,0.62)" }}>
              OPEN DAILY 8 AM&ndash;8 PM
            </span>
          </div>
          <div className="label" style={{ marginTop: "1.2rem", color: "rgba(244,245,246,0.45)" }}>
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              BUILT &middot; BYSEMAJ.COM
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
