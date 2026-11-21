import { useEffect, useRef, useState } from "react";
import styles from "./TimeLine.module.css";
import type { TimeLineProps } from "./TimeLine.types.ts";

// How long the scrollbar stays visible after the last scroll event
const SCROLLBAR_HIDE_DELAY = 800;

const TimeLine = ({ theme = "light", items, className, onScroll, ...divProps }: TimeLineProps) => {
    const [scrolling, setScrolling] = useState(false);
    const hideTimer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(hideTimer.current), []);

    const handleScroll: TimeLineProps["onScroll"] = (event) => {
        setScrolling(true);
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setScrolling(false), SCROLLBAR_HIDE_DELAY);
        onScroll?.(event);
    };

    const classes = [styles.timeLine, styles[theme], className].filter(Boolean).join(" ");

    return (
        <div {...divProps} className={classes} onScroll={handleScroll} data-scrolling={scrolling || undefined}>
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
                                {/* Opens the details window — wired up later */}
                                <span className={styles.more} aria-hidden="true">
                                    <span className={`material-symbols-rounded ${styles.moreIcon}`}>add</span>
                                </span>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default TimeLine;
