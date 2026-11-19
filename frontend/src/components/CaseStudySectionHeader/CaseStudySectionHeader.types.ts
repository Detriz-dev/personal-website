import type { ReactNode } from "react";

/**
 * - `overview`: `<h2>` with accent line + title line, description beside it on desktop (Figma 134:38558).
 * - `sub`: `<h3>` single line with the description below it (Figma 134:38662, 135:39894).
 * `phase` (numbered 01–06) gets added in Step 6.
 */
export type CaseStudySectionHeaderVariant = "overview" | "sub";

/** Case study section header: divider line on top, heading, optional description. Uses `--color-*` tokens. */
export type CaseStudySectionHeaderProps = {
    variant?: CaseStudySectionHeaderVariant;
    /** First heading line in the accent color (`overview` only). */
    accent?: string;
    title: string;
    /** Intro copy; wrap emphasized phrases in <strong>. */
    description?: ReactNode;
    className?: string;
};
