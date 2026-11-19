/**
 * - `accent`: icon on `--color-accent-subtle` (Figma CaseStudy/InsightText 125:3203, insight cards).
 * - `card`: icon on `--color-surface-card`, for use on raised surfaces (QuestionCard 134:38820).
 */
export type InsightTextIconSurface = "accent" | "card";

/** Figma "CaseStudy/InsightText" (125:3203): icon box, title, secondary body. Reused in 06. */
export type InsightTextProps = {
    /** Material Symbols (Rounded) icon name. */
    icon: string;
    title: string;
    body: string;
    iconSurface?: InsightTextIconSurface;
    /** Heading level for the title; defaults to `h4` (under a `h3` group heading). */
    headingLevel?: "h3" | "h4";
    className?: string;
};
