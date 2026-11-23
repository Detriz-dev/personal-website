import styles from "./InsightCard.module.css";
import type { InsightCardProps } from "./InsightCard.types.ts";
import InsightText from "../InsightText/InsightText.tsx";

const InsightCard = ({ variant = "default", fit = "stage", visual, icon = "lightbulb", lead, title, body }: InsightCardProps) => (
    <li className={`${styles.card} ${styles[variant]} ${styles[fit]}`}>
        <div className={styles.visual} aria-hidden="true">
            <div className={styles.frame}>
                <div className={styles.stage}>{visual}</div>
            </div>
        </div>

        {variant === "featured" && lead ? (
            <div className={styles.text}>
                {lead && <div aria-hidden="true">{lead}</div>}
                <div className={styles.copy}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.body}>{body}</p>
                </div>
            </div>
        ) : (
            <InsightText
                icon={icon}
                title={title}
                body={body}
                className={variant === "featured" ? styles.text : undefined}
            />
        )}
    </li>
);

export default InsightCard;
