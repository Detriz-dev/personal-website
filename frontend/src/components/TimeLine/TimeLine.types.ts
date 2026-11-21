import type { HTMLAttributes, ReactNode } from "react";

export type TimeLineTheme = "light" | "dark";

/** One key project in the details window. */
export interface TimeLineProject {
    /** Bold lead-in, e.g. "Platform Documentation". */
    name: string;
    description: ReactNode;
    /** Optional case study link (app path from src/routes.ts). */
    caseStudyHref?: string;
}

/** Responsibility group; sets the icon color (research / design / development). */
export type TimeLineResponsibilityKind = "research" | "design" | "development";

export interface TimeLineResponsibility {
    /** Material Symbols (Rounded) icon name. */
    icon: string;
    label: string;
    kind: TimeLineResponsibilityKind;
}

/** Content of the details window that opens below a card. */
export interface TimeLineDetails {
    intro: ReactNode;
    /** Key projects; the "Projects" block is left out when empty. */
    projects?: TimeLineProject[];
    responsibilities: TimeLineResponsibility[];
}

/** One stop on the timeline. */
export interface TimeLineItem {
    /** Material Symbols (Rounded) icon in the circle, e.g. "terminal". */
    icon: string;
    /** Domain, e.g. "Developer tools". Shown on one line. */
    title: ReactNode;
    /** Company, shown in the accent color, e.g. "OCADO Technology". */
    company: string;
    /** Details window content. Without it the card has no "+" and doesn't open. */
    details?: TimeLineDetails;
}

/**
 * Figma "history" (Personal Site, 163:3298).
 * Dashed accent line with an icon circle above each card (domain + company + "+").
 * Cards keep titles on one line; the row scrolls horizontally when wider than the viewport.
 * Tapping a card (or its "+") opens its details window: the card widens, the window expands below
 * and pushes the content under the timeline down. One card is open at a time.
 * Copy is passed in by the section.
 */
export type TimeLineProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: TimeLineTheme;
    items: TimeLineItem[];
};
