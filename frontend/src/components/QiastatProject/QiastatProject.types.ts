import type { HTMLAttributes } from "react";

export type QiastatProjectTheme = "light" | "dark";

/**
 * Figma "figma-cover / QIAstat-Dx Rise" (Personal Site, 187:3298) — Project section card for the
 * QIAstat-Dx Rise case study. No UI screens (NDA): a click-to-play product video instead.
 */
export type QiastatProjectProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: QiastatProjectTheme;
    /** In-app route of the "View case study" button. The button is hidden when unset. */
    projectHref?: string;
};
