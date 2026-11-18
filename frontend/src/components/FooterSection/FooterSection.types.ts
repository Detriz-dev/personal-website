import type { HTMLAttributes } from "react";

export type FooterSectionTheme = "light" | "dark";

/**
 * Figma "Footer" (Personal Site, 67:46437 — light 67:46418 / dark 67:46399).
 * Portrait, closing headline, contact details and social links.
 * Copy is fixed (docs/site-copy.md — Footer / Contact); theme and profile URLs are configurable.
 */
export type FooterSectionProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    theme?: FooterSectionTheme;
    linkedinHref: string;
    githubHref: string;
};
