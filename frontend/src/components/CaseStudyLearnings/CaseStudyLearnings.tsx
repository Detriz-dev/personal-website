import styles from "./CaseStudyLearnings.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import InsightText from "../InsightText/InsightText.tsx";

// Copy: docs/ocado-technology-platform-documentation.md → "What I learned". No Figma frame (D5):
// built from CaseStudySectionHeader + InsightText. Icons are a design choice, not copy.

const LEARNINGS = [
    {
        icon: "menu_book",
        title: "Documentation is a product",
        body: "Without clear ownership, editorial governance, and ongoing measurement, even great documentation eventually decays.",
    },
    {
        icon: "groups",
        title: "The best decisions weren't mine",
        body: "They came from domain experts and real developer workflows. My role was creating the structure and conditions for that knowledge to surface.",
    },
] as const;

/** Closing "What I learned" section (D5): header + two takeaways. */
const CaseStudyLearnings = () => (
    <div className={styles.learnings}>
        <CaseStudySectionHeader title="What I learned" />
        <ul className={styles.list}>
            {LEARNINGS.map((item) => (
                <li key={item.title}>
                    <InsightText icon={item.icon} title={item.title} body={item.body} headingLevel="h3" />
                </li>
            ))}
        </ul>
    </div>
);

export default CaseStudyLearnings;
