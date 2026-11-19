import type { ReactNode } from "react";

/**
 * - `stacked`: visual on top, text below (Figma 134:39550, 134:39581).
 * - `wide`: text left, visual right on desktop; stacks below 1024px (Figma 134:39608).
 */
export type SignalCardLayout = "stacked" | "wide";

/** Figma "Signal" card (06 Data analysis): decorative visual panel + InsightText (`<h3>`). Renders an `<li>`. */
export type SignalCardProps = {
    layout?: SignalCardLayout;
    /** Material Symbols (Rounded) icon name. */
    icon: string;
    title: string;
    body: string;
    /** Decorative drawing; rendered `aria-hidden` on a raised panel. */
    visual: ReactNode;
    className?: string;
};
