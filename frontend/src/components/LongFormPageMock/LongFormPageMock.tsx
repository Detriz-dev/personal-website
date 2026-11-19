import styles from "./LongFormPageMock.module.css";

// Figma "Long-form page mock" (134:38839): a long page with a find bar and a highlighted match,
// beside a sticky "On this page" TOC. Fills InsightCard's featured 592×260 stage; positions are Figma values.

type Line = { top: number; left?: number; width: number; tone?: "heading" | "match" };

const PAGE_LINES: readonly Line[] = [
    { top: 19, width: 200, tone: "heading" },
    { top: 43, width: 280 },
    { top: 61, width: 260 },
    { top: 79, width: 220 },
    { top: 97, width: 120, tone: "match" },
    { top: 99, left: 147, width: 140 },
    { top: 119, width: 270 },
    { top: 137, width: 240 },
    { top: 155, width: 180, tone: "heading" },
    { top: 179, width: 280 },
    { top: 197, width: 250 },
    { top: 215, width: 230 },
];

const TOC_LINES = [96, 120, 80, 104, 72] as const;
const TOC_ACTIVE = 1;

const LongFormPageMock = () => (
    <>
        <div className={styles.page}>
            {PAGE_LINES.map(({ top, left = 19, width, tone }, i) => (
                <span key={i} className={`${styles.line} ${tone ? styles[tone] : ""}`} style={{ top, left, width }} />
            ))}
            <div className={styles.findBar}>
                <span className={`material-symbols-rounded ${styles.findIcon}`}>search</span>
                <span className={styles.findQuery}>expose resource</span>
                <span className={styles.findCount}>1/3</span>
            </div>
        </div>

        <div className={styles.toc}>
            <span className={styles.tocTitle}>On this page</span>
            {TOC_LINES.map((width, i) => (
                <span
                    key={i}
                    className={`${styles.tocLine} ${i === TOC_ACTIVE ? styles.tocActive : ""}`}
                    style={{ width }}
                />
            ))}
        </div>

        <div className={styles.annotation}>
            <span className={`material-symbols-rounded ${styles.annotationIcon}`}>north_west</span>
            sticky in-page navigation
        </div>
    </>
);

export default LongFormPageMock;
