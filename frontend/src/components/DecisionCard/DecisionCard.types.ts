import type { DecisionTextProps } from "../DecisionText/DecisionText.types.ts";

/** Figma "Decision / …" cards (134:39277): DecisionText on a bordered card. Rendered as `<li>`. */
export type DecisionCardProps = Omit<DecisionTextProps, "className"> & {
    className?: string;
};
