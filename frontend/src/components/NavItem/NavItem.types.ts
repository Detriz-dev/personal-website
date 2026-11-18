import type { AnchorHTMLAttributes } from "react";

export type NavItemTheme = "light" | "dark";
export type NavItemContent = "textAndIcon" | "iconOnly";

/**
 * Figma "NavItem" (Personal Site, node 45:1200).
 * Hover and Focus are interaction states handled in CSS (:hover / :focus-visible), not props.
 */
export type NavItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    /** Visible text. For icon-only items it is used as the accessible name. */
    label: string;
    /** Material Symbols (Rounded) icon name, e.g. "home_repair_service". */
    icon: string;
    /** Link target, e.g. an in-page anchor like "#skills". */
    href: string;
    /** Figma "Content". */
    content?: NavItemContent;
    /** Figma "State = Selected". Sets aria-current="page". */
    selected?: boolean;
    /** Theme of the section the nav item sits on. */
    theme?: NavItemTheme;
};
