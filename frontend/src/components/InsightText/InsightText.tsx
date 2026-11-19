import styles from "./InsightText.module.css";
import type { InsightTextProps } from "./InsightText.types.ts";

const InsightText = ({ icon, title, body, iconSurface = "accent", headingLevel = "h4", className }: InsightTextProps) => {
    const Heading = headingLevel;

    return (
        <div className={[styles.insight, className].filter(Boolean).join(" ")}>
            <span className={`${styles.iconBox} ${styles[iconSurface]}`} aria-hidden="true">
                <span className={`material-symbols-rounded ${styles.icon}`}>{icon}</span>
            </span>
            <div className={styles.text}>
                <Heading className={styles.title}>{title}</Heading>
                <p className={styles.body}>{body}</p>
            </div>
        </div>
    );
};

export default InsightText;
