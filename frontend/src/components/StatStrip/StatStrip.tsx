import styles from "./StatStrip.module.css";
import type { StatStripProps } from "./StatStrip.types.ts";
import Stat from "./Stat.tsx";

const StatStrip = ({ stats, className }: StatStripProps) => (
    <dl className={[styles.statStrip, className].filter(Boolean).join(" ")}>
        {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
        ))}
    </dl>
);

export default StatStrip;
