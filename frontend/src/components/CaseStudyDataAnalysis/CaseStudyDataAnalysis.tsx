import styles from "./CaseStudyDataAnalysis.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import SignalCard from "../SignalCard/SignalCard.tsx";
import { ContentTiersVisual, SearchQueriesVisual } from "../SignalCard/SignalVisuals.tsx";
import SessionDepthVisual from "../case-study/SessionDepthVisual/SessionDepthVisual.tsx";
import LoopDiagram from "../case-study/LoopDiagram/LoopDiagram.tsx";

// Copy: Figma 134:39525 (D6: Figma text wins). Same sentences as docs/ocado-technology-platform-documentation.md →
// "Data analysis"; Figma bolds "what" / "why." (copy file: italics). Chip and visual labels are Figma-only.

const TIMELINE = [
    { icon: "flag", label: "Baseline" },
    { icon: "rocket_launch", label: "Launch" },
    { icon: "trending_up", label: "Shift over time", accent: true },
] as const;

/** Figma 134:39534: FullStory chip, then baseline → launch → shift over time. */
const MeasurementChips = () => (
    <div className={styles.chips}>
        <span className={`${styles.chip} ${styles.tool}`}>
            <span className={`material-symbols-rounded ${styles.chipIcon}`} aria-hidden="true">
                monitoring
            </span>
            FullStory
        </span>
        <ol className={styles.timeline} aria-label="Measured">
            {TIMELINE.map((step) => (
                <li key={step.label} className={styles.timelineStep}>
                    <span className={"accent" in step ? `${styles.chip} ${styles.accent}` : styles.chip}>
                        <span className={`material-symbols-rounded ${styles.chipIcon}`} aria-hidden="true">
                            {step.icon}
                        </span>
                        {step.label}
                    </span>
                </li>
            ))}
        </ol>
    </div>
);

/** 06 Data analysis (Figma 134:39525): phase header, three signal cards, analytics → interviews loop. */
const CaseStudyDataAnalysis = () => (
    <div className={styles.analysis}>
        <CaseStudySectionHeader
            variant="phase"
            number="06"
            title="Data analysis"
            description={
                <>
                    We instrumented <strong>FullStory</strong> to track developer behavior before and after
                    launch—establishing a clear baseline of how engineers entered and navigated documentation, then
                    measuring how those patterns shifted over time.
                </>
            }
            aside={<MeasurementChips />}
        />

        <ul className={styles.signals}>
            <SignalCard
                icon="manage_search"
                title="Search behavior & blind spots"
                body="We monitored exact search queries—tracking whether engineers searched by tool name, job description, or error phrase—alongside zero-result searches that flagged missing content or indexing gaps."
                visual={<SearchQueriesVisual />}
            />
            <SignalCard
                icon="leaderboard"
                title="Content performance tiers"
                body="Usage patterns quickly segmented the library into three tiers: high-traffic daily staples, 'quick-lookup' reference pages where engineers jumped in for a single parameter and left, and zero-view 'ghost' pages nobody knew existed."
                visual={<ContentTiersVisual />}
            />
            <SignalCard
                className={styles.wide}
                layout="wide"
                icon="repeat"
                title="Session depth & retention"
                body="Tracking returning users showed whether the hub was becoming a daily habit rather than a one-off stop, while cross-page session duration revealed whether engineers were genuinely working through tutorials or bouncing early."
                visual={<SessionDepthVisual />}
            />
        </ul>

        <article className={styles.loop}>
            <div className={styles.loopText}>
                <span className={`material-symbols-rounded ${styles.loopIcon}`} aria-hidden="true">
                    sync
                </span>
                <h3 className={styles.loopTitle}>Turning analytics into targeted interviews</h3>
                <p className={styles.loopBody}>
                    Quantitative data showed us <strong>what</strong> developers were doing, but not{" "}
                    <strong>why.</strong> Identifying zero-view docs and abrupt bounce patterns gave us the exact
                    signal we needed to run a second round of targeted interviews—uncovering the reasoning behind
                    those behaviors.
                </p>
            </div>
            <LoopDiagram className={styles.loopDiagram} />
        </article>
    </div>
);

export default CaseStudyDataAnalysis;
