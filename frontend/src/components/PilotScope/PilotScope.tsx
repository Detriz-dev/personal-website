import styles from "./PilotScope.module.css";

// Figma 134:39344: a 7×3 grid of docs with one highlighted pilot doc → arrow → pilot / rollout steps.
const COLUMNS = 7;
const ROWS = 3;
const PILOT_INDEX = COLUMNS + 2; // row 2, column 3

/** Decorative (restates the phase description): pilot on one doc before rolling out platform-wide. */
const PilotScope = () => (
    <div className={styles.scope} aria-hidden="true">
        <div className={styles.docsFrame}>
            <div className={styles.docsBox}>
                <div className={styles.docs}>
                    <div className={styles.grid}>
                        {Array.from({ length: COLUMNS * ROWS }, (_, i) => (
                            <span key={i} className={i === PILOT_INDEX ? `${styles.doc} ${styles.pilot}` : styles.doc}>
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                            </span>
                        ))}
                    </div>
                    <span className={styles.chip}>
                        <span className={`material-symbols-rounded ${styles.chipIcon}`}>api</span>
                        API Gateway wrapper
                    </span>
                </div>
            </div>
        </div>

        <span className={`material-symbols-rounded ${styles.arrow}`}>arrow_forward</span>

        <div className={styles.rollout}>
            <span className={`${styles.step} ${styles.current}`}>
                <span className={`material-symbols-rounded ${styles.stepIcon}`}>science</span>
                Pilot on one doc
            </span>
            <span className={styles.step}>
                <span className={`material-symbols-rounded ${styles.stepIcon}`}>public</span>
                Roll out platform-wide
            </span>
            <span className={styles.caption}>Recruit active users of a well-understood doc first.</span>
        </div>
    </div>
);

export default PilotScope;
