import styles from "./TimeLine.module.css";
import type { TimeLineProps } from "./TimeLine.types.ts";

const TimeLine = ({ theme = "light", items, className, ...divProps }: TimeLineProps) => {
    const classes = [styles.timeLine, styles[theme], className].filter(Boolean).join(" ");

    return (
        <div {...divProps} className={classes}>
            <div className={styles.track}>
                <span className={styles.line} aria-hidden="true" data-reveal="draw" />

                <ol className={styles.list}>
                    {items.map((item) => (
                        <li key={item.company} className={styles.item} data-reveal="rise">
                            <span className={styles.marker} aria-hidden="true">
                                <span className={`material-symbols-rounded ${styles.icon}`}>{item.icon}</span>
                            </span>
                            <div className={styles.card}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.company}>{item.company}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default TimeLine;
