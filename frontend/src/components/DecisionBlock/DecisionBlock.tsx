import styles from "./DecisionBlock.module.css";
import type { DecisionBlockProps } from "./DecisionBlock.types.ts";
import DecisionText from "../DecisionText/DecisionText.tsx";

const DecisionBlock = ({
    eyebrow,
    title,
    body,
    visual,
    reverse = false,
    variant = "split",
    frame = "stage",
}: DecisionBlockProps) => (
    <article className={[styles.block, styles[variant], reverse && styles.reverse].filter(Boolean).join(" ")}>
        <DecisionText className={styles.text} eyebrow={eyebrow} title={title} body={body} />

        {frame === "stage" ? (
            <div className={`${styles.visual} ${styles.panel} ${styles.stageFrame}`} aria-hidden="true">
                <div className={styles.frame}>
                    <div className={styles.stage}>{visual}</div>
                </div>
            </div>
        ) : (
            <div className={[styles.visual, frame === "panel" && styles.panel, frame === "panel" && styles.fluid].filter(Boolean).join(" ")}>
                {visual}
            </div>
        )}
    </article>
);

export default DecisionBlock;
