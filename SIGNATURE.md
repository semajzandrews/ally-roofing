# Ally Roofing & Leak Repair — SIGNATURE (v2, full-quality rebuild)

- Slug: ally-roofing
- Live: https://ally-roofing.vercel.app
- Repo: https://github.com/semajzandrews/ally-roofing (private)
- Business: roofing contractor, 326 Glenwood Ave Suite 3, Bloomfield NJ 07003 · 4.2★ (5 reviews) · (862) 263-2675 · open daily 8–8 (verified from Places data)
- Built: 07-04-2026 · v1 torn down same day (below the bar); this is the extraordinary pass

## Concept
**"The storm ends at your roofline."** The page IS the weather. It opens inside a
churning storm (real footage + canvas rain) and the sky lifts as you scroll —
nimbus black → rain blue → clear paper by the final CTA. The site performs the
brand promise instead of stating it.

## Design fingerprint
- Type: Panchang (squared technical display) + Supreme (body) — first use of both on the board, Fontshare, self-hosted woff2
- Palette: nimbus #0d1116 · rain #33526b · rain-lt #9fc0d4 · clear #f4f4f0 · torch orange #ff5a1f (CTA) / torch-deep #a63508 (text-on-light)
- Signature move (ONE): **the sky-lift** — a fixed 500vh storm-to-clear gradient behind the page, translated by scroll (rAF, transform-only, compositor-cheap). Distinct from freshi's section-hue morph: this is a single continuous narrative arc (dark→light) tied to the brand promise, not per-section accent swapping. Static mid-position under reduced motion.
- Flourish (subordinate to the signature, hero-only): lightweight canvas rain — 54 streaks desktop/28 mobile, IntersectionObserver-paused off-screen, disabled reduced-motion.
- Skeleton: 5-act narrative — storm hero → "The First Drop" (rain-on-roofline video moment) → **Severity Scale** (services as NWS-style warning levels L1–L5 with filling tick meters — novel for the vertical) → proof imagery → clear-sky visit/map. No card grids anywhere.
- Nav: adaptive to the sky phase — bone text during the storm (first ~55% of scroll), ink once the sky lifts; frosted bar matches phase. Driven by the same scroll fraction as the Sky so they can't disagree.

## Arsenal Manifest
- Primary medium: video + living gradient — a roofer's story is weather; footage carries the threat, the gradient carries the resolution
- Video considered: yes — used: yes (two placements) [BUILD_RULES §7]
- Media used (all self-hosted, vault-first — ZERO web re-downloads for stills):
  - video — Mixkit 9624 — churning dark storm clouds, light breaking beneath — hero, 720/360 pair + poster (frame-verified on contact sheet)
  - video — Mixkit 2716 — rain dripping off a roofline, macro — "First Drop" section, 720/360 + poster (frame-verified)
  - photo — Pexels 36884223 — roofer carrying shingles — proof grid (FROM VAULT, no download)
  - photo — Pexels 37623616 — two roofers at chimney flashing — proof grid (FROM VAULT, no download)
  - Spares banked to vault: Mixkit 21576 (teal wind clouds), 9810 (storm over valley, sun breaking)
- Motion: Lenis smooth scroll + IO reveals + the scroll-driven sky (all restyled/bespoke, no library defaults)
- Custom icons: inline phone glyph only — original path, no icon set
- Fontshare pairing: Panchang + Supreme (confirmed unused in build_registry)
- GPU: no WebGL/shaders — canvas 2D rain + transform-only gradient keeps Lighthouse-class perf

## Inspiration log (3 refs, technique borrowed)
1. NWS/weather.gov warning-level UI — severity taxonomy as public-trust communication → the L1–L5 service scale
2. Awwwards scroll-narrative sites (dark-to-light arcs, e.g. "scrollytelling" weather features by NYT/The Pudding) → single continuous background arc driven by scroll rather than per-section theming
3. Trust-vertical convention from our own Ramos reference (real crew photography as the proof spine, never icon illustration) → the two-up proof grid

## Performance budget
- Stills: 2 images, 231KB total, both next/image with sizes
- Video: hero 10.8MB/720 + 2.4MB/360 (mobile source), roofline 3.2MB/720 — preload=metadata, posters ship first paint
- Fonts: 7 woff2 subset files self-hosted; JS: no heavy deps (lenis only; no motion lib — reveals are CSS+IO)
- Expected Lighthouse: 90+ mobile (video is metadata-only until play; gradient is one composited layer)

## Gates
- Image/video uniqueness: PASS — every media file referenced in exactly one slot (grep, dup-filter empty)
- Contrast: PASS — automated sweep at scroll phases 0.35/0.55/0.72/0.95 against the computed sky color: 0 failures after two fixes (bone-dim #b9c5cd→#ccd6dd for mid-lift body text 4.07→4.5+; torch→torch-deep #a63508 for all text-on-clear-sky)
- 375px: PASS — zero overflowing elements, docWidth 375, call pill collapses to 48px circle
- Prod build: clean static prerender
- Facts: only verified lead data (name, address, phone, rating, hours from Places). No invented jobs/years/prices.

## Email enrichment
- No provably-exact public email found in prior recon (v1 search: only an unverifiable login-gated Facebook page and a different company "Allied Roofing Solutions"). Phone-first outreach.
