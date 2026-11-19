import styles from "./Tag.module.css";
import type { TagProps } from "./Tag.types.ts";

const Tag = ({ label, theme = "light", icon, className, ...spanProps }: TagProps) => {
    const classes = [styles.tag, styles[theme], className].filter(Boolean).join(" ");

    return (
        <span {...spanProps} className={classes}>
            {icon && <img className={styles.icon} src={icon} alt="" aria-hidden="true" />}
            <span className={styles.label}>{label}</span>
        </span>
    );
};

export default Tag;
