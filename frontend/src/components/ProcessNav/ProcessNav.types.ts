export type ProcessNavStep = {
    /** In-page anchor, e.g. "#discovery". */
    href: string;
    label: string;
    /** Phase number shown before the label, e.g. "01". Omit for Overview. */
    number?: string;
};

/**
 * Figma "ProcessNav / sticky" (Personal Site, node 134:39838).
 * Sticky case-study nav: back link, Overview + phase steps, theme toggle (D10).
 */
export type ProcessNavProps = {
    steps: readonly ProcessNavStep[];
    /** Href of the current step (from `useActiveSection`). */
    activeHref?: string;
    /** Router path for the back button, e.g. "/#projects". */
    backTo: string;
    backLabel: string;
};
