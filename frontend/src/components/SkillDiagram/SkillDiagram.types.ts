import type { HTMLAttributes } from "react";

export type SkillDiagramTheme = "light" | "dark";

/**
 * Figma "SkillDiagram" (Personal Site, 66:46316 — light 66:46315 / dark 66:46314).
 * Three process Cards linked by dashed connectors that flow clockwise:
 * Why → What → How (above the cards), How → Why (below).
 * Copy is fixed; only theme is configurable.
 */
export type SkillDiagramProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    theme?: SkillDiagramTheme;
    /** Mark cards, then connectors, as `data-reveal` targets for useReveal. Default false. */
    reveal?: boolean;
};
