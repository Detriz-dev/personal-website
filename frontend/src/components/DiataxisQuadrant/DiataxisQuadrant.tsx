import styles from "./DiataxisQuadrant.module.css";

type Mode = { icon: string; title: string; focus: string; highlight?: boolean };

// Figma 134:39081. Rows: practical / theoretical; columns: studying / working.
// How-to guides is highlighted, as in Figma (the focus of Decision 04).
const ROWS: readonly { label: string; modes: readonly [Mode, Mode] }[] = [
    {
        label: "Practical",
        modes: [
            { icon: "school", title: "Tutorials", focus: "Learning-oriented" },
            { icon: "checklist", title: "How-to guides", focus: "Task-oriented", highlight: true },
        ],
    },
    {
        label: "Theoretical",
        modes: [
            { icon: "lightbulb", title: "Explanation", focus: "Understanding-oriented" },
            { icon: "menu_book", title: "Reference", focus: "Information-oriented" },
        ],
    },
];

/** The four Diátaxis modes as a 2×2 table with row/column headers. */
const DiataxisQuadrant = () => (
    <table className={styles.table}>
        <caption className={styles.caption}>The four Diátaxis documentation modes</caption>
        <thead>
            <tr>
                <td className={styles.corner} />
                <th scope="col" className={styles.colLabel}>Studying</th>
                <th scope="col" className={styles.colLabel}>Working</th>
            </tr>
        </thead>
        <tbody>
            {ROWS.map((row) => (
                <tr key={row.label}>
                    <th scope="row" className={styles.rowLabel}>
                        <span>{row.label}</span>
                    </th>
                    {row.modes.map((mode) => (
                        <td key={mode.title} className={[styles.mode, mode.highlight && styles.highlight].filter(Boolean).join(" ")}>
                            <span className={styles.iconBox} aria-hidden="true">
                                <span className={`material-symbols-rounded ${styles.icon}`}>{mode.icon}</span>
                            </span>
                            <span className={styles.title}>{mode.title}</span>
                            <span className={styles.focus}>{mode.focus}</span>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default DiataxisQuadrant;
