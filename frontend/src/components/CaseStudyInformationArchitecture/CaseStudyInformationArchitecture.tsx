import styles from "./CaseStudyInformationArchitecture.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import DecisionBlock from "../DecisionBlock/DecisionBlock.tsx";
import SearchFirstVisual from "../SearchFirstVisual/SearchFirstVisual.tsx";
import CardSortVisual from "../CardSortVisual/CardSortVisual.tsx";
import DiataxisQuadrant from "../DiataxisQuadrant/DiataxisQuadrant.tsx";
import BeforeAfter from "../BeforeAfter/BeforeAfter.tsx";
import GovernanceFlow from "../GovernanceFlow/GovernanceFlow.tsx";

// Copy: Figma 134:38963. In Decision 04 the example sentence lives in the BeforeAfter visual.

/** 03 Information architecture (Figma 134:38963): phase header + five decisions, alternating sides. */
const CaseStudyInformationArchitecture = () => (
    <div className={styles.ia}>
        <CaseStudySectionHeader
            variant="phase"
            number="03"
            title="Information architecture"
            description="Our research findings pointed to foundational structural issues that required deliberate architectural and governance solutions."
        />

        <DecisionBlock
            eyebrow="Decision 01"
            title="Search-first over upfront taxonomy"
            body="Because no single taxonomy worked across every engineering discipline, we leaned heavily into search instead. Developers were already relying on Ctrl+F and searching by specific phrases rather than browsing categories. A strong search engine meets every mental model where it is, without forcing users to learn an internal hierarchy first."
            visual={<SearchFirstVisual />}
        />

        <DecisionBlock
            reverse
            eyebrow="Decision 02"
            title="Bottom-up category mapping"
            body="Rather than guessing at a user-facing taxonomy upfront, we ran a card-sorting session with three internal platform experts who knew the architecture inside out. Using cards representing individual tools, they grouped the ecosystem and explained their logic. This gave us an authentic, inside-out structure slated for iterative rollout after our search-first launch."
            visual={<CardSortVisual />}
        />

        <DecisionBlock
            variant="card"
            frame="none"
            eyebrow="Decision 03"
            title="Separating content with the Diátaxis framework"
            body="We adopted the Diátaxis framework to divide all documentation into four distinct modes: tutorials, how-to guides, reference, and explanation. Giving each mode a clear boundary immediately solved the mixed-content problem surfaced during interviews."
            visual={<DiataxisQuadrant />}
        />

        <DecisionBlock
            frame="panel"
            eyebrow="Decision 04"
            title="Job-oriented how-to guides"
            body="We structured how-to guides around jobs to be done rather than tool names. Titles were rewritten to reflect developer intent rather than underlying implementation. Developer goals remain stable even when underlying tools evolve."
            visual={<BeforeAfter before="Use the API Gateway wrapper" after="Expose resources outside the account" />}
        />

        <DecisionBlock
            reverse
            frame="panel"
            eyebrow="Decision 05"
            title="Governance & publishing workflow"
            body="To solve the lack of ownership and uneven quality, we introduced an editorial review gate: all new or updated documentation had to pass through the technical writing team before going live. This protected structure, tone, and Diátaxis standards as teams contributed across the organization."
            visual={<GovernanceFlow />}
        />
    </div>
);

export default CaseStudyInformationArchitecture;
