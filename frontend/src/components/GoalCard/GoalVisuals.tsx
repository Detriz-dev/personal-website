import type { CSSProperties } from "react";
import styles from "./GoalVisuals.module.css";

type Tile = { x: number; y: number; rotate: number; faded?: boolean };

/* Positions from Figma (Visual 134:38669): top-left of the unrotated 44×54 tile, rotated about its center. */
const TILES: readonly Tile[] = [
    { x: 26.97, y: 31.41, rotate: 10 },
    { x: 99.54, y: 16.68, rotate: -8 },
    { x: 50.7, y: 93.55, rotate: -6 },
    { x: 108.55, y: 112.48, rotate: 7 },
    { x: 41.83, y: 148.4, rotate: -4, faded: true },
    { x: 148.06, y: 61.47, rotate: 4, faded: true },
];

const tileStyle = ({ x, y, rotate }: Tile): CSSProperties => ({
    left: x,
    top: y,
    transform: `rotate(${rotate}deg)`,
});

/** Figma "GoalCard / One place" visual (134:38669): scattered tiles → one searchable panel. */
export const OnePlaceVisual = () => (
    <div className={styles.stage}>
        {TILES.map((tile, i) => (
            <span key={i} className={`${styles.tile} ${tile.faded ? styles.faded : ""}`} style={tileStyle(tile)}>
                <span className={styles.tileLine} />
                <span className={styles.tileLine} />
                <span className={styles.tileLine} />
            </span>
        ))}

        <span className={`material-symbols-rounded ${styles.arrow}`}>arrow_forward</span>

        <div className={styles.panel}>
            <div className={styles.search}>
                <span className={`material-symbols-rounded ${styles.searchIcon}`}>search</span>
                <span className={styles.searchQuery} />
            </div>
            <span className={styles.panelLine} />
            <span className={styles.panelLine} />
            <span className={styles.panelLine} />
        </div>
    </div>
);

/* Bars from Figma (Visual 134:38709): height in px; `accent` bars use the accent fill. */
const BARS: readonly { height: number; accent?: boolean }[] = [
    { height: 60 },
    { height: 120, accent: true },
    { height: 40 },
    { height: 140, accent: true },
    { height: 90 },
    { height: 24 },
    { height: 110 },
    { height: 70 },
];

/** Figma "GoalCard / Visibility" visual (134:38709): bar chart with a "Usage data" badge. */
export const UsageDataVisual = () => (
    <div className={styles.stage}>
        {BARS.map((bar, i) => (
            <span
                key={i}
                className={`${styles.bar} ${bar.accent ? styles.barAccent : ""}`}
                style={{ left: 40 + i * 52, height: bar.height }}
            />
        ))}
        <span className={styles.baseline} />
        <span className={styles.badge}>
            <span className={`material-symbols-rounded ${styles.badgeIcon}`}>visibility</span>
            Usage data
        </span>
    </div>
);
