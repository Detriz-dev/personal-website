import styles from "./NavItem.module.css";
import type { NavItemProps } from "./NavItem.types.ts";

const NavItem = ({
    label,
    icon,
    href,
    content = "textAndIcon",
    selected = false,
    theme = "light",
    className,
    ...anchorProps
}: NavItemProps) => {
    const iconOnly = content === "iconOnly";

    const classes = [
        styles.navItem,
        styles[theme],
        iconOnly && styles.iconOnly,
        selected && styles.selected,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a
            {...anchorProps}
            href={href}
            className={classes}
            aria-current={selected ? "page" : undefined}
            aria-label={iconOnly ? label : undefined}
            title={iconOnly ? label : anchorProps.title}
        >
            <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
                {icon}
            </span>
            {!iconOnly && <span className={styles.label}>{label}</span>}
        </a>
    );
};

export default NavItem;
