import styles from "./LoopDiagram.module.css";

// Figma 134:39663. Step labels are Figma-only.
const STEPS = [
    { icon: "monitoring", title: "Analytics", text: "Shows what" },
    { icon: "warning", title: "Signals", text: "Zero views, bounces" },
    { icon: "forum", title: "Interviews", text: "Uncover why", highlight: true },
    { icon: "update", title: "Next iteration", text: "Fix & re-measure" },
] as const;

/**
 * Analytics → signals → interviews → next iteration, drawn as a clockwise loop (2×2) on wide containers
 * and as a vertical list below 520px. An ordered list; arrows are decorative.
 */
const LoopDiagram = ({ className }: { className?: string }) => (
    <div className={[styles.loop, className].filter(Boolean).join(" ")}>
        <ol className={styles.steps} aria-label="Research loop">
            {STEPS.map((step) => (
                <li key={step.title} className={"highlight" in step ? `${styles.step} ${styles.highlight}` : styles.step}>
                    <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
                        {step.icon}
                    </span>
                    <span className={styles.text}>
                        <span className={styles.title}>{step.title}</span>
                        <span className={styles.caption}>{step.text}</span>
                    </span>
                    <span className={`material-symbols-rounded ${styles.arrow}`} aria-hidden="true">
                        arrow_forward
                    </span>
                </li>
            ))}
        </ol>
    </div>
);

export default LoopDiagram;
