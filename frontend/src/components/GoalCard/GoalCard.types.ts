import type { ReactNode } from "react";

/** Figma "GoalCard" (Personal Site, GoalPair 134:38667): visual, audience chip, title, text. */
export type GoalCardProps = {
    /** Decorative visual, e.g. <OnePlaceVisual />. Rendered in a 200px raised panel. */
    visual: ReactNode;
    /** Material Symbols Rounded icon name for the audience chip. */
    audienceIcon: string;
    audience: string;
    title: string;
    text: string;
};
