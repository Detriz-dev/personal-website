import Card from "../Card/Card.tsx";
import type { CardProps } from "../Card/Card.types.ts";
import styles from "./SkillDiagram.module.css";
import type { SkillDiagramProps } from "./SkillDiagram.types.ts";
import miroLight from "../../assets/tags/miro-light.svg";
import miroDark from "../../assets/tags/miro-dark.svg";
import notionLight from "../../assets/tags/notion-light.svg";
import notionDark from "../../assets/tags/notion-dark.svg";
import figmaLight from "../../assets/tags/figma-light.svg";
import figmaDark from "../../assets/tags/figma-dark.svg";
import gitLight from "../../assets/tags/git-light.svg";
import gitDark from "../../assets/tags/git-dark.svg";
import claudeLight from "../../assets/tags/claude-light.svg";
import claudeDark from "../../assets/tags/claude-dark.svg";
import webstormLight from "../../assets/tags/webstorm-light.svg";
import webstormDark from "../../assets/tags/webstorm-dark.svg";

type Step = Omit<CardProps, "theme">;

// Copy from docs/site-copy.md — Process Framework; icons from Figma (66:46316)
const getSteps = (dark: boolean): Step[] => [
    {
        icon: "manage_search",
        title: "Problem definition",
        subtitle: "(Why?)",
        items: [
            { label: "Jobs to be done (JTBD)", icon: "eye_tracking", emphasis: true },
            { label: "User research & discovery", icon: "check_box" },
            { label: "Workshop facilitation", icon: "check_box" },
            { label: "Usability testing", icon: "check_box" },
        ],
        tags: [
            { label: "Miro", icon: dark ? miroDark : miroLight },
            { label: "Notion", icon: dark ? notionDark : notionLight },
        ],
    },
    {
        icon: "widgets",
        title: "Solution design",
        subtitle: "(What?)",
        items: [
            { label: "Design thinking", icon: "eye_tracking", emphasis: true },
            { label: "Domain modeling", icon: "check_box" },
            { label: "Information architecture", icon: "check_box" },
            { label: "Design system", icon: "check_box" },
        ],
        tags: [{ label: "Figma", icon: dark ? figmaDark : figmaLight }],
    },
    {
        icon: "data_object",
        title: "Solution development",
        subtitle: "(How?)",
        items: [
            { label: "Scrum", icon: "eye_tracking", emphasis: true },
            { label: "Prototyping (React)", icon: "check_box" },
            { label: "Documentation", icon: "check_box" },
        ],
        tags: [
            { label: "Git", icon: dark ? gitDark : gitLight },
            { label: "Claude", icon: dark ? claudeDark : claudeLight },
            { label: "WebStorm", icon: dark ? webstormDark : webstormLight },
        ],
    },
];

const SkillDiagram = ({ theme = "light", className, ...divProps }: SkillDiagramProps) => {
    const classes = [styles.diagram, styles[theme], className].filter(Boolean).join(" ");
    const steps = getSteps(theme === "dark");

    return (
        <div {...divProps} className={classes}>
            {/* Connectors flow clockwise: Why → What → How on top, How → Why below. */}
            <div className={`${styles.connector} ${styles.top} ${styles.insights}`}>
                <span className={styles.label}>Insights</span>
            </div>
            <div className={`${styles.connector} ${styles.top} ${styles.specification}`}>
                <span className={styles.label}>Specification</span>
            </div>
            <div className={`${styles.connector} ${styles.bottom} ${styles.validation}`}>
                <span className={styles.label}>Validation</span>
            </div>

            <div className={styles.cards}>
                {steps.map((step) => (
                    <Card key={step.title} theme={theme} className={styles.card} {...step} />
                ))}
            </div>
        </div>
    );
};

export default SkillDiagram;
