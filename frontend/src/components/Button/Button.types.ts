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
    };

/** Renders an <a> when `href` is set (e.g. in-page anchor links). */
export type ButtonAsLinkProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
        href: string;
    };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
