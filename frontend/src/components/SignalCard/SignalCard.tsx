import styles from "./SignalCard.module.css";
import type { SignalCardProps } from "./SignalCard.types.ts";
import InsightText from "../InsightText/InsightText.tsx";

const SignalCard = ({ layout = "stacked", icon, title, body, visual, className }: SignalCardProps) => (
    <li className={[styles.card, styles[layout], className].filter(Boolean).join(" ")}>
        <div className={styles.visual} aria-hidden="true">
            {visual}
        </div>
        <InsightText className={styles.text} icon={icon} title={title} body={body} headingLevel="h3" />
    </li>
);

export default SignalCard;
