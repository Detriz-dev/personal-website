import type { ReactNode } from "react";

/**
 * - `overview`: `<h2>` with accent line + title line, description beside it on desktop (Figma 134:38558).
 * - `sub`: `<h3>` single line with the description below it (Figma 134:38662, 135:39894).
 * - `phase`: `<h2>` with a "Phase NN" eyebrow above the title; same layout as `overview` (Figma 134:38748).
 */
export type CaseStudySectionHeaderVariant = "overview" | "sub" | "phase";

export type CaseStudySectionHeaderTag = { icon: string; label: string };

/** Case study section header: divider line on top, heading, optional description. Uses `--color-*` tokens. */
export type CaseStudySectionHeaderProps = {
    variant?: CaseStudySectionHeaderVariant;
    /** First heading line in the accent color (`overview` only). */
    accent?: string;
    /** Phase number, e.g. "01" (`phase` only). Rendered as the "Phase 01" eyebrow. */
    number?: string;
    title: string;
    /** Intro copy; wrap emphasized phrases in <strong>. */
    description?: ReactNode;
    /** Chips under the description, e.g. the tech stack (Figma 134:39170). `icon` is a Material Symbols name. */
    tags?: readonly CaseStudySectionHeaderTag[];
    /** Extra content under the description, in the description column (e.g. 06's before/after chips, Figma 134:39534). */
    aside?: ReactNode;
    className?: string;
};
