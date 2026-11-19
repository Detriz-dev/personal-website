import type { ReactNode } from "react";
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import Tag from "../Tag/Tag.tsx";
import styles from "./TeachingSection.module.css";
import type { TeachingSectionProps } from "./TeachingSection.types.ts";

type Workshop = {
    /** Material Symbols Rounded icon name. */
    icon: string;
    title: string;
    activity: ReactNode;
    outcome: ReactNode;
    tags: string[];
};

// Copy from docs/site-copy.md — Teaching; layout from Figma (TeachingCard 111:2972, section 111:2991)
const WORKSHOPS: Workshop[] = [
    {
        icon: "stacks",
        title: "Product design stack",
        activity: (
            <>
                Participants map the full product design toolkit — <strong>product strategy</strong>,{" "}
                <strong>user research</strong> and <strong>interface design</strong> — and connect each stage through
                practical exercises.
            </>
        ),
        outcome: (
            <>
                Product design as <strong>one connected system</strong>, where every element shapes the final outcome.
            </>
        ),
        tags: ["Product strategy", "User research", "Interface design"],
    },
    {
        icon: "brick",
        title: "Scrum LEGO",
        activity: (
            <>
                Teams run rapid <strong>Scrum</strong> sprints — planning, building and adapting <strong>LEGO</strong>{" "}
                structures while the requirements keep shifting.
            </>
        ),
        outcome: (
            <>
                The three pillars of Scrum — <strong>transparency</strong>, <strong>inspection</strong> and{" "}
                <strong>adaptation</strong> — in practice.
            </>
        ),
        tags: ["Scrum", "Sprints", "LEGO"],
    },
    {
        icon: "stylus_note",
        title: "Penciltivity",
        activity: (
            <>
                Divergent thinking and rapid sketching exercises with nothing more than{" "}
                <strong>paper and pencil</strong>.
            </>
        ),
        outcome: (
            <>
                What <strong>creativity</strong> is, its core elements, and how the <strong>creative process</strong>{" "}
                works in action.
            </>
        ),
        tags: ["Divergent thinking", "Sketching", "Paper & pencil"],
    },
];

const TeachingSection = ({ theme = "light", className, ...sectionProps }: TeachingSectionProps) => {
    const classes = [styles.teachingSection, styles[theme], className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <SectionHeader
                    theme={theme}
                    accent="Workshop"
                    title="and Mentoring"
                    description={
                        <>
                            Previously a <strong>university lecturer</strong> in <strong>Design Thinking</strong>,{" "}
                            <strong>UX</strong> and <strong>Mobile Design</strong>. Today I keep sharing that craft
                            through hands-on <strong>workshops</strong> — here are three I love facilitating.
                        </>
                    }
                />

                <ul className={styles.workshops}>
                    {WORKSHOPS.map((workshop) => (
                        <li key={workshop.title} className={styles.card}>
                            <header className={styles.cardHeader}>
                                <span className={`material-symbols-rounded ${styles.cardIcon}`} aria-hidden="true">
                                    {workshop.icon}
                                </span>
                                <h3 className={styles.cardTitle}>{workshop.title}</h3>
                            </header>

                            <div className={styles.cardBody}>
                                <div className={styles.block}>
                                    <p className={styles.label}>What we do</p>
                                    <p className={styles.copy}>{workshop.activity}</p>
                                </div>
                                <div className={`${styles.block} ${styles.outcome}`}>
                                    <p className={styles.label}>What you’ll learn</p>
                                    <p className={styles.copy}>{workshop.outcome}</p>
                                </div>
                            </div>

                            <div className={styles.tags}>
                                {workshop.tags.map((tag) => (
                                    <Tag key={tag} theme={theme} label={tag} className={styles.tag} />
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TeachingSection;
