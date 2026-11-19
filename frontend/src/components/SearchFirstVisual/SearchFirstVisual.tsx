import styles from "./SearchFirstVisual.module.css";

// Figma 134:38973: three discipline chips feed one search bar, results tagged by Diátaxis type.
const PERSONAS = [
    { icon: "code", label: "Backend", left: 46, line: 95 },
    { icon: "analytics", label: "Data science", left: 249, line: 311 },
    { icon: "dns", label: "DevOps", left: 480, line: 527 },
] as const;

/** Decorative; draws on DecisionBlock's 624×320 stage. */
const SearchFirstVisual = () => (
    <div className={styles.visual}>
        {PERSONAS.map((p) => (
            <div key={p.label}>
                <span className={styles.chip} style={{ left: p.left }}>
                    <span className={`material-symbols-rounded ${styles.chipIcon}`}>{p.icon}</span>
                    {p.label}
                </span>
                <span className={styles.line} style={{ left: p.line }} />
            </div>
        ))}

        <div className={styles.search}>
            <span className={`material-symbols-rounded ${styles.searchIcon}`}>search</span>
            <span className={styles.query}>expose resources outside the account</span>
            <span className={styles.kbd}>Ctrl K</span>
        </div>

        <div className={styles.results}>
            <div className={styles.result}>
                <span className={`material-symbols-rounded ${styles.resultIcon} ${styles.accentIcon}`}>description</span>
                <span className={`${styles.bar} ${styles.strong}`} />
                <span className={`${styles.tag} ${styles.tagAccent}`}>How-to</span>
            </div>
            <div className={styles.result}>
                <span className={`material-symbols-rounded ${styles.resultIcon}`}>description</span>
                <span className={`${styles.bar} ${styles.subtle}`} />
                <span className={styles.tag}>Reference</span>
            </div>
        </div>
    </div>
);

export default SearchFirstVisual;
