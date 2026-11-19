import type { CSSProperties } from "react";
import styles from "./InsightVisuals.module.css";

// Decorative visuals for the 02 User research insight cards (Figma 134:38830, 134:38870, 134:38885, 134:38901, 134:38923).
// Each fills InsightCard's 500×168 stage; positions are Figma values.

type Bar = { top: number; left: number; width: number; tone: "strong" | "subtle" | "accent" | "fill" | "outline" };

const bars = (items: readonly Bar[]) =>
    items.map(({ top, left, width, tone }, i) => (
        <span key={i} className={`${styles.bar} ${styles[tone]}`} style={{ top, left, width } as CSSProperties} />
    ));

/** "Ctrl + F" keycaps above the featured title. */
export const KeycapsVisual = () => (
    <div className={styles.keycaps}>
        <kbd className={`${styles.key} ${styles.keyWide}`}>Ctrl</kbd>
        <span className={styles.plus}>+</span>
        <kbd className={styles.key}>F</kbd>
    </div>
);

const STEPS = [
    { n: 1, width: 180 },
    { n: 2, width: 220 },
    { n: 3, width: 150, missing: true },
] as const;

/** Numbered steps; the third is faded with a dashed marker (the missing guide). */
export const HowToVisual = () => (
    <ol className={styles.steps}>
        {STEPS.map((step) => (
            <li key={step.n} className={"missing" in step ? `${styles.step} ${styles.stepMissing}` : styles.step}>
                <span className={styles.stepNumber}>{step.n}</span>
                <span className={styles.stepLine} style={{ width: step.width }} />
            </li>
        ))}
    </ol>
);

const CODE_LINES: readonly Bar[] = [
    { top: 17, left: 15, width: 40, tone: "accent" },
    { top: 17, left: 63, width: 90, tone: "strong" },
    { top: 41, left: 15, width: 24, tone: "subtle" },
    { top: 41, left: 47, width: 60, tone: "accent" },
    { top: 41, left: 115, width: 70, tone: "strong" },
    { top: 65, left: 15, width: 24, tone: "subtle" },
    { top: 65, left: 47, width: 110, tone: "strong" },
    { top: 89, left: 15, width: 50, tone: "accent" },
    { top: 89, left: 73, width: 40, tone: "subtle" },
];

/** A code block next to an empty dashed slot (the missing example). */
export const CodeExamplesVisual = () => (
    <>
        <div className={styles.codeBlock}>{bars(CODE_LINES)}</div>
        <div className={styles.empty}>
            <span className="material-symbols-rounded">question_mark</span>
        </div>
    </>
);

const MIXED_LINES: readonly Bar[] = [
    { top: 13, left: 15, width: 180, tone: "fill" },
    { top: 27, left: 15, width: 140, tone: "strong" },
    { top: 41, left: 15, width: 200, tone: "outline" },
    { top: 55, left: 15, width: 120, tone: "fill" },
    { top: 69, left: 15, width: 170, tone: "subtle" },
    { top: 83, left: 15, width: 190, tone: "strong" },
    { top: 97, left: 15, width: 150, tone: "outline" },
    { top: 111, left: 15, width: 110, tone: "fill" },
];

const LEGEND = [
    { tone: "fill", label: "Reference" },
    { tone: "strong", label: "Tutorial" },
    { tone: "outline", label: "Explanation" },
] as const;

/** A page mixing three content types, with a legend. */
export const ContentTypesVisual = () => (
    <>
        <div className={styles.mixedPage}>{bars(MIXED_LINES)}</div>
        <ul className={styles.legend}>
            {LEGEND.map(({ tone, label }) => (
                <li key={label} className={styles.legendItem}>
                    <span className={`${styles.swatch} ${styles[tone]}`} />
                    {label}
                </li>
            ))}
        </ul>
    </>
);

// Three category trees, one per discipline: root left edge, leaf column left edges + leaf counts, label position
const TREES = [
    { label: "Backend", root: 68, labelLeft: 61, columns: [[45, 1], [77, 3], [109, 2]] },
    { label: "Data science", root: 220, labelLeft: 200, columns: [[181, 2], [213, 1], [245, 1], [277, 2]] },
    { label: "DevOps", root: 372, labelLeft: 367, columns: [[365, 3], [397, 2]] },
] as const;

/** Three differently shaped category trees (one per discipline). */
export const TaxonomyVisual = () => (
    <>
        <svg className={styles.trees} width="500" height="168" viewBox="0 0 500 168" focusable="false">
            {TREES.map(({ label, root, columns }) => {
                const first = columns[0][0] + 11;
                const last = columns[columns.length - 1][0] + 11;
                return (
                    <g key={label}>
                        <rect className={styles.fill} x={root} y={20} width={40} height={14} rx={4} />
                        <rect className={styles.strong} x={root + 19} y={34} width={2} height={14} />
                        <rect className={styles.strong} x={first} y={48} width={last - first} height={2} />
                        {columns.map(([left, count]) => (
                            <g key={left}>
                                <rect className={styles.strong} x={left + 10} y={48} width={2} height={10} />
                                {Array.from({ length: count }, (_, i) => (
                                    <rect
                                        key={i}
                                        className={styles.subtle}
                                        x={left}
                                        y={60 + i * 16}
                                        width={22}
                                        height={10}
                                        rx={3}
                                    />
                                ))}
                            </g>
                        ))}
                    </g>
                );
            })}
        </svg>
        {TREES.map(({ label, labelLeft }) => (
            <span key={label} className={styles.treeLabel} style={{ left: labelLeft }}>
                {label}
            </span>
        ))}
    </>
);
