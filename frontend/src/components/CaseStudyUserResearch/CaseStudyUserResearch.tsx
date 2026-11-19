import styles from "./CaseStudyUserResearch.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import QuestionCard from "../QuestionCard/QuestionCard.tsx";
import InsightCard from "../InsightCard/InsightCard.tsx";
import LongFormPageMock from "../LongFormPageMock/LongFormPageMock.tsx";
import {
    CodeExamplesVisual,
    ContentTypesVisual,
    HowToVisual,
    KeycapsVisual,
    TaxonomyVisual,
} from "../InsightCard/InsightVisuals.tsx";

// Copy: Figma 134:38809 (D6: Figma text wins). Matches docs/ocado-technology-platform-documentation.md → "User research"
// except "(in first round)" and the order of findings (Ctrl+F featured first).
const QUESTIONS = [
    {
        question: "What makes developer documentation genuinely useful?",
        body: "Exploring what works, what fails, and what best-in-class documentation looks like outside Ocado.",
    },
    {
        question: "What is broken, missing, or confusing right now?",
        body: "Pinpointing concrete friction points and gaps in the current ecosystem.",
    },
    {
        question: "How do developers actually conceptualize platform tools?",
        body: "Testing whether the existing folder and category structures matched engineers' mental models.",
    },
] as const;

const FINDINGS = [
    {
        icon: "checklist",
        title: "Practical how-to guides were missing",
        body: "Engineers lacked task-oriented, step-by-step guides focused on helping them get a specific job done.",
        visual: <HowToVisual />,
    },
    {
        icon: "code",
        title: "Code examples were too scarce",
        body: "Concrete examples were the primary way developers learned new tools, yet the existing docs rarely provided enough of them.",
        visual: <CodeExamplesVisual />,
    },
    {
        icon: "layers",
        title: "Content types were tangled together",
        body: "Reference specs, step-by-step tutorials, and high-level explanations were mixed on the same pages, making it difficult to scan for the exact depth of information needed.",
        visual: <ContentTypesVisual />,
    },
    {
        icon: "account_tree",
        title: "No single taxonomy could fit everyone",
        body: "Backend developers, data scientists, and DevOps engineers each held different mental models—meaning a single top-down category tree would never work for everyone.",
        visual: <TaxonomyVisual />,
    },
] as const;

/** 02 User research (Figma 134:38809): phase header, research questions, featured finding + insight grid. */
const CaseStudyUserResearch = () => (
    <div className={styles.research}>
        <CaseStudySectionHeader
            variant="phase"
            number="02"
            title="User research"
            description={
                <>
                    We conducted roughly <strong>10 in-depth interviews</strong> (in first round) with engineers across
                    different departments to test our assumptions and uncover what was concretely broken.
                </>
            }
        />

        <div className={styles.group}>
            <h3 className={styles.label}>Research questions</h3>
            <ul className={styles.questions}>
                {QUESTIONS.map((q) => (
                    <QuestionCard key={q.question} question={q.question} body={q.body} />
                ))}
            </ul>
        </div>

        <div className={styles.group}>
            <h3 className={styles.label}>Research findings</h3>
            <ul className={styles.findings}>
                <InsightCard
                    variant="featured"
                    lead={<KeycapsVisual />}
                    title="Ctrl+F was the real navigation"
                    body="Rather than clicking through nested menus, developers used Ctrl+F to jump straight to keywords on a page. This signaled that comprehensive, long-form pages with sticky in-page navigation would outperform fragmented micro-pages."
                    visual={<LongFormPageMock />}
                />
                {FINDINGS.map((f) => (
                    <InsightCard key={f.title} icon={f.icon} title={f.title} body={f.body} visual={f.visual} />
                ))}
            </ul>
        </div>
    </div>
);

export default CaseStudyUserResearch;
