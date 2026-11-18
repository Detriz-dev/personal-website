import type { HTMLAttributes } from "react";

export type TopNavTheme = "light" | "dark";

/** One section link, rendered with NavItem (Content = Text and icon). */
export interface TopNavLink {
    label: string;
    /** Material Symbols (Rounded) icon name, e.g. "home_repair_service". */
    icon: string;
    /** In-page anchor, e.g. "#skills". */
    href: string;
}

/**
 * Figma "TopNav" (Personal Site, node 42:29568).
 * Figma "Screen" (web / mobile) is handled responsively in CSS, not as a prop.
 */
export type TopNavProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    /** Theme of the section the nav sits on. */
    theme?: TopNavTheme;
    /** Href of the home/logo button on the left. */
    homeHref?: string;
    /** Section links (desktop row; mobile menu). */
    links: TopNavLink[];
    /** Href of the currently selected link — marks that NavItem as Selected. */
    activeHref?: string;
    /** GitHub profile URL (desktop). Omit to hide. */
    githubHref?: string;
    /** LinkedIn profile URL (desktop). Omit to hide. */
    linkedinHref?: string;
    /** Called by the dark/light mode toggle. Omit to hide the toggle. */
    onThemeToggle?: () => void;
    /** Mobile only: whether the menu is open (controlled). */
    menuOpen?: boolean;
    /** Mobile only: called by the hamburger button. */
    onMenuToggle?: () => void;
};
