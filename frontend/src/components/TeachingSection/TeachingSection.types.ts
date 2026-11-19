import type { HTMLAttributes } from "react";

export type TeachingSectionTheme = "light" | "dark";

/**
 * Teaching section, placed above the Footer.
 * Copy is fixed (docs/site-copy.md — Teaching); only theme is configurable.
 */
export type TeachingSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: TeachingSectionTheme;
};
