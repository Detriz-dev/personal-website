import styles from "./StatStrip.module.css";
import type { StatProps } from "./StatStrip.types.ts";

// <dt> must come first in a <dl>; CSS flips the order so the value sits on top as in Figma
const Stat = ({ value, label }: StatProps) => (
    <div className={styles.stat}>
        <dt className={styles.label}>{label}</dt>
        <dd className={styles.value}>{value}</dd>
    </div>
);

export default Stat;
