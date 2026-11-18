import type { HTMLAttributes } from "react";

export type QuestionDiagramTheme = "light" | "dark";

/** One question callout on the diagram. */
export interface DiagramQuestion {
    /** Visible question, e.g. "Why build?". */
    label: string;
    /** Extra copy revealed on hover / focus, e.g. "Discovery & validation". */
    description: string;
    /** Material Symbols (Rounded) icon name. */
    icon: string;
}

/**
 * Figma "Hero diagram" (Personal Site, light 61:29926 / dark 61:29901).
 * Questions are placed clockwise: top (what), left (why), bottom (how).
 */
export type QuestionDiagramProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    theme?: QuestionDiagramTheme;
    why: DiagramQuestion;
    what: DiagramQuestion;
    how: DiagramQuestion;
    /** Center node label, e.g. "Feature". */
    coreLabel: string;
    /** Material Symbols (Rounded) icon for the center node. */
    coreIcon?: string;
};
