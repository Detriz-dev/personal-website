import type { HTMLAttributes } from "react";

export type HeroSectionTheme = "light" | "dark";

/**
 * Figma "Hero" (Personal Site, light 61:45959 / dark 61:45958).
 * Copy is fixed; only links and theme are configurable.
 */
export type HeroSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: HeroSectionTheme;
    /** Primary CTA "How I find answers" — anchors to the design process section. */
    processHref?: string;
    /** Secondary CTA "See selected work" — anchors to the Project section. */
    workHref?: string;
    /** Plays the intro animation (see docs/intro-animation-plan.md). */
    intro?: boolean;
};
