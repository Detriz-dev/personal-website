import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import SkillDiagram from "../SkillDiagram/SkillDiagram.tsx";
import styles from "./SkillSection.module.css";
import type { SkillSectionProps } from "./SkillSection.types.ts";

// Copy from docs/site-copy.md — End-to-End Design Process; emphasis as in Figma (63:45968)
const SkillSection = ({ theme = "light", className, ...sectionProps }: SkillSectionProps) => {
    const classes = [styles.skillSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <SectionHeader
                    theme={theme}
                    accent="End-to-end"
                    title="design process"
                    description={
                        <>
                            Turning the right questions into shippable product value requires <strong>ownership</strong>{" "}
                            and alignment. <strong>I independently drive the process</strong> from initial discovery to
                            working prototypes, while{" "}
                            <strong>collaborating with engineers, PMs and domain experts</strong> to bring the right
                            context into product decisions.
                        </>
                    }
                />
                <SkillDiagram theme={theme} className={styles.diagram} />
            </div>
        </section>
    );
};

export default SkillSection;
