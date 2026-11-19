import styles from "./CardSortVisual.module.css";

// Figma 134:39020: loose tool cards → 3 platform experts → grouped categories.
// Card positions are the Figma bounding boxes re-centred on the unrotated 56×40 card.
const TOOL_CARDS = [
    { left: 23.2, top: 65.4, rotate: 12 },
    { left: 98.5, top: 35.9, rotate: -8 },
    { left: 41.9, top: 127, rotate: -6 },
    { left: 107.8, top: 122.8, rotate: 6 },
    { left: 33, top: 194.8, rotate: -10 },
    { left: 100.5, top: 218.1, rotate: 9 },
] as const;

const GROUPS = [
    { top: 28, cards: 3 },
    { top: 120, cards: 2 },
    { top: 212, cards: 3 },
] as const;

/** Decorative; draws on DecisionBlock's 624×320 stage. */
const CardSortVisual = () => (
    <div className={styles.visual}>
        {TOOL_CARDS.map((c, i) => (
            <span
                key={i}
                className={styles.toolCard}
                style={{ left: c.left, top: c.top, transform: `rotate(${c.rotate}deg)` }}
            >
                <span className={`${styles.bar} ${styles.long}`} />
                <span className={`${styles.bar} ${styles.short}`} />
            </span>
        ))}

        <span className={`material-symbols-rounded ${styles.arrow}`} style={{ left: 186 }}>
            arrow_forward
        </span>

        <div className={styles.experts}>
            <div className={styles.avatars}>
                <span className={styles.avatar}>
                    <span className={`material-symbols-rounded ${styles.person}`}>person</span>
                </span>
                <span className={`${styles.avatar} ${styles.avatarAccent}`}>
                    <span className={`material-symbols-rounded ${styles.person}`}>person</span>
                </span>
                <span className={styles.avatar}>
                    <span className={`material-symbols-rounded ${styles.person}`}>person</span>
                </span>
            </div>
            <span className={styles.caption}>3 platform experts</span>
        </div>

        <span className={`material-symbols-rounded ${styles.arrow}`} style={{ left: 396 }}>
            arrow_forward
        </span>

        {GROUPS.map((g) => (
            <div key={g.top} className={styles.group} style={{ top: g.top }}>
                <span className={styles.groupHeader} />
                <div className={styles.groupCards}>
                    {Array.from({ length: g.cards }, (_, i) => (
                        <span key={i} className={styles.miniCard}>
                            <span className={styles.miniBar} />
                        </span>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default CardSortVisual;
