import type { HTMLAttributes } from "react";

export type HeroSectionTheme = "light" | "dark";

/**
 * Figma "Hero" (Personal Site, light 61:45959 / dark 61:45958).
 * Copy is fixed (docs/site-copy.md — Hero Section); only links and theme are configurable.
 */
export type HeroSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: HeroSectionTheme;
    /** Primary CTA "How I find answers" — anchors to the design process section. */
    processHref?: string;
    /** Secondary CTA "See selected work" — anchors to the selected work section. */
    workHref?: string;
};
