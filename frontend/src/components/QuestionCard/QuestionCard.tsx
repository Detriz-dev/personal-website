import styles from "./QuestionCard.module.css";
import type { QuestionCardProps } from "./QuestionCard.types.ts";
import InsightText from "../InsightText/InsightText.tsx";

const QuestionCard = ({ icon = "help", question, body }: QuestionCardProps) => (
    <li className={styles.card}>
        <InsightText icon={icon} title={question} body={body} iconSurface="card" />
    </li>
);

export default QuestionCard;
