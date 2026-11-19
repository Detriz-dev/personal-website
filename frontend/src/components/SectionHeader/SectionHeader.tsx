import dividerLight from "../../assets/section-header/divider-light.svg";
import dividerDark from "../../assets/section-header/divider-dark.svg";
import styles from "./SectionHeader.module.css";
import type { SectionHeaderProps } from "./SectionHeader.types.ts";

const SectionHeader = ({
    theme = "light",
    accent,
    title,
    description,
    divider = true,
    className,
    ...headerProps
}: SectionHeaderProps) => {
    const classes = [styles.sectionHeader, styles[theme], className].filter(Boolean).join(" ");

    return (
        <header {...headerProps} className={classes}>
            {divider && (
                <img
                    className={styles.divider}
                    src={theme === "dark" ? dividerDark : dividerLight}
                    width={1120}
                    height={3}
                    alt=""
                    aria-hidden="true"
                />
            )}

            <h2 className={styles.heading}>
                <span className={styles.accent}>{accent}</span>
                <br />
                {title}
            </h2>

            {description && <p className={styles.description}>{description}</p>}
        </header>
    );
};

export default SectionHeader;
