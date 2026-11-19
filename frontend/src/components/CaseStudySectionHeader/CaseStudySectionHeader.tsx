import styles from "./CaseStudySectionHeader.module.css";
import type { CaseStudySectionHeaderProps } from "./CaseStudySectionHeader.types.ts";

const CaseStudySectionHeader = ({
    variant = "overview",
    accent,
    title,
    description,
    className,
}: CaseStudySectionHeaderProps) => {
    const Heading = variant === "overview" ? "h2" : "h3";

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
                {accent && (
                    <>
                        <span className={styles.accent}>{accent}</span>
                        <br />
                    </>
                )}
                {title}
            </Heading>

            {description && <p className={styles.description}>{description}</p>}
        </header>
    );
};

export default CaseStudySectionHeader;
