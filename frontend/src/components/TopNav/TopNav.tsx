import NavItem from "../NavItem/NavItem.tsx";
import githubDark from "../../assets/icons/github-dark.svg";
import githubLight from "../../assets/icons/github-light.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import styles from "./TopNav.module.css";
import type { TopNavProps } from "./TopNav.types.ts";

const MENU_ID = "top-nav-menu";

const TopNav = ({
    theme = "light",
    homeHref = "#",
    links,
    activeHref,
    githubHref,
    linkedinHref,
    onThemeToggle,
    menuOpen = false,
    onMenuToggle,
    className,
    ...navProps
}: TopNavProps) => {
    const isDark = theme === "dark";
    const classes = [styles.topNav, styles[theme], className].filter(Boolean).join(" ");

    const renderLinks = (listClass: string) => (
        <ul className={listClass}>
            {links.map((link) => (
                <li key={link.href}>
                    <NavItem
                        label={link.label}
                        icon={link.icon}
                        href={link.href}
                        theme={theme}
                        selected={link.href === activeHref}
                    />
                </li>
            ))}
        </ul>
    );

    return (
        <nav {...navProps} className={classes}>
            <div className={styles.bar}>
                {/* Logo: Figma NavItem "Icon only / Selected" (inverse fill) */}
                <NavItem
                    label="Home"
                    icon="home_app_logo"
                    href={homeHref}
                    content="iconOnly"
                    selected
                    theme={theme}
                    className={styles.logo}
                />

                {renderLinks(styles.links)}

                <div className={styles.actions}>
                    {githubHref && (
                        <a className={styles.iconButton} href={githubHref} aria-label="GitHub" title="GitHub">
                            <img src={isDark ? githubDark : githubLight} width={20} height={20} alt="" />
                        </a>
                    )}
                    {linkedinHref && (
                        <a className={styles.iconButton} href={linkedinHref} aria-label="LinkedIn" title="LinkedIn">
                            <img src={isDark ? linkedinDark : linkedinLight} width={20} height={20} alt="" />
                        </a>
                    )}
                    {onThemeToggle && (
                        <button
                            type="button"
                            className={`${styles.iconButton} ${styles.themeToggle}`}
                            onClick={onThemeToggle}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            <span className="material-symbols-rounded" aria-hidden="true">
                                {isDark ? "light_mode" : "dark_mode"}
                            </span>
                        </button>
                    )}
                </div>

                <button
                    type="button"
                    className={`${styles.iconButton} ${styles.menuButton}`}
                    onClick={onMenuToggle}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls={MENU_ID}
                >
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {menuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {menuOpen && <div id={MENU_ID} className={styles.menu}>{renderLinks(styles.menuLinks)}</div>}
        </nav>
    );
};

export default TopNav;
