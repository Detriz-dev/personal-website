export type CaseStudyOverviewProps = {
    /** "My responsibilities" list: links to the phase sections (copy file → "My responsibilities"). */
    responsibilities: readonly { href: string; label: string }[];
};
