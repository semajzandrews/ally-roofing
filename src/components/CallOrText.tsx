"use client";

import { useEffect, useRef, useState } from "react";
import { formatPhone, telHref, smsHref } from "@/lib/phone";

/**
 * Call OR Text — plenty of homeowners will never dial, but they will happily
 * send a photo of the ceiling stain. On a roof, that photo is most of the
 * estimate, so the text branch is prefilled to ask for one.
 *
 * Ally styling: the popover borrows the severity-scale language of the page —
 * square 4px corners, nimbus panel, Panchang uppercase labels, and a pair of
 * torch ticks marking each row the way the scale marks a warning level.
 * `tel:` / `sms:` are built from E.164 digits by lib/phone; the visible number
 * is always `(862) 263-2675`.
 */

type Trigger = "nav" | "torch" | "fab";

type Props = {
  phone: string;
  smsBody: string;
  /** sub-label under "Text" */
  smsHint?: string;
  variant?: "pill" | "inline";
  trigger?: Trigger;
  /** open the panel upward (for the fixed bottom-right pill) */
  up?: boolean;
  /** label on the call button of the pill trigger */
  label?: string;
  className?: string;
};

function PhoneGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h2.9l1.4 4.1-2 1.5a13.6 13.6 0 0 0 6.5 6.5l1.5-2 4.1 1.4v2.9c0 1-.8 1.8-1.8 1.8C10.7 19.2 4.8 13.3 4.8 4.8 4.8 3.8 5.6 3 6.6 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TextGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.4 4.6h17.2v11.6H9.1L4.9 20v-3.8H3.4V4.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** the severity-scale tick pair, reused as the row marker */
function Ticks({ on }: { on: number }) {
  return (
    <span className="cot-ticks" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <i key={i} className={i < on ? "on" : ""} />
      ))}
    </span>
  );
}

export default function CallOrText({
  phone,
  smsBody,
  smsHint = "Send a photo of the damage",
  variant = "pill",
  trigger = "torch",
  up = false,
  label,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pretty = formatPhone(phone);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <a href={telHref(phone)} className="btn-torch">
          <PhoneGlyph size={15} /> Call {pretty}
        </a>
        <a href={smsHref(phone, smsBody)} className="btn-outline-ink">
          <TextGlyph size={15} /> Text a photo instead
        </a>
      </div>
    );
  }

  const triggerClass =
    trigger === "nav"
      ? "cot-trigger cot-trigger-nav"
      : trigger === "fab"
        ? "cot-trigger cot-trigger-fab"
        : "cot-trigger btn-torch";

  return (
    <div className={`cot ${up ? "cot-up" : ""} ${className}`} ref={rootRef}>
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text Ally Roofing at ${pretty}`}
        onClick={() => setOpen((v) => !v)}
      >
        <PhoneGlyph size={trigger === "torch" ? 15 : 14} />
        <span className="cot-label">{label ?? pretty}</span>
      </button>

      <div className="cot-menu" data-open={open} role="menu">
        <a href={telHref(phone)} role="menuitem" onClick={() => setOpen(false)}>
          <Ticks on={2} />
          <span className="cot-copy">
            <strong>Call {pretty}</strong>
            <em>Someone picks up, 8 AM to 8 PM daily</em>
          </span>
          <PhoneGlyph size={15} />
        </a>
        <a
          href={smsHref(phone, smsBody)}
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <Ticks on={3} />
          <span className="cot-copy">
            <strong>Text {pretty}</strong>
            <em>{smsHint}</em>
          </span>
          <TextGlyph size={15} />
        </a>
      </div>
    </div>
  );
}
