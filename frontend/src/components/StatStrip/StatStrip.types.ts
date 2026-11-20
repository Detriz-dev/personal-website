/** Figma "CaseStudy/Stat" (Personal Site, node 121:3186). */
export type StatProps = {
    value: string;
    label: string;
    /** Material Symbols (Rounded) icon shown in place of `value`; `value` stays as screen-reader text. */
    icon?: string;
};

/** Figma "StatStrip" (Personal Site, node 134:38551). */
export type StatStripProps = {
    stats: readonly StatProps[];
    className?: string;
};
