import styles from "./SessionDepthVisual.module.css";

// Figma 134:39610. Decorative (SignalCard renders it aria-hidden). Labels are Figma-only.

// Returning users: 5 weeks × 5 users, filled = came back (rows top to bottom, as in Figma 134:39613–39637)
const VISITS = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
];

const PATH = ["1", "2", "3", "4"];

/** Returning-user grid that fills up over time + a deep vs. bouncing session path. */
const SessionDepthVisual = () => (
    <div className={styles.visual}>
        <div className={styles.group}>
            <span className={styles.title}>Returning users</span>
            <div className={styles.grid}>
                {VISITS.flat().map((visit, i) => (
                    <span key={i} className={visit ? `${styles.cell} ${styles.filled}` : styles.cell} />
                ))}
            </div>
        </div>

        <div className={styles.group}>
            <span className={styles.title}>Cross-page sessions</span>
            <div className={styles.session}>
                <div className={styles.path}>
                    {PATH.map((page) => (
                        <span key={page} className={`${styles.page} ${styles.deep}`}>
                            {page}
                        </span>
                    ))}
                </div>
                <span className={`${styles.caption} ${styles.deepCaption}`}>Working through</span>
            </div>
            <div className={styles.session}>
                <div className={styles.path}>
                    <span className={styles.page}>1</span>
                    <span className={`material-symbols-rounded ${styles.exit}`}>logout</span>
                </div>
                <span className={styles.caption}>Bouncing early</span>
            </div>
        </div>
    </div>
);

export default SessionDepthVisual;
