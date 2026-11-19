import styles from "./SignalVisuals.module.css";

// Figma 06 Data analysis visuals. Decorative (SignalCard renders them aria-hidden); the data is made up,
// hence the "Illustrative" chip. Labels are Figma-only.

const IllustrativeChip = () => (
    <span className={`${styles.chip} ${styles.outline}`}>
        <span className={`material-symbols-rounded ${styles.chipIcon}`}>info</span>
        Illustrative
    </span>
);

const QUERIES = [
    { query: "api gateway", icon: "build", label: "Tool name" },
    { query: "expose resource outside account", icon: "flag", label: "Job" },
    { query: "403 forbidden on deploy", icon: "error", label: "Error phrase" },
    { query: "service mesh setup", icon: "search_off", label: "0 results", zero: true },
] as const;

/** Figma 134:39551: search query log, each query tagged by how it was phrased; last one returns nothing. */
export const SearchQueriesVisual = () => (
    <div className={styles.search}>
        <ul className={styles.log}>
            {QUERIES.map((row) => (
                <li key={row.query} className={styles.query}>
                    <span className={`material-symbols-rounded ${styles.queryIcon}`}>search</span>
                    <span className={"zero" in row ? `${styles.queryText} ${styles.muted}` : styles.queryText}>
                        {row.query}
                    </span>
                    <span className={`${styles.chip} ${"zero" in row ? styles.error : styles.raised}`}>
                        <span className={`material-symbols-rounded ${styles.chipIcon}`}>{row.icon}</span>
                        {row.label}
                    </span>
                </li>
            ))}
        </ul>
        <IllustrativeChip />
    </div>
);

// Page views per page, sorted (Figma 134:39583–39596): 3 staples, 5 quick-lookup, 6 ghost pages
const STAPLES = [150, 132, 118];
const LOOKUPS = [70, 60, 52, 46, 40];
const GHOSTS = 6;

/** Figma 134:39582: pages sorted by traffic, split into three tiers. */
export const ContentTiersVisual = () => (
    <div className={styles.tiers}>
        <IllustrativeChip />
        <div className={styles.chart}>
            {STAPLES.map((height, i) => (
                <span key={`s${i}`} className={`${styles.bar} ${styles.staple}`} style={{ height }} />
            ))}
            {LOOKUPS.map((height, i) => (
                <span key={`l${i}`} className={styles.bar} style={{ height }} />
            ))}
            {Array.from({ length: GHOSTS }, (_, i) => (
                <span key={`g${i}`} className={`${styles.bar} ${styles.ghost}`} />
            ))}
            <span className={styles.axis} />
            <span className={`${styles.tier} ${styles.stapleTier}`}>Daily staples</span>
            <span className={`${styles.tier} ${styles.lookupTier}`}>Quick-lookup</span>
            <span className={`${styles.tier} ${styles.ghostTier}`}>Ghost pages</span>
        </div>
    </div>
);
