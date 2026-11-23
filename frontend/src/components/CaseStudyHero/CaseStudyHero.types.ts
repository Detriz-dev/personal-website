import type { ReactNode } from "react";

/** Figma "Hero" (Personal Site, node 134:38540): NDA note above a two-line title. */
export type CaseStudyHeroProps = {
    /** First title line, in the accent color. */
    titleAccent: string;
    /** Second title line. Omit for a one-line, all-accent title. */
    title?: string;
    /** Content of the NDA note. Omit to hide the note. */
    note?: ReactNode;
    /** Where the NDA note sits relative to the title. Defaults to `above`. */
    notePosition?: "above" | "below";
    /** Content beside the title from 1024px (below it on smaller screens), e.g. a video. */
    aside?: ReactNode;
};
