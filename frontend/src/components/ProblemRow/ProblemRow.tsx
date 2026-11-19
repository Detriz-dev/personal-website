import styles from "./ProblemRow.module.css";
import type { ProblemRowProps } from "./ProblemRow.types.ts";

const ProblemRow = ({ icon, title, body }: ProblemRowProps) => (
    <li className={styles.row}>
        <span className={styles.iconBox} aria-hidden="true">
            <span className={`material-symbols-rounded ${styles.icon}`}>{icon}</span>
        </span>
        <div className={styles.text}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.body}>{body}</p>
        </div>
    </li>
);

export default ProblemRow;
