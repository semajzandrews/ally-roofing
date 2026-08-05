import Image from "next/image";
import Nav from "@/components/Nav";
import Sky from "@/components/Sky";
import Rain from "@/components/Rain";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";
import CallOrText from "@/components/CallOrText";
import { site } from "@/lib/site";

const PHONE = site.phone;
const TEL = site.telHref;
const ADDRESS = "326 Glenwood Ave Suite 3, Bloomfield, NJ 07003";

/* Services as a weather-service severity scale — every roofing problem
   has a level, and Ally handles all five. Copy uses only credible
   category claims, no invented jobs/prices/years. */
const SEVERITY = [
  {
    lvl: 1,
    name: "Inspection",
    note: "No symptoms, just diligence. A full top-to-gutter check and a straight report on what your roof needs — and what it doesn't.",
  },
  {
    lvl: 2,
    name: "Gutters & Drainage",
    note: "Water that can't leave finds a way in. Cleaning, repair and replacement to keep it moving away from the house.",
  },
  {
    lvl: 3,
    name: "Leak Repair",
    note: "The stain on the ceiling is the end of the story, not the start. We trace it to the source and seal it there.",
  },
  {
    lvl: 4,
    name: "Storm Damage",
    note: "Wind, hail, fallen limbs. Assessed honestly, documented for your insurer, repaired properly.",
  },
  {
    lvl: 5,
    name: "Full Replacement",
    note: "When repair stops being the answer. Tear-off to new roof, weathertight and warrantied workmanship.",
  },
];

function SevTicks({ n }: { n: number }) {
  return (
    <div className="sev-track" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`sev-tick ${i <= n ? "on" : ""}`} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Sky />
      <SmoothScroll />
      <Nav />

      {/* fixed call CTA — chooser, because half these leads would rather
          send a photo of the ceiling than dial */}
      <CallOrText
        phone={PHONE}
        smsBody={site.smsBody}
        trigger="fab"
        up
        className="cot-fixed"
      />

      {/* ── ACT I: INSIDE THE STORM ─────────────────────────────── */}
      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          poster="/video/storm-poster.jpg"
          preload="metadata"
        >
          <source src="/video/storm-360.mp4" media="(max-width: 640px)" type="video/mp4" />
          <source src="/video/storm-720.mp4" type="video/mp4" />
        </video>
        <Rain />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0d1116 4%, rgba(13,17,22,0.45) 45%, rgba(13,17,22,0.25))",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36">
          <Reveal>
            <p className="kicker mb-5 text-torch-hi">Roofing · Leak Repair · Bloomfield NJ</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-[13ch] text-[clamp(2.6rem,8.5vw,6.4rem)] text-bone">
              The storm ends at your roofline.
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-lg text-bone-dim">
              Leak repair, storm damage, inspections and full replacements across
              Bloomfield — open every day, 8 AM to 8 PM, because water doesn&apos;t
              keep business hours.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CallOrText phone={PHONE} smsBody={site.smsBody} label={`Call or text — ${PHONE}`} />
              <a href="#severity" className="btn-outline-light">How bad is it?</a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <p className="mt-10 text-sm font-medium text-bone-dim">
              ★ 4.2 on Google · Open daily 8–8 · 326 Glenwood Ave, Bloomfield
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ACT II: THE FIRST DROP ──────────────────────────────── */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-36">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/video/roofline-poster.jpg"
                preload="metadata"
              >
                <source src="/video/roofline-360.mp4" media="(max-width: 640px)" type="video/mp4" />
                <source src="/video/roofline-720.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker mb-4 text-torch-hi">The First Drop</p>
              <h2 className="text-[clamp(1.9rem,4.6vw,3.2rem)] text-bone">
                Every ceiling stain started as one drop nobody chased.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-bone-dim">
                By the time water shows up inside, it&apos;s already traveled — along
                rafters, down flashing, through insulation. We don&apos;t patch where
                it landed. We climb up and find where it got in.
              </p>
              <CallOrText
                phone={PHONE}
                smsBody={site.smsBody}
                label="Chase the drop — call or text"
                className="mt-8"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ACT III: THE SEVERITY SCALE ─────────────────────────── */}
      <section id="severity" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <Reveal>
            <p className="kicker mb-4 text-torch-hi">The Severity Scale</p>
            <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.6vw,3.2rem)] text-bone">
              Every roof problem has a level. We work all five.
            </h2>
          </Reveal>
          <div className="mt-12">
            {SEVERITY.map((s, i) => (
              <Reveal key={s.lvl} delay={i * 70}>
                <div className="sev-row">
                  <div>
                    <div className="sev-badge text-bone">L{s.lvl}</div>
                    <SevTicks n={s.lvl} />
                  </div>
                  <div>
                    <h3 className="text-xl text-bone md:text-2xl">{s.name}</h3>
                    <p className="mt-2 max-w-[58ch] text-[0.98rem] text-bone-dim">{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACT IV: THE WORK (sky is lifting now) ───────────────── */}
      <section id="proof" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative min-h-[320px] overflow-hidden rounded-md md:min-h-[460px]">
                <Image
                  src="/img/36884223.jpg"
                  alt="A roofer carrying a bundle of shingles across a rooftop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative min-h-[320px] overflow-hidden rounded-md md:min-h-[460px]">
                <Image
                  src="/img/37623616.jpg"
                  alt="Two roofers repairing flashing near a chimney"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-[family-name:var(--font-panchang)] text-xl font-medium text-ink md:text-2xl">
              Chimney flashing, valleys, ridge lines, every seam a leak could
              start from — checked before we leave the roof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ACT V: AFTER THE STORM (clear sky, dark text) ───────── */}
      <section id="visit" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <p className="kicker mb-4 text-torch-deep">After the Storm</p>
            <h2 className="max-w-[16ch] text-[clamp(1.9rem,4.6vw,3.2rem)] text-ink">
              Clear skies. Dry ceilings. That&apos;s the job.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="kicker mb-1 text-ink-2">Address</p>
                  <p className="text-lg font-medium text-ink">326 Glenwood Ave Suite 3</p>
                  <p className="text-ink-2">Bloomfield, NJ 07003</p>
                </div>
                <div>
                  <p className="kicker mb-1 text-ink-2">Hours</p>
                  <p className="text-lg font-medium text-ink">Open daily · 8 AM – 8 PM</p>
                </div>
                <div>
                  <p className="kicker mb-1 text-ink-2">Phone</p>
                  <a href={TEL} className="text-lg font-bold text-torch-deep">
                    {PHONE}
                  </a>
                </div>
                <CallOrText
                  phone={PHONE}
                  smsBody={site.smsBody}
                  variant="inline"
                  className="mt-1"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="map-frame" style={{ height: "clamp(340px, 38vw, 440px)" }}>
                <iframe
                  title={`Ally Roofing & Leak Repair location — ${ADDRESS}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="border-t border-[var(--line-light)]">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center text-sm text-ink-2 sm:flex-row sm:justify-between sm:text-left">
            <span className="font-[family-name:var(--font-panchang)] font-semibold text-ink">
              ALLY<span className="text-torch">/</span>ROOFING · Bloomfield, NJ
            </span>
            <p>
              built by{" "}
              <a
                href="https://bysemaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-torch-deep"
              >
                bysemaj.com
              </a>
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
