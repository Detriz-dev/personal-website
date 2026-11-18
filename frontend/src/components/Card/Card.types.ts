import type { HTMLAttributes } from "react";

export type CardTheme = "light" | "dark";

/** One row in the card's list. */
export interface CardItem {
    label: string;
    /** Material Symbols (Rounded) icon name, e.g. "check_box". */
    icon: string;
    /** Bold row (e.g. the methodology line, "Scrum"). */
    emphasis?: boolean;
}

/** One tool chip in the card footer (rendered with Tag). */
export interface CardTag {
    label: string;
    /** Icon image src (16px). Use the variant matching `theme`, e.g. assets/tags/git-light.svg. */
    icon?: string;
}

/**
 * Figma "Card" (Personal Site, 66:46121 — light 47:29646 / dark 47:29676).
 * Diagram card: accent header with icon + title, list of items, row of tool tags.
 */
export type CardProps = Omit<HTMLAttributes<HTMLElement>, "children" | "title"> & {
    theme?: CardTheme;
    /** Material Symbols (Rounded) icon in the header, e.g. "data_object". */
    icon: string;
    /** Bold header text, e.g. "Solution development". */
    title: string;
    /** Regular-weight text after the title, e.g. "(How?)". */
    subtitle?: string;
    items: CardItem[];
    tags?: CardTag[];
};
