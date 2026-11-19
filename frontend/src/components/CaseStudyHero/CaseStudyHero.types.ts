import type { ReactNode } from "react";

/** Figma "Hero" (Personal Site, node 134:38540): NDA note above a two-line title. */
export type CaseStudyHeroProps = {
    /** First title line, in the accent color. */
    titleAccent: string;
    /** Second title line. */
    title: string;
    /** Content of the NDA note. */
    note: ReactNode;
};
