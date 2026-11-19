import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonTheme = "light" | "dark";

interface ButtonBaseProps {
    label: string;
    /** Figma "Style". Named `variant` to avoid clashing with React's `style` prop. */
    variant?: ButtonVariant;
    /** Theme of the section the button sits on. */
    theme?: ButtonTheme;
    /** Material Symbols (Rounded) icon name shown after the label, e.g. "south". Omit for no icon. */
    icon?: string;
}

/** Renders a native <button>. */
export type ButtonAsButtonProps = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
        href?: never;
        to?: never;
    };

/** Renders an <a> when `href` is set (e.g. in-page anchor links). */
export type ButtonAsLinkProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
        href: string;
        /** Opens the link in a new browser tab (sets target="_blank" and a safe rel). */
        openInNewTab?: boolean;
        to?: never;
    };

/** Renders a react-router <Link> when `to` is set — navigates between pages without a full reload. */
export type ButtonAsRouterLinkProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
        /** App path, e.g. ROUTES.platformDocumentation from src/routes.ts. */
        to: string;
        href?: never;
    };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsRouterLinkProps;
