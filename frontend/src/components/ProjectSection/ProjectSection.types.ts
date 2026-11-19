import type { HTMLAttributes } from "react";

export type ProjectSectionTheme = "light" | "dark";

/**
 * Project section: a stack of project cards (no section header).
 * Cards follow the page theme.
 */
export type ProjectSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: ProjectSectionTheme;
};
