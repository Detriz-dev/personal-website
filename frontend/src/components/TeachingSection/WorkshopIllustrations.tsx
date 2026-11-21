import type { CSSProperties, SVGProps } from "react";

// Illustrations from Figma (Teaching — proposal v5 illustrated icons, 172:3298).
// Colours come from --ill-* custom properties set per theme in TeachingSection.module.css.

const INK = "var(--ill-ink)";
const ACCENT = "var(--ill-accent)";
const SOFT = "var(--ill-accent-soft)";
const TINT = "var(--ill-tint)";
const PAPER = "var(--ill-paper)";
const PENCIL = "var(--ill-pencil)";
const WOOD = "var(--ill-wood)";
const GRAPHITE = "var(--ill-graphite)";
const ERASER = "var(--ill-eraser)";
const FERRULE = "var(--ill-ferrule)";
const ACCENT_OUTLINE = "var(--ill-accent-outline)";

const paint = (fill: string, stroke?: string): CSSProperties => (stroke ? { fill, stroke } : { fill });
const line = (stroke: string): CSSProperties => ({ fill: "none", stroke });

const Frame = ({ children, ...props }: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 112 88" fill="none" focusable="false" aria-hidden="true" {...props}>
        {children}
    </svg>
);

export const ProductStackIllustration = (props: SVGProps<SVGSVGElement>) => (
    <Frame {...props}>
        {/* Strategy */}
        <rect x="12" y="8" width="58" height="42" rx="6" strokeWidth="1.5" style={paint(SOFT, ACCENT)} />
        <circle cx="22" cy="16" r="4.5" strokeWidth="1.5" style={line(ACCENT)} />
        <circle cx="22" cy="16" r="1.6" style={paint(ACCENT)} />
        <rect x="31" y="13" width="28" height="2.5" rx="1.25" opacity="0.55" style={paint(ACCENT)} />
        <rect x="31" y="18" width="16" height="2.5" rx="1.25" opacity="0.35" style={paint(ACCENT)} />
        {/* Research */}
        <rect x="26" y="22" width="58" height="42" rx="6" strokeWidth="1.5" style={paint(TINT, ACCENT)} />
        <circle cx="34" cy="28" r="2.6" style={paint(ACCENT)} />
        <path d="M29.5 35C29.5 31.8 38.5 31.8 38.5 35" strokeWidth="1.5" strokeLinecap="round" style={line(ACCENT)} />
        <path
            d="M44 26H70a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H49l-3 2.5V33h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"
            strokeWidth="1.2"
            style={paint(PAPER, ACCENT)}
        />
        {/* Interface */}
        <rect x="40" y="36" width="58" height="42" rx="6" strokeWidth="1.5" style={paint(PAPER, INK)} />
        <rect x="46" y="42" width="46" height="5" rx="2.5" style={paint(SOFT)} />
        <rect x="46" y="51" width="20" height="21" rx="3" style={paint(SOFT)} />
        <path d="M48 69l6-8 4 5 3-3 3 6Z" opacity="0.6" style={paint(ACCENT)} />
        <rect x="70" y="52" width="22" height="2.5" rx="1.25" opacity="0.75" style={paint(INK)} />
        <rect x="70" y="58" width="16" height="2.5" rx="1.25" opacity="0.35" style={paint(INK)} />
        <rect x="70" y="65" width="18" height="7" rx="3.5" style={paint(ACCENT)} />
    </Frame>
);

