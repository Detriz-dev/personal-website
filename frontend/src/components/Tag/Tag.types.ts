import type { HTMLAttributes } from "react";

export type TagTheme = "light" | "dark";

/**
 * Figma "Tag" (Personal Site, 65:46085 — dark 65:46067 / light 65:46076).
 * Small chip with an optional 16px tool icon before the label, e.g. Figma logo + "Figma".
 */
export type TagProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
    label: string;
    /** Theme of the section the tag sits on. */
    theme?: TagTheme;
    /** Icon image src (16px), e.g. assets/tags/figma-light.svg. Use the variant matching `theme`. Omit for no icon. */
    icon?: string;
};
