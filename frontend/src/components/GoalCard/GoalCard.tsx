import styles from "./GoalCard.module.css";
import type { GoalCardProps } from "./GoalCard.types.ts";

const GoalCard = ({ visual, audienceIcon, audience, title, text }: GoalCardProps) => (
    <article className={styles.card}>
        <div className={styles.visual} aria-hidden="true">
            {visual}
        </div>
        <p className={styles.audience}>
            <span className={`material-symbols-rounded ${styles.audienceIcon}`} aria-hidden="true">
                {audienceIcon}
            </span>
            {audience}
        </p>
        <div className={styles.text}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.body}>{text}</p>
        </div>
    </article>
);

export default GoalCard;
