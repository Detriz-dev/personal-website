import styles from "./BeforeAfter.module.css";
import type { BeforeAfterProps } from "./BeforeAfter.types.ts";

const BeforeAfter = ({ before, after }: BeforeAfterProps) => (
    <div className={styles.beforeAfter}>
        <div className={styles.item}>
            <p className={styles.label}>
                <span className={`material-symbols-rounded ${styles.labelIcon}`} aria-hidden="true">build</span>
                Before · tool name
            </p>
            <p className={styles.before}>
                <del>{before}</del>
            </p>
        </div>

        <span className={`material-symbols-rounded ${styles.arrow}`} aria-hidden="true">arrow_downward</span>

        <div className={`${styles.item} ${styles.afterItem}`}>
            <p className={`${styles.label} ${styles.afterLabel}`}>
                <span className={`material-symbols-rounded ${styles.labelIcon}`} aria-hidden="true">flag</span>
                After · developer intent
            </p>
            <p className={styles.after}>{after}</p>
        </div>
    </div>
);

export default BeforeAfter;
