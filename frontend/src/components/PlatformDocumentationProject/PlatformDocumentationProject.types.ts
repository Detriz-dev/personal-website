import type { HTMLAttributes } from "react";

export type PlatformDocumentationProjectTheme = "light" | "dark";

/**
 * Figma "figma-cover / Ocado" (Personal Site, 119:38326) — Project section card for the
 * OCADO Technology documentation platform case study.
 * The two screens on the right are static images exported from Figma, one set per theme
 * (light 119:37999 / 119:37856, dark 132:3669 / 132:3722).
 */
export type PlatformDocumentationProjectProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: PlatformDocumentationProjectTheme;
    /** Target of the "View case study" button. The button is hidden until this is set (case study page not built yet). */
    projectHref?: string;
};