export const ScrumLegoIllustration = (props: SVGProps<SVGSVGElement>) => (
    <Frame {...props}>
        {/* Sprint loop */}
        <path
            d="M84.5 26A34 34 0 1 1 64 13.5"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            strokeLinecap="round"
            style={line(ACCENT)}
        />
        <path d="M60 9l6 4.8-6.5 3.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={line(ACCENT)} />
        {/* Requirements note */}
        <g transform="rotate(-6 23 23)">
            <rect x="12" y="12" width="22" height="22" rx="2" strokeWidth="1.2" style={paint(SOFT, ACCENT)} />
            <rect x="16" y="18" width="14" height="2" rx="1" style={paint(ACCENT)} />
            <rect x="16" y="23" width="10" height="2" rx="1" opacity="0.6" style={paint(ACCENT)} />
            <rect x="16" y="28" width="12" height="2" rx="1" opacity="0.6" style={paint(ACCENT)} />
        </g>
        {/* Base brick */}
        <rect x="33" y="47" width="8" height="5" rx="1.5" strokeWidth="1.5" style={paint(SOFT, ACCENT)} />
        <rect x="71" y="47" width="8" height="5" rx="1.5" strokeWidth="1.5" style={paint(SOFT, ACCENT)} />
        <rect x="29" y="51" width="54" height="20" rx="3" strokeWidth="1.5" style={paint(SOFT, ACCENT)} />
        {/* Top brick */}
        <rect x="44" y="30" width="8" height="5" rx="1.5" strokeWidth="1.5" style={paint(ACCENT, ACCENT_OUTLINE)} />
        <rect x="60" y="30" width="8" height="5" rx="1.5" strokeWidth="1.5" style={paint(ACCENT, ACCENT_OUTLINE)} />
        <rect x="40" y="34" width="32" height="18" rx="3" strokeWidth="1.5" style={paint(ACCENT, ACCENT_OUTLINE)} />
        {/* Incoming brick */}
        <g transform="rotate(14 88 24)">
            <rect x="82" y="16" width="5" height="4" rx="1" strokeWidth="1.2" style={paint(PAPER, INK)} />
            <rect x="90" y="16" width="5" height="4" rx="1" strokeWidth="1.2" style={paint(PAPER, INK)} />
            <rect x="79" y="19" width="19" height="11" rx="2" strokeWidth="1.5" style={paint(PAPER, INK)} />
        </g>
        <path d="M78 36l-4 4M84 37l-2 5" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" style={line(INK)} />
    </Frame>
);

export const PenciltivityIllustration = (props: SVGProps<SVGSVGElement>) => (
    <Frame {...props}>
        <rect x="10" y="10" width="72" height="68" rx="5" strokeWidth="1.5" style={paint(PAPER, ACCENT)} />
        {/* Divergent paths */}
        <path d="M20 64C22 42 30 28 44 24" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" style={line(ACCENT)} />
        <path d="M20 64C34 72 44 72 52 68" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" style={line(ACCENT)} />
        <path d="M20 64C34 58 50 44 74 50" strokeWidth="2" strokeLinecap="round" style={line(INK)} />
        <circle cx="20" cy="64" r="3" style={paint(INK)} />
        {/* Idea */}
        <circle cx="51" cy="21" r="6" strokeWidth="1.5" style={paint(SOFT, ACCENT)} />
        <path d="M48.5 29.5h5M49.5 32h3" strokeWidth="1.5" strokeLinecap="round" style={line(ACCENT)} />
        <path d="M51 11V9M59 14l1.5-1.5M43 14l-1.5-1.5" strokeWidth="1.3" strokeLinecap="round" style={line(ACCENT)} />
        <path
            d="M58 61.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5Z"
            strokeWidth="1.3"
            strokeLinejoin="round"
            style={paint(SOFT, ACCENT)}
        />
        {/* Pencil */}
        <g transform="translate(74 50) rotate(-45)" strokeLinejoin="round">
            <path d="M0 0l10-5v10Z" strokeWidth="1.3" style={paint(WOOD, ACCENT_OUTLINE)} />
            <path d="M0 0l3.6-1.8v3.6Z" style={paint(GRAPHITE)} />
            <rect x="10" y="-5" width="24" height="10" strokeWidth="1.3" style={paint(PENCIL, ACCENT_OUTLINE)} />
            <path d="M10 0h24" strokeWidth="1" opacity="0.35" style={line(ACCENT_OUTLINE)} />
            <rect x="34" y="-5" width="4" height="10" strokeWidth="1.3" style={paint(FERRULE, ACCENT_OUTLINE)} />
            <rect x="38" y="-5" width="6" height="10" rx="2" strokeWidth="1.3" style={paint(ERASER, ACCENT_OUTLINE)} />
        </g>
    </Frame>
);
