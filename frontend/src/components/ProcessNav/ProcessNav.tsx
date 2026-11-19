import { useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "./ProcessNav.module.css";
import type { ProcessNavProps } from "./ProcessNav.types.ts";
import { useTheme } from "../../theme/ThemeContext.tsx";

const ProcessNav = ({ steps, activeHref, backTo, backLabel }: ProcessNavProps) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    const listRef = useRef<HTMLUListElement>(null);

    // Mobile: keep the active chip visible inside the horizontal scroller (without scrolling the page)
    useEffect(() => {
        const list = listRef.current;
        const active = list?.querySelector<HTMLElement>("[aria-current]");
        if (!list || !active || list.scrollWidth <= list.clientWidth) return;

        const left = active.offsetLeft - list.offsetLeft;
        const right = left + active.offsetWidth;
        if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth) {
            list.scrollTo({ left: left - 8, behavior: "smooth" });
        }
    }, [activeHref]);

    return (
        <nav className={styles.processNav} aria-label="Case study sections">
            <Link to={backTo} className={`${styles.iconButton} ${styles.back}`} aria-label={backLabel} title={backLabel}>
                <span className="material-symbols-rounded" aria-hidden="true">arrow_back</span>
            </Link>

            <ul ref={listRef} className={styles.steps}>
                {steps.map((step) => {
                    const selected = step.href === activeHref;
                    return (
                        <li key={step.href}>
                            <a
                                href={step.href}
                                className={[styles.step, selected && styles.selected].filter(Boolean).join(" ")}
                                aria-current={selected ? "location" : undefined}
                            >
                                {step.number && <span className={styles.number}>{step.number}</span>}
                                <span>{step.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>

            <button
                type="button"
                className={`${styles.iconButton} ${styles.themeToggle}`}
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
                <span className="material-symbols-rounded" aria-hidden="true">
                    {isDark ? "light_mode" : "dark_mode"}
                </span>
            </button>
        </nav>
    );
};

export default ProcessNav;
