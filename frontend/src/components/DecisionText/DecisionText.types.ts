import type { ReactNode } from "react";

/** Figma "CaseStudy/DecisionText" (126:3246): accent eyebrow, `<h3>` title, secondary body. */
export type DecisionTextProps = {
    /** e.g. "Decision 01". */
    eyebrow: string;
    title: string;
    body: ReactNode;
    className?: string;
};
