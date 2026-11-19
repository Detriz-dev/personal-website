import type { ReactNode } from "react";

/** "nda" = Figma "NDA note" (node 134:38548). "bridge" is added in Step 6.1. */
export type CalloutVariant = "nda";

export type CalloutProps = {
    variant?: CalloutVariant;
    children: ReactNode;
    className?: string;
};
