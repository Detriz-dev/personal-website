import type { ReactNode } from "react";

/**
 * - `nda`: Figma "NDA note" (134:38548) — lock icon, small secondary text.
 * - `bridge`: Figma "Bridge" (134:38805) — arrow in an accent circle, italic text leading to the next phase.
 */
export type CalloutVariant = "nda" | "bridge";

export type CalloutProps = {
    variant?: CalloutVariant;
    /** Material Symbols name; overrides the variant's default icon. */
    icon?: string;
    children: ReactNode;
    className?: string;
};
