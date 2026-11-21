import type { HTMLAttributes, ReactNode } from "react";

export type TimeLineTheme = "light" | "dark";

/** One stop on the timeline. */
export interface TimeLineItem {
    /** Material Symbols (Rounded) icon in the circle, e.g. "terminal". */
    icon: string;
    /** Domain, e.g. "Developer tools". Shown on one line. */
    title: ReactNode;
    /** Company, shown in the accent color, e.g. "OCADO Technology". */
    company: string;
}

/**
 * Figma "history" (Personal Site, 163:3298).
 * Dashed accent line with an icon circle above each card (domain + company + "+").
 * Cards keep titles on one line; the row scrolls horizontally when wider than the viewport.
 * Copy is passed in by the section.
 */
export type TimeLineProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: TimeLineTheme;
    items: TimeLineItem[];
};
