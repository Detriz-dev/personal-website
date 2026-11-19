import styles from "./CaseStudyUsabilityTests.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import PilotScope from "../case-study/PilotScope/PilotScope.tsx";
import TestRow from "../TestRow/TestRow.tsx";
import RolloutTimeline from "../case-study/RolloutTimeline/RolloutTimeline.tsx";

// Copy: Figma 134:39336, split into tested / saw / changed. Eyebrows, column labels and visual labels are Figma-only.

/** 05 Usability tests (Figma 134:39336): phase header, pilot scope, two test rows, category rollout timeline. */
const CaseStudyUsabilityTests = () => (
    <div className={styles.usability}>
        <CaseStudySectionHeader
            variant="phase"
            number="05"
            title="Usability tests"
            description={
                <>
                    Before rolling out platform-wide, we piloted our approach on a single, well-understood piece of
                    documentation—the <strong>API Gateway wrapper</strong>—where we could easily recruit active users.
                </>
            }
        />

        <PilotScope />

        <div className={styles.rows}>
            <TestRow
                icon="account_tree"
                eyebrow="Test 01"
                title="Testing the documentation structure"
                findings={{
                    tested: (
                        <>
                            We built a realistic task scenario around a core job to be done: exposing a resource
                            outside the account. Developers completed the task using the redesigned docs while thinking
                            aloud.
                        </>
                    ),
                    saw: "The Diátaxis separation held up well—participants immediately noticed how much easier it was to separate conceptual context from actionable steps.",
                    changed: "The sessions surfaced a few minor content gaps we fixed before launch.",
                }}
            />
            <TestRow
                icon="manage_search"
                eyebrow="Test 02"
                title="Tuning search with real queries"
                findings={{
                    tested: "We tested search separately on a live build with a small group of engineers prior to release.",
                    saw: "Default Lunr.js weights didn't always surface the best match for how developers naturally phrased queries.",
                    changed: "We adjusted ranking weights and refined the search loop based on real tester logs rather than assumptions.",
                }}
            />
        </div>

        <TestRow
            icon="category"
            eyebrow="Test 03"
            title="Iterative category rollout"
            body="We intentionally launched the initial platform without top-level categorization—focusing purely on tools, products, services, and search—and introduced categories iteratively afterward using real behavioral data."
        >
            <RolloutTimeline />
        </TestRow>
    </div>
);

export default CaseStudyUsabilityTests;
