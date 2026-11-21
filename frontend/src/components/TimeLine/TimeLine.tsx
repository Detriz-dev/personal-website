import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./TimeLine.module.css";
import type { TimeLineDetails, TimeLineProps, TimeLineResponsibilityKind } from "./TimeLine.types.ts";

// How long the scrollbar stays visible after the last scroll event
const SCROLLBAR_HIDE_DELAY = 800;

// Column headings, same wording as the Skills section (SkillDiagram)
const KINDS: { kind: TimeLineResponsibilityKind; heading: string }[] = [
    { kind: "research", heading: "Problem definition" },
    { kind: "design", heading: "Solution design" },
    { kind: "development", heading: "Solution development" },
];

const Details = ({ details }: { details: TimeLineDetails }) => (
    <div className={styles.details}>
        <p className={styles.intro}>{details.intro}</p>

        <h4 className={styles.label}>Projects</h4>
        <ul className={styles.projects}>
            {details.projects.map((project) => (
                <li key={project.name}>
                    <strong>{project.name}:</strong> {project.description}
                    {project.caseStudyHref && (
                        <>
                            {" "}
                            <Link className={styles.caseStudy} to={project.caseStudyHref}>
                                <span className={styles.caseStudyText}>Case study</span>
                                <span className={`material-symbols-rounded ${styles.caseStudyIcon}`} aria-hidden="true">
                                    arrow_outward
                                </span>
                            </Link>
                        </>
                    )}
                </li>
            ))}
        </ul>

        <h4 className={styles.label}>Responsibilities</h4>
        {/* One column per group, each with its heading */}
        <div className={styles.responsibilities}>
            {KINDS.map(({ kind, heading }) => {
                const group = details.responsibilities.filter((item) => item.kind === kind);
                if (group.length === 0) return null;
                return (
                    <div key={kind} className={styles.group}>
                        <h5 className={styles.groupHeading}>{heading}</h5>
                        <ul className={styles.groupList}>
                            {group.map((item) => (
                                <li key={item.label} className={styles.responsibility}>
                                    <span
                                        className={`material-symbols-rounded ${styles.responsibilityIcon}`}
                                        aria-hidden="true"
                                    >
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
);

const TimeLine = ({ theme = "light", items, className, onScroll, ...divProps }: TimeLineProps) => {
    const [scrolling, setScrolling] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const hideTimer = useRef<number | undefined>(undefined);
    const scroller = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    // Width of each card while closed, recorded when it opens (to predict where the row settles)
    const closedWidths = useRef<number[]>([]);
    const baseId = useId();

    useEffect(() => () => window.clearTimeout(hideTimer.current), []);

    const handleScroll: TimeLineProps["onScroll"] = (event) => {
        setScrolling(true);
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setScrolling(false), SCROLLBAR_HIDE_DELAY);
        onScroll?.(event);
    };

    const toggle = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
            return;
        }

        const item = itemRefs.current[index];
        const row = scroller.current;
        if (item && row) {
            closedWidths.current[index] = item.offsetWidth;

            // Line the opened card up with the column. If the card that is closing sits to its left,
            // it shrinks back to its closed width, so subtract that from the target up front.
            let target = item.offsetLeft;
            const previous = openIndex === null ? null : itemRefs.current[openIndex];
            if (openIndex !== null && openIndex < index && previous) {
                target -= previous.offsetWidth - (closedWidths.current[openIndex] ?? previous.offsetWidth);
            }

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            row.scrollTo({ left: target, behavior: reduceMotion ? "auto" : "smooth" });
        }

        setOpenIndex(index);
    };

    const classes = [styles.timeLine, styles[theme], className].filter(Boolean).join(" ");

    return (
        <div
            {...divProps}
            ref={scroller}
            className={classes}
            onScroll={handleScroll}
            data-scrolling={scrolling || undefined}
        >
            <div className={styles.track}>
                <span className={styles.line} aria-hidden="true" data-reveal="draw" />

                <ol className={styles.list}>
                    {items.map((item, index) => {
                        const open = openIndex === index;
                        const id = `${baseId}-${index}`;

                        return (
                            <li
                                key={item.company}
                                ref={(node) => {
                                    itemRefs.current[index] = node;
                                }}
                                className={styles.item}
                                data-reveal="rise"
                                data-open={open || undefined}
                            >
                                <span className={styles.marker} aria-hidden="true">
                                    <span className={`material-symbols-rounded ${styles.icon}`}>{item.icon}</span>
                                </span>
                                <div className={styles.card}>
                                    <h3 className={styles.title} id={`${id}-title`}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.company} id={`${id}-company`}>
                                        {item.company}
                                    </p>
                                    {/* The button's hit area covers the whole card, so tapping anywhere opens it */}
                                    {item.details && (
                                        <button
                                            type="button"
                                            className={styles.more}
                                            aria-expanded={open}
                                            aria-controls={`${id}-details`}
                                            aria-labelledby={`${id}-title ${id}-company`}
                                            onClick={() => toggle(index)}
                                        >
                                            <span className={`material-symbols-rounded ${styles.moreIcon}`} aria-hidden="true">
                                                add
                                            </span>
                                        </button>
                                    )}
                                </div>
                                {item.details && (
                                    <div className={styles.panel} id={`${id}-details`} inert={!open}>
                                        <div className={styles.panelInner}>
                                            <Details details={item.details} />
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default TimeLine;
