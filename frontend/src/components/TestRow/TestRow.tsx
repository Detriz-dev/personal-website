import styles from "./TestRow.module.css";
import type { TestRowProps } from "./TestRow.types.ts";

const COLUMNS = [
    { key: "tested", icon: "assignment", label: "What we tested" },
    { key: "saw", icon: "visibility", label: "What we saw" },
    { key: "changed", icon: "published_with_changes", label: "What changed" },
] as const;

const TestRow = ({ icon, eyebrow, title, findings, body, children, className }: TestRowProps) => (
    <article className={[styles.card, children != null && styles.withVisual, className].filter(Boolean).join(" ")}>
        <div className={styles.row}>
            <div className={styles.head}>
                <span className={styles.icon} aria-hidden="true">
                    <span className="material-symbols-rounded">{icon}</span>
                </span>
                <h3 className={styles.title}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    {title}
                </h3>
            </div>

            {findings && (
                <dl className={styles.findings}>
                    {COLUMNS.map((column) => (
                        <div
                            key={column.key}
                            className={column.key === "changed" ? `${styles.column} ${styles.changed}` : styles.column}
                        >
                            <dt className={styles.label}>
                                <span className={`material-symbols-rounded ${styles.labelIcon}`} aria-hidden="true">
                                    {column.icon}
                                </span>
                                {column.label}
                            </dt>
                            <dd className={styles.text}>{findings[column.key]}</dd>
                        </div>
                    ))}
                </dl>
            )}

            {body != null && <p className={`${styles.text} ${styles.body}`}>{body}</p>}
        </div>

        {children}
    </article>
);

export default TestRow;
