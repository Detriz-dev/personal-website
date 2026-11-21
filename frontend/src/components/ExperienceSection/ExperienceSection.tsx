import { ROUTES } from "../../routes.ts";
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import TimeLine from "../TimeLine/TimeLine.tsx";
import type { TimeLineItem } from "../TimeLine/TimeLine.types.ts";
import styles from "./ExperienceSection.module.css";
import type { ExperienceSectionProps } from "./ExperienceSection.types.ts";

// Icons from Figma (66:46392). Most recent first.
const DOMAINS: TimeLineItem[] = [
    {
        icon: "terminal",
        title: "Developer tools",
        company: "OCADO Technology",
        // Copy from Figma (163:8590)
        details: {
            intro: (
                <>
                    Improved the developer experience (DX) for engineering teams using Ocado’s internal developer
                    platform, which supports the delivery of solutions for Ocado’s partner. Key projects:
                </>
            ),
            projects: [
                {
                    name: "Platform Documentation",
                    description: "Removed friction and improved workflow for engineers.",
                    caseStudyHref: ROUTES.platformDocumentation,
                },
                {
                    name: "API Lifecycle Management",
                    description: "Improved documentation quality and discoverability.",
                },
                {
                    name: "Platform Change Tracker (AI)",
                    description: "Designed AI-assisted incident change tracking interface.",
                },
            ],
            responsibilities: [
                { icon: "content_paste_search", label: "Conduct user interviews", kind: "research" },
                { icon: "edit_note", label: "Map domain knowledge", kind: "research" },
                { icon: "map", label: "Map customer journey", kind: "research" },
                { icon: "content_paste_search", label: "Analyse external tools", kind: "research" },
                { icon: "account_tree", label: "Design information architecture", kind: "design" },
                { icon: "dashboard", label: "Design UI and prototyping", kind: "design" },
                { icon: "fact_check", label: "Conduct user tests", kind: "design" },
                { icon: "content_paste_search", label: "Conduct workshops", kind: "design" },
                { icon: "data_object", label: "Support frontend dev. (REACT)", kind: "development" },
                { icon: "description", label: "Write documentation", kind: "development" },
            ],
        },
    },
    // Copy below from descriptions/*.png
    {
        icon: "coronavirus",
        title: "Medical instrument",
        company: "QIAGEN",
        details: {
            intro: "Design touchscreen interface for QIAstat-DX Rise, a high-throughput diagnostic instrument used by laboratory technicians in clinical environments.",
            responsibilities: [
                { icon: "content_paste_search", label: "Conduct user interviews", kind: "research" },
                { icon: "edit_note", label: "Map domain knowledge", kind: "research" },
                { icon: "map", label: "Map customer journey", kind: "research" },
                { icon: "account_tree", label: "Design information architecture", kind: "design" },
                { icon: "dashboard", label: "Design UI and prototyping", kind: "design" },
                { icon: "fact_check", label: "Conduct user tests", kind: "design" },
                { icon: "content_paste_search", label: "Co-created design system", kind: "design" },
            ],
        },
    },
    {
        icon: "person_search",
        title: "B2B HR platform",
        company: "eWork Group",
        details: {
            intro: "Designed a back-office web application that supports the full hiring and job offer lifecycle, from offer creation through candidate tracking and application management.",
            responsibilities: [
                { icon: "content_paste_search", label: "Conduct user interviews", kind: "research" },
                { icon: "edit_note", label: "Map domain workflows", kind: "research" },
                { icon: "map", label: "Map customer journey", kind: "research" },
                { icon: "account_tree", label: "Design information architecture", kind: "design" },
                { icon: "dashboard", label: "Prototype workflows", kind: "design" },
                { icon: "fact_check", label: "Conduct user tests", kind: "design" },
            ],
        },
    },
    {
        icon: "currency_exchange",
        title: "B2B loan system",
        company: "Santander Bank",
        details: {
            intro: "Back-office document management system designed to reduce friction and standardize the loan approval process across business units.",
            responsibilities: [
                { icon: "content_paste_search", label: "Conduct user interviews", kind: "research" },
                { icon: "account_tree", label: "Design information architecture", kind: "design" },
                { icon: "dashboard", label: "Design UI and prototyping", kind: "design" },
                { icon: "fact_check", label: "Conduct user tests", kind: "design" },
                { icon: "content_paste_search", label: "Co-own design system", kind: "design" },
            ],
        },
    },
    {
        icon: "developer_guide",
        title: "Career development platform",
        company: "DOOS.pro",
        details: {
            intro: "Back-office application for e-learning and career development management, serving learners and managers with distinct but complementary workflows.",
            responsibilities: [
                { icon: "content_paste_search", label: "Conduct user interviews", kind: "research" },
                { icon: "edit_note", label: "Map domain knowledge", kind: "research" },
                { icon: "account_tree", label: "Design information architecture", kind: "design" },
                { icon: "dashboard", label: "Prototype", kind: "design" },
                { icon: "fact_check", label: "Conduct user tests", kind: "design" },
            ],
        },
    },
];

// Emphasis as in Figma (66:46398)
const ExperienceSection = ({ theme = "light", className, ...sectionProps }: ExperienceSectionProps) => {
    const classes = [styles.experienceSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <SectionHeader
                    theme={theme}
                    reveal
                    accent="10+ years"
                    title="of experience"
                    description={
                        <>
                            Working in unfamiliar, high-complexity environments taught me how to{" "}
                            <strong>learn a new domain fast</strong>. Often as the <strong>sole designer</strong>,{" "}
                            <strong>I led the design effort end-to-end</strong>: advocating for user needs,{" "}
                            <strong>championing human-centered design</strong>, and sharing early prototypes to{" "}
                            <strong>respect experts' time</strong>.
                        </>
                    }
                />
                <TimeLine theme={theme} items={DOMAINS} className={styles.timeLine} />
            </div>
        </section>
    );
};

export default ExperienceSection;
