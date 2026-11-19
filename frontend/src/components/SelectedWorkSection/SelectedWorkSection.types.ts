import type { HTMLAttributes } from "react";

export type SelectedWorkSectionTheme = "light" | "dark";

/**
 * Selected Work section: a stack of project cards (no section header).
 * Cards follow the page theme.
 */
export type SelectedWorkSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: SelectedWorkSectionTheme;
};
