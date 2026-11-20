import { useLayoutEffect, useRef, type CSSProperties } from "react";
import Button from "../Button/Button.tsx";
import QuestionDiagram from "../QuestionDiagram/QuestionDiagram.tsx";
import dividerLight from "../../assets/hero/divider-light.svg";
import dividerDark from "../../assets/hero/divider-dark.svg";
import styles from "./HeroSection.module.css";
import type { HeroSectionProps } from "./HeroSection.types.ts";

// Intro stagger index for headline words (see docs/intro-animation-plan.md, step 03)
const word = (i: number) => ({ "--i": i }) as CSSProperties;

// CTA labels as in Figma (61:45959)
const HeroSection = ({
    theme = "light",
    processHref = "#design-process",
    workHref = "#projects",
    intro = false,
    className,
    ...sectionProps
}: HeroSectionProps) => {
    const classes = [styles.hero, styles[theme], intro && styles.intro, className].filter(Boolean).join(" ");
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    // Intro step 09: the header block starts centred in the section, then moves to its normal place.
    // Measured from the final layout, so the variable is cleared first (a re-run, e.g. StrictMode,
    // would otherwise measure the already-shifted headline).
    useLayoutEffect(() => {
        const section = sectionRef.current;
        const headline = headlineRef.current;
        if (!intro || !section || !headline) return;
        section.style.removeProperty("--intro-shift");
        const s = section.getBoundingClientRect();
        const h = headline.getBoundingClientRect();
        const shift = s.top + s.height / 2 - (h.top + h.height / 2);
        section.style.setProperty("--intro-shift", `${Math.round(shift)}px`);
        return () => {
            section.style.removeProperty("--intro-shift");
        };
    }, [intro]);

    return (
        <section {...sectionProps} ref={sectionRef} className={classes}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h1 ref={headlineRef} className={styles.headline}>
                        <span className={`${styles.accent} ${styles.lead}`}>Product value</span>{" "}
                        <span className={styles.word} style={word(0)}>starts</span>{" "}
                        <span className={styles.word} style={word(1)}>with</span>{" "}
                        <span className={styles.word} style={word(2)}>the</span>{" "}
                        <strong>
                            <span className={styles.word} style={word(3)}>right</span>{" "}
                            <span className={styles.word} style={word(4)}>questions.</span>
                        </strong>
                    </h1>

                    {/* Dashed line, tiled as a background so the dashes can flow left → right */}
                    <div
                        className={styles.divider}
                        style={{ backgroundImage: `url("${theme === "dark" ? dividerDark : dividerLight}")` }}
                        aria-hidden="true"
                    />

                    <p className={styles.subheadline}>
                        I'm Dawid, a Product Designer <strong>leading end-to-end</strong> product design, combining{" "}
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
                    intro={intro}
                    why={{ label: "Why build?", description: "Defining the core user problem and the value created for user and business.", icon: "manage_search" }}
                    what={{ label: "What to build?", description: "How do we design the right solution—and how will we measure its success?", icon: "widgets" }}
                    how={{ label: "How to build?", description: "How do we prototype, test, and ship this fast without technical debt?", icon: "data_object" }}
                    coreLabel="Feature"
                />
            </div>
        </section>
    );
};

export default HeroSection;
