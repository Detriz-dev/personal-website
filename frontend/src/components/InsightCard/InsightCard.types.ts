import type { ReactNode } from "react";

/**
 * - `default`: visual panel on top, InsightText below (Figma InsightGrid 134:38867). Visual stage 500×168.
 * - `featured`: accent border, text column (`lead` + title + body) beside a larger visual (Figma 134:38828).
 *   Visual stage 592×260.
 */
export type InsightCardVariant = "default" | "featured";

/**
 * - `stage`: visual drawn on the variant's fixed stage, scaled down in steps.
 * - `fluid`: visual (e.g. a responsive SVG) fills the panel width at its own aspect ratio.
 */
export type InsightCardFit = "stage" | "fluid";

/** Research finding card. Renders an `<li>`; use inside a list. */
export type InsightCardProps = {
    variant?: InsightCardVariant;
    fit?: InsightCardFit;
    /** Decorative visual, drawn on the variant's fixed stage and scaled down on narrow cards. */
    visual: ReactNode;
    /** Material Symbols (Rounded) icon name (`default`, or `featured` without `lead`). */
    icon?: string;
    /** Decorative element above the title (`featured` only), e.g. keycaps. Without it, `featured` shows the icon box. */
    lead?: ReactNode;
    title: string;
    /** Wrap emphasized phrases in <strong>. */
    body: ReactNode;
};
