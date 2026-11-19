import styles from "./ArchaeologyStack.module.css";
import type { ArchaeologyStackProps } from "./ArchaeologyStack.types.ts";

const ArchaeologyStack = ({ layers, className }: ArchaeologyStackProps) => (
    <div className={[styles.stack, className].filter(Boolean).join(" ")}>
        {/* Decorative depth axis: surface → dashed line → arrow down */}
        <div className={styles.axis} aria-hidden="true">
            <span className={`material-symbols-rounded ${styles.axisIcon}`}>landscape</span>
            <span className={styles.axisLine} />
            <span className={`material-symbols-rounded ${styles.axisIcon} ${styles.axisArrow}`}>arrow_downward</span>
        </div>

        <ol className={styles.layers}>
            {layers.map((layer) => (
                <li key={layer.label} className={styles.layer}>
                    <div className={styles.stratum} aria-hidden="true">
                        <span className={styles.iconBox}>
                            <span className={`material-symbols-rounded ${styles.icon}`}>{layer.icon}</span>
                        </span>
                        <span className={styles.label}>{layer.label}</span>
                    </div>
                    <div className={styles.text}>
                        <h3 className={styles.title}>{layer.title}</h3>
                        <p className={styles.body}>{layer.body}</p>
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

export default ArchaeologyStack;
