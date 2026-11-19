import styles from "./GovernanceFlow.module.css";

const CHECKS = ["Structure", "Tone", "Diátaxis standards"] as const;

// Arrows are list items (only <li> may sit in <ol>), hidden from assistive tech
const Arrow = () => (
    <li className={styles.arrowItem} aria-hidden="true">
        <span className={`material-symbols-rounded ${styles.arrow}`}>arrow_forward</span>
    </li>
);

/** Figma "FlowDiagram" (134:39133): teams write → technical writing review → published. */
const GovernanceFlow = () => (
    <ol className={styles.flow} aria-label="Publishing workflow">
        <li className={styles.node}>
            <span className={styles.iconBox} aria-hidden="true">
                <span className={`material-symbols-rounded ${styles.icon}`}>groups</span>
            </span>
            <span className={styles.name}>Teams write</span>
        </li>
        <Arrow />
        <li className={`${styles.node} ${styles.gate}`}>
            <span className={styles.iconBox} aria-hidden="true">
                <span className={`material-symbols-rounded ${styles.icon}`}>rule</span>
            </span>
            <span className={styles.name}>
                Technical writing
                <br />
                review
            </span>
            <ul className={styles.checks} aria-label="Checks">
                {CHECKS.map((check) => (
                    <li key={check} className={styles.check}>
                        <span className={`material-symbols-rounded ${styles.checkIcon}`} aria-hidden="true">
                            check
                        </span>
                        {check}
                    </li>
                ))}
            </ul>
        </li>
        <Arrow />
        <li className={styles.node}>
            <span className={styles.iconBox} aria-hidden="true">
                <span className={`material-symbols-rounded ${styles.icon}`}>task_alt</span>
            </span>
            <span className={styles.name}>Published</span>
        </li>
    </ol>
);

export default GovernanceFlow;
