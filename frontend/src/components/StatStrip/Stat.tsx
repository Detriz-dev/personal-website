import styles from "./StatStrip.module.css";
import type { StatProps } from "./StatStrip.types.ts";

// <dt> must come first in a <dl>; CSS flips the order so the value sits on top as in Figma
const Stat = ({ value, label, icon }: StatProps) => (
    <div className={styles.stat}>
        <dt className={styles.label}>{label}</dt>
        <dd className={styles.value}>
            {icon ? (
                <>
                    <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
                        {icon}
                    </span>
                    <span className={styles.srOnly}>{value}</span>
                </>
            ) : (
                value
            )}
        </dd>
    </div>
);

export default Stat;
