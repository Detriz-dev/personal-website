/** One stratum: label on the band, title + body beside it. */
export interface ArchaeologyLayer {
    /** Material Symbols (Rounded) icon name. */
    icon: string;
    /** Short band label, e.g. "History". */
    label: string;
    title: string;
    body: string;
}

/** Figma "ArchaeologyStack" (134:38755): dashed depth axis + stacked strata, top = surface. */
export type ArchaeologyStackProps = {
    layers: readonly ArchaeologyLayer[];
    className?: string;
};
