import Tag from "../Tag/Tag.tsx";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types.ts";

const Card = ({ theme = "light", icon, title, subtitle, items, tags, className, ...articleProps }: CardProps) => {
    const classes = [styles.card, styles[theme], className].filter(Boolean).join(" ");

    return (
        <article {...articleProps} className={classes}>
            <header className={styles.header}>
                <span className={`material-symbols-rounded ${styles.headerIcon}`} aria-hidden="true">
                    {icon}
                </span>
                <h3 className={styles.title}>
                    {title}
                    {subtitle && <span className={styles.subtitle}> {subtitle}</span>}
                </h3>
            </header>

            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.label} className={[styles.item, item.emphasis && styles.emphasis].filter(Boolean).join(" ")}>
                        <span className={`material-symbols-rounded ${styles.itemIcon}`} aria-hidden="true">
                            {item.icon}
                        </span>
                        {item.label}
                    </li>
                ))}
            </ul>

            {tags && tags.length > 0 && (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <Tag key={tag.label} theme={theme} label={tag.label} icon={tag.icon} />
                    ))}
                </div>
            )}
        </article>
    );
};

export default Card;
