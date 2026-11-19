import styles from "./DecisionCard.module.css";
import type { DecisionCardProps } from "./DecisionCard.types.ts";
import DecisionText from "../DecisionText/DecisionText.tsx";

const DecisionCard = ({ className, ...text }: DecisionCardProps) => (
    <li className={[styles.card, className].filter(Boolean).join(" ")}>
        <DecisionText {...text} />
    </li>
);

export default DecisionCard;
