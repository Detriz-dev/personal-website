import type { HTMLAttributes, ReactNode } from "react";

export type SectionHeaderTheme = "light" | "dark";

/**
 * Figma "SectionHeader" (Personal Site, light 63:45968 / dark 63:45969).
 * Divider line on top, two-line heading (accent line + title line), description below the heading.
 * Copy comes from docs/site-copy.md and is passed in by the section.
 */
export type SectionHeaderProps = Omit<HTMLAttributes<HTMLElement>, "title" | "children"> & {
    theme?: SectionHeaderTheme;
    /** First heading line, in the accent color, e.g. "End-to-end". */
    accent: string;
    /** Second heading line, e.g. "design process". */
    title: string;
    /** Intro copy; wrap emphasized phrases in <strong>. */
    description?: ReactNode;
    /** Show the divider line on top. Default true; turn off when the section above already ends with a border. */
    divider?: boolean;
};
