import type { HTMLAttributes, ReactNode } from "react";

export type TimeLineTheme = "light" | "dark";

/** One stop on the timeline. */
export interface TimeLineItem {
    /** Material Symbols (Rounded) icon in the circle, e.g. "terminal". */
    icon: string;
    /** Domain, e.g. "Developer tools". Use <br /> to control line breaks as in Figma. */
    title: ReactNode;
    /** Company, shown in the accent color, e.g. "OCADO Technology". */
    company: string;
}

/**
 * Figma "TimeLine" (Personal Site, 66:46393 — light 66:46392 / dark 66:46391).
 * Dashed accent line with an icon circle above each card (domain + company).
 * Copy comes from docs/site-copy.md and is passed in by the section.
 */
export type TimeLineProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: TimeLineTheme;
    items: TimeLineItem[];
};
