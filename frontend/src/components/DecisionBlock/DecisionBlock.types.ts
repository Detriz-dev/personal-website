import type { ReactNode } from "react";
import type { DecisionTextProps } from "../DecisionText/DecisionText.types.ts";

/**
 * - `split`: text column (424px) + visual side by side, no container (Figma 134:38971).
 * - `card`: bordered card with 40px padding and a 344px text column (Figma Diátaxis 134:39079).
 */
export type DecisionBlockVariant = "split" | "card";

/**
 * How the visual slot is framed:
 * - `stage`: raised 320px panel; the visual draws on a fixed 624×320 stage, centered and scaled down
 *   on narrow panels. Decorative, so hidden from assistive tech.
 * - `panel`: raised panel (min 320px), visual laid out fluidly and centered. Content stays accessible.
 * - `none`: no panel; the visual fills the column.
 */
export type DecisionBlockFrame = "stage" | "panel" | "none";

/** One IA decision: DecisionText + visual. Stacks (text first) below 1024px. */
export type DecisionBlockProps = Pick<DecisionTextProps, "eyebrow" | "title" | "body"> & {
    visual: ReactNode;
    /** Visual on the left, text on the right (desktop only). */
    reverse?: boolean;
    variant?: DecisionBlockVariant;
    frame?: DecisionBlockFrame;
};
