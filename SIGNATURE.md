# Ally Roofing & Leak Repair Of Bloomfield — SIGNATURE

- Slug: ally-roofing
- Live: https://ally-roofing.vercel.app (curl-confirmed HTTP 200)
- Repo: https://github.com/semajzandrews/ally-roofing (private)
- Business: roofing contractor, 326 Glenwood Ave Suite 3, Bloomfield NJ 07003 · (862) 263-2675 · 4.2 star Google (5 reviews) · open daily 8 AM to 8 PM · no existing website
- Built: 07-04-2026 · trust-vertical (home services), first roofing-slot build

## Design fingerprint
- Palette: "storm-to-clear" — charcoal storm-grey (#181c20) base, steel-blue accent (#3f7ea6, deep #2c6488 for small text), warm amber urgency CTA (#f2a33d)
- Type pairing: Zodiak (display serif, weight 700/400/italic) + General Sans (body, weight 400/500/600), both from Fontshare, self-hosted woff2 in public/fonts. No substitution needed, Fontshare was reachable.
- Signature move (ONE per site): the "clearing storm" — a layered CSS gradient sweep over the hero photo that animates upward and fades on load (3.2s cubic-bezier), revealing the clear-sky hero copy underneath. CSS gradient/keyframe animation only, no canvas or WebGL. Respects prefers-reduced-motion (animation disabled, cloud layer hidden).
- Skeleton ("trust-ledger"): hero (storm-to-clear promise) -> stat/trust bar (4.2 rating, 5 reviews, Bloomfield NJ service area, daily hours — all verified) -> services as a numbered inspection-report ledger (not cards) -> one full-bleed roof-imagery moment (chimney/flashing quote) -> visit/map section -> footer
- No phone-number invention, no invented years-in-business or job counts anywhere on the site; only verified Google-profile facts used

## Arsenal Manifest
- Primary medium: photography — trust vertical (home services), realness-forward per QUALITY_BAR direction-by-vertical rule; real roofers doing real roof work builds trust for a Bloomfield homeowner deciding who to let onto their roof
- Video considered: yes — checked Mixkit/Coverr conceptually for storm/rain-on-roof B-roll; decided against for this pass, a still hero photo plus the CSS clearing-storm animation already delivers the "storm to clear" concept without added payload; documented per BUILD_RULES §7
- Media used (self-hosted in public/img, next/image everywhere, each image in exactly one slot):
  - photo — Pexels id 36884223 — roofer carrying a bundle of shingles across a rooftop, dramatic sky — hero section only
  - photo — Pexels id 37623616 — two roofers working near a chimney on a tile roof, clear sky — "On the Roof" full-bleed quote section only
  - Both banked + verified in image-library registry under ally-roofing (vault MISS on roofing/exterior, roofing/repair, home/exterior triggered the Pexels search path)
  - Spare banked (unused, on shelf, verified but not deployed): Pexels 37623623 (roofers + chimney + ladder), Pexels 9431615 (worker installing shingles closeup), Pexels 17314421 (red tile roof gable/dormer), Pexels 237907 (shingle texture closeup)
- Motion / WebGL technique: custom CSS gradient-sweep signature (clearing storm) + IntersectionObserver-style Motion `whileInView` reveals for section entrances + Lenis smooth scroll — all bespoke, no library defaults used as-is
- Custom icons: lucide-react (Phone, MapPin, Clock, ArrowUpRight) — standard open-source icon set, not a brand mark; no bespoke brand mark commissioned for this build
- Fontshare pairing: Zodiak + General Sans (confirmed not previously used in build_registry.json; distinct from Ramos's Clash+General Sans and Six Points' Melodrama+Ranade)
- GPU-verified: n/a — no shader/WebGL, 2D CSS + Motion only, per bundle-size doctrine

## Contrast Gate (computed, WCAG)
All ratios computed via a Python luminance script against the actual hex values used in code.
- Storm-white (#f4f5f6) on charcoal hero overlay (#181c20): 15.69:1 — PASS (nav/hero text on dark)
- Charcoal (#181c20) on clear-sky background (#f4f5f6): 15.69:1 — PASS (body copy, ledger)
- Muted-slate label text (#5c6670) on clear background: 5.36:1 — PASS (normal text, >=4.5:1)
- Steel-blue (#3f7ea6) on clear background: 4.05:1 — used ONLY for icons/borders/large numerals (>=3:1 large-text threshold), never for small body/label text
- Steel-deep (#2c6488, darkened variant) on clear background: 5.86:1 — PASS, used for all small marker/label text that needed the steel hue (services ledger numerals, section eyebrows)
- Amber CTA text (#181c20) on amber background (#f2a33d): 8.22:1 — PASS (call button)
- Amber (#f2a33d) as standalone accent/label color on charcoal: 8.22:1 — PASS
- Nav wordmark/links: adaptive — clear-white over the hero image while `on-hero` (scrollY < 72% of viewport height), switches to charcoal-on-white-panel once `scrolled` class engages; both states independently pass 15.69:1
- No gradient-clipped text is used anywhere on this site, so that failure mode does not apply

## Inspiration Log (3 references)
1. Awwwards trades/roofing nominee pool (e.g. "Roof", "Dominion Roofing Co.") — technique borrowed: high-contrast, mobile-first conversion layout with a single dominant CTA above the fold, applied here as the fixed tap-to-call pill plus the immediate hero phone button.
2. General trust-vertical convention from recent Awwwards home-services nominees — technique borrowed: real crew/job photography as the primary visual spine rather than icon-illustration, applied here via the two full-bleed roofer photographs (hero + mid-page moment) instead of stock icon graphics.
3. Editorial "inspection report" / claims-document framing (reasoned from known high-quality trust-vertical patterns, e.g. insurance and home-inspection sites that present services as a numbered checklist rather than marketing cards) — technique borrowed: the numbered ledger-row services section, styled as a clean document list instead of colored cards, reinforcing the "storm to clear inspection" concept.

## Performance Budget (Gate 2)
- Total image payload: 188 KB (hero-roofer-shingles.jpg 60 KB + roofers-chimney-repair.jpg 128 KB), both served through next/image with automatic format negotiation and responsive sizing
- Every content image uses next/image (`grep -rn "<img" src/` returns zero matches)
- Font payload: 148 KB total across 6 self-hosted woff2 files (Zodiak Regular/Bold/Italic ~23-25 KB each, General Sans Regular/Medium/Semibold ~24 KB each); all are the WEB-subset woff2 files from Fontshare's official export, not full desktop font files
- Production dependencies beyond next/react: `motion` (section reveal animation + hero copy stagger, the only animation engine used), `lenis` (smooth scroll, per stack convention), `lucide-react` (tree-shaken icon imports for Phone/MapPin/Clock/ArrowUpRight, four icons total). No other runtime dependencies.
- Why this should score 90+ on Lighthouse: total page weight for images + fonts is under 340 KB combined, both images are lazy-loaded except the priority hero image which is the LCP element and is preloaded via next/image's `priority` flag, there is no client-side data fetching or hydration-heavy state, the CSS signature animation is pure GPU-friendly transform/opacity (no layout thrash), and the JS bundle is limited to three small, purpose-built dependencies with no unused UI kit weight.

## Email Enrichment
- Searched the web for a public email for Ally Roofing & Leak Repair Of Bloomfield (Facebook, Instagram, Yelp, BBB). No provably-exact match was found. A search surfaced a similarly named but confirmed-different company ("Allied Roofing Solutions," Bloomfield NJ, different phone) and a "Ally Roofing LLC" Facebook page that could not be verified against this business's address or phone (page content was not accessible without login). Result: none found. No email is used anywhere on the site or in outreach.

## Contract Deviations
- None. Type pairing, palette, skeleton, and signature move all match the locked design contract as specified.

## Git Status
- `git init` run, single clean commit created ("Initial build: Ally Roofing and Leak Repair Of Bloomfield marketing site"), no AI/Claude/Anthropic attribution anywhere in the commit message
- `gh auth status` confirmed logged in as semajzandrews
- `gh repo create semajzandrews/ally-roofing --private --source . --push` succeeded, pushed to https://github.com/semajzandrews/ally-roofing

## Deploy Status
- `vercel whoami` confirmed authenticated as semajsubscriptions-5955
- `vercel link --yes --project ally-roofing` linked to semajsubscriptions-gmailcoms-projects/ally-roofing, GitHub repo connected
- `vercel pull --yes --environment=production` succeeded
- `vercel build --prod` completed clean (Next.js 16.2.9, Turbopack, static prerender)
- `vercel deploy --prebuilt --prod` succeeded, aliased to https://ally-roofing.vercel.app
- `curl -s -o /dev/null -w "%{http_code}" https://ally-roofing.vercel.app` returned 200
- Verified static assets serve correctly: `/img/hero-roofer-shingles.jpg` -> 200, `/fonts/Zodiak-Regular.woff2` -> 200

## Verification
- `npm run build` completes with zero errors (Next.js 16.2.9, Turbopack)
- `npx eslint src` clean (one unescaped-apostrophe error found and fixed during build)
- Image uniqueness gate: both used images (`hero-roofer-shingles.jpg`, `roofers-chimney-repair.jpg`) each appear in exactly one slot on the site (grep-verified)
- No raw `<img>` tags for content images (grep-verified, zero matches)
- Facts on site: only verified lead data (name, address, phone, category, hours, 4.2 star / 5 review Google rating). No invented years-in-business, job counts, or social handles.
