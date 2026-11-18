import type { HTMLAttributes } from "react";

export type SkillSectionTheme = "light" | "dark";

/**
 * Skills section, placed below the Hero.
 * Copy is fixed (docs/site-copy.md — End-to-End Design Process); only theme is configurable.
 */
export type SkillSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: SkillSectionTheme;
};
