import styles from "./QuestionDiagram.module.css";
import type { DiagramQuestion, QuestionDiagramProps } from "./QuestionDiagram.types.ts";
import circleLight from "../../assets/diagram/circle-light.png";
import circleDark from "../../assets/diagram/circle-dark.png";

const Question = ({ question, className }: { question: DiagramQuestion; className: string }) => (
    <div className={`${styles.question} ${className}`} tabIndex={0}>
        <span className={styles.iconBox} aria-hidden="true">
            <span className={`material-symbols-rounded ${styles.icon}`}>{question.icon}</span>
        </span>
        <span className={styles.text}>
            <span className={styles.label}>{question.label}</span>
            <span className={styles.descriptionWrap}>
                <span className={styles.description}>
                    <span className={styles.descriptionText}>{question.description}</span>
                </span>
            </span>
        </span>
    </div>
);

const QuestionDiagram = ({
    theme = "light",
    why,
    what,
    how,
    coreLabel,
    coreIcon = "deployed_code",
    className,
    ...divProps
}: QuestionDiagramProps) => {
    const classes = [styles.diagram, styles[theme], className].filter(Boolean).join(" ");

    return (
        <div {...divProps} className={classes}>
            <img
                className={styles.circle}
                src={theme === "dark" ? circleDark : circleLight}
                width={254}
                height={254}
                alt=""
            />

            <div className={styles.core}>
                <span className={`material-symbols-rounded ${styles.coreIcon}`} aria-hidden="true">
                    {coreIcon}
                </span>
                <span className={styles.coreLabel}>{coreLabel}</span>
            </div>

            <Question question={what} className={styles.what} />
            <Question question={why} className={styles.why} />
            <Question question={how} className={styles.how} />
        </div>
    );
};

export default QuestionDiagram;
