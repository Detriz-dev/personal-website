import type { HTMLAttributes } from "react";

export type SmartHomeKitWorkTheme = "light" | "dark";

/**
 * Figma "figma-cover" (Personal Site, light 73:13867 / dark 76:2488) — Project section card for the Smart Home Kit.
 * The UI tiles on the right are static images exported from Figma, one set per theme.
 */
export type SmartHomeKitWorkProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: SmartHomeKitWorkTheme;
    /** Target of the "View Project" button. */
    projectHref: string;
};
