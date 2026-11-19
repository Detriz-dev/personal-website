import type { HTMLAttributes } from "react";

export type ExperienceSectionTheme = "light" | "dark";

/**
 * Experience section, placed below the Skills section.
 * Copy is fixed (docs/site-copy.md — 10+ Years of Experience); only theme is configurable.
 */
export type ExperienceSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: ExperienceSectionTheme;
};
