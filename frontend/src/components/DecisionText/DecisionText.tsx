import styles from "./DecisionText.module.css";
import type { DecisionTextProps } from "./DecisionText.types.ts";

const DecisionText = ({ eyebrow, title, body, className }: DecisionTextProps) => (
    <div className={[styles.text, className].filter(Boolean).join(" ")}>
        <h3 className={styles.title}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            {title}
        </h3>
        <p className={styles.body}>{body}</p>
    </div>
);

export default DecisionText;
