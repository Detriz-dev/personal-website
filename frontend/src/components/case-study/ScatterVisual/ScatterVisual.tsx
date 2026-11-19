import type { CSSProperties } from "react";
import styles from "./ScatterVisual.module.css";

type Tile = { label: string; x: number; y: number; rotate: number; faded?: boolean };

/* Positions from Figma (ScatterVisual 134:38590): top-left of the unrotated 88×104 tile,
   rotated about its center. */
const TILES: readonly Tile[] = [
    { label: ".md", x: 2.81, y: -0.38, rotate: 8 },
    { label: "wiki", x: 143.19, y: 56.31, rotate: -6 },
    { label: "README", x: 274.52, y: -6.06, rotate: 4, faded: true },
    { label: ".pdf", x: 41.36, y: 135.85, rotate: -10 },
    { label: "repo", x: 144.19, y: 351.31, rotate: 6 },
    { label: ".docx", x: 283.81, y: 194.62, rotate: -8, faded: true },
    { label: "slides", x: -7.15, y: 272.01, rotate: 12, faded: true },
    { label: "notes", x: 277.36, y: 372.64, rotate: -5 },
    { label: ".txt", x: 23.01, y: 424.97, rotate: -7 },
    { label: "wiki", x: 187.59, y: 480.24, rotate: 9, faded: true },
];

const tileStyle = ({ x, y, rotate }: Tile): CSSProperties => ({
    left: x,
    top: y,
    transform: `rotate(${rotate}deg)`,
});

/** Figma "ScatterVisual" (Personal Site, node 134:38590). Decorative: scattered doc tiles. */
const ScatterVisual = ({ className }: { className?: string }) => (
    <div className={[styles.visual, className].filter(Boolean).join(" ")} aria-hidden="true">
        {TILES.map((tile, i) => (
            <div key={i} className={`${styles.tile} ${tile.faded ? styles.faded : ""}`} style={tileStyle(tile)}>
                <span className={styles.label}>{tile.label}</span>
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
            </div>
        ))}

        <div className={styles.unknown}>
            <span className={`material-symbols-rounded ${styles.unknownIcon}`}>question_mark</span>
        </div>

        <span className={styles.caption}>Dozens of locations, formats and owners</span>
    </div>
);

export default ScatterVisual;
