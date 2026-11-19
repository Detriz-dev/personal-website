import styles from "./RolloutTimeline.module.css";

// Figma 134:39434. The last stop came after launch (dashed marker).
const STOPS = [
    { icon: "science", title: "Pilot", detail: "API Gateway wrapper" },
    { icon: "manage_search", title: "Search test", detail: "Live build" },
    { icon: "rocket_launch", title: "Launch", detail: "Tools, products, services & search" },
    { icon: "category", title: "Categories", detail: "Added from behavioral data", later: true },
] as const;

/** Rollout order: pilot → search test → launch → categories. Horizontal from 768px, vertical below. */
const RolloutTimeline = () => (
    <div className={styles.timeline}>
        <span className={styles.line} aria-hidden="true" />
        <ol className={styles.list}>
            {STOPS.map((stop) => (
                <li key={stop.title} className={styles.stop}>
                    <span
                        className={"later" in stop ? `${styles.marker} ${styles.later}` : styles.marker}
                        aria-hidden="true"
                    >
                        <span className={`material-symbols-rounded ${styles.icon}`}>{stop.icon}</span>
                    </span>
                    <span className={styles.label}>
                        <span className={styles.title}>{stop.title}</span>
                        <span className={styles.detail}>{stop.detail}</span>
                    </span>
                </li>
            ))}
        </ol>
    </div>
);

export default RolloutTimeline;
