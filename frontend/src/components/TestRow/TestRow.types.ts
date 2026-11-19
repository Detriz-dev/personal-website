import type { ReactNode } from "react";

/** The three columns of a test row (Figma "CaseStudy/TestRow" 128:3346). */
export type TestRowFindings = {
    tested: ReactNode;
    saw: ReactNode;
    changed: ReactNode;
};

/**
 * Figma "CaseStudy/TestRow" (128:3346): bordered card with an icon, eyebrow and `<h3>` title on the left.
 * - With `findings`: "What we tested" → "What we saw" → "What changed" columns.
 * - With `body`: one paragraph beside the title (Figma Rollout timeline head 134:39427); `children` go below, full width.
 */
export type TestRowProps = {
    /** Material Symbols (Rounded) icon name. */
    icon: string;
    /** e.g. "Test 01". */
    eyebrow: string;
    title: string;
    findings?: TestRowFindings;
    body?: ReactNode;
    /** Full-width content under the row, e.g. a visual. */
    children?: ReactNode;
    className?: string;
};
