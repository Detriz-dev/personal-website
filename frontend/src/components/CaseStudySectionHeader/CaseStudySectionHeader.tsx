import styles from "./CaseStudySectionHeader.module.css";
import type { CaseStudySectionHeaderProps } from "./CaseStudySectionHeader.types.ts";

const CaseStudySectionHeader = ({
    variant = "overview",
    accent,
    number,
    title,
    description,
    tags,
    aside,
    className,
}: CaseStudySectionHeaderProps) => {
    const Heading = variant === "sub" ? "h3" : "h2";

    return (
        <header className={[styles.header, styles[variant], className].filter(Boolean).join(" ")}>
            {/* Same slanted line as SectionHeader's divider SVGs; stroke follows the theme token */}
            <svg
                className={styles.divider}
                viewBox="0 0 1120 3"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M1120 0.5C1113.98 0.5 308.323 2.5 0 2.5" fill="none" stroke="currentColor" />
            </svg>

            <Heading className={styles.heading}>
                {variant === "phase" && number && <span className={styles.eyebrow}>Phase {number} </span>}
                {accent && (
                    <>
                        <span className={styles.accent}>{accent}</span>
                        <br />
                    </>
                )}
                {title}
            </Heading>

            {description && <p className={styles.description}>{description}</p>}

            {tags && tags.length > 0 && (
                <ul className={styles.tags} aria-label="Tech stack">
                    {tags.map((tag) => (
                        <li key={tag.label} className={styles.tag}>
                            <span className={`material-symbols-rounded ${styles.tagIcon}`} aria-hidden="true">
                                {tag.icon}
                            </span>
                            {tag.label}
                        </li>
                    ))}
                </ul>
            )}

            {aside && <div className={styles.aside}>{aside}</div>}
        </header>
    );
};

export default CaseStudySectionHeader;
