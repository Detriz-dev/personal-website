import styles from "./CaseStudyInterfaceDesign.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import DecisionCard from "../DecisionCard/DecisionCard.tsx";
import { useTheme } from "../../theme/ThemeContext.tsx";
import docsPageLight from "../../assets/platform-documentation/docs-page-light.png";
import docsPageDark from "../../assets/platform-documentation/docs-page-dark.png";

// Copy: Figma 134:39161. Stack chips and decision eyebrows are Figma-only labels.

const STACK = [
    { icon: "description", label: "MkDocs" },
    { icon: "palette", label: "Material for MkDocs" },
    { icon: "search", label: "Lunr.js" },
    { icon: "schema", label: "Mermaid" },
] as const;

/** 04 Interface design (Figma 134:39161): phase header + stack chips, docs screen, two decision cards. */
const CaseStudyInterfaceDesign = () => {
    const { theme } = useTheme();

    return (
        <div className={styles.interface}>
            <CaseStudySectionHeader
                variant="phase"
                number="04"
                title="Interface design"
                description={
                    <>
                        We built the platform on <strong>MkDocs</strong> using the{" "}
                        <strong>Material for MkDocs</strong> theme as our foundation—giving us a reliable,
                        developer-familiar environment out of the box rather than reinventing the wheel.
                    </>
                }
                tags={STACK}
            />

            <img
                className={styles.screen}
                src={theme === "dark" ? docsPageDark : docsPageLight}
                width={1280}
                height={751}
                loading="lazy"
                alt="The redesigned OTP Documentation Portal: a top bar with search and three tabs (Platform overview, Products and services, Use cases), a sidebar of guides, the page content with a success callout, and an “On this page” list of steps."
            />

            <ul className={styles.cards}>
                <DecisionCard
                    eyebrow="Decision 01"
                    title="Visual customization & prototyping"
                    body="I adapted the Material theme end-to-end to match Ocado's internal brand—defining color tokens, refining typography, and preparing detailed specs for engineering. I reviewed and QA'd the live build against those mockups throughout implementation. We also integrated Mermaid diagram support for technical architectures and built our validation prototype in Figma directly on top of this adapted theme."
                />
                <DecisionCard
                    eyebrow="Decision 02"
                    title="Custom search engineering"
                    body="We didn't leave search on default settings. We customized Lunr.js to control how pages were indexed, what metadata surfaced in previews, and how results were weighted—ensuring developers could find exact answers without needing prior knowledge of the platform's structure."
                />
            </ul>
        </div>
    );
};

export default CaseStudyInterfaceDesign;
