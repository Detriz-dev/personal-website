import Button from "../Button/Button.tsx";
import QuestionDiagram from "../QuestionDiagram/QuestionDiagram.tsx";
import dividerLight from "../../assets/hero/divider-light.svg";
import dividerDark from "../../assets/hero/divider-dark.svg";
import styles from "./HeroSection.module.css";
import type { HeroSectionProps } from "./HeroSection.types.ts";

// Copy from docs/site-copy.md — Hero Section; CTA labels as in Figma (61:45959)
const HeroSection = ({
    theme = "light",
    processHref = "#design-process",
    workHref = "#selected-work",
    className,
    ...sectionProps
}: HeroSectionProps) => {
    const classes = [styles.hero, styles[theme], className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        <span className={styles.accent}>Product value</span> starts with the{" "}
                        <strong>right questions.</strong>
                    </h1>

                    {/* Dashed line, tiled as a background so the dashes can flow left → right */}
                    <div
                        className={styles.divider}
                        style={{ backgroundImage: `url("${theme === "dark" ? dividerDark : dividerLight}")` }}
                        aria-hidden="true"
                    />

                    <p className={styles.subheadline}>
                        I'm Dawid — a Product Designer <strong>leading end-to-end</strong> product design, combining{" "}
                        <strong>technical understanding</strong> with <strong>AI-assisted workflows</strong> and{" "}
                        <strong>code-based prototyping</strong> (React).
                    </p>

                    <div className={styles.actions}>
                        <Button label="How I find answers" icon="south" href={processHref} theme={theme} />
                        <Button label="See selected work" icon="south" href={workHref} variant="secondary" theme={theme} />
                    </div>
                </div>

                <QuestionDiagram
                    className={styles.diagram}
                    theme={theme}
                    why={{ label: "Why build?", description: "Discovery & validation", icon: "manage_search" }}
                    what={{ label: "What to build?", description: "Product strategy & UI", icon: "widgets" }}
                    how={{ label: "How to build?", description: "Coded prototypes & specs", icon: "data_object" }}
                    coreLabel="Feature"
                />
            </div>
        </section>
    );
};

export default HeroSection;
