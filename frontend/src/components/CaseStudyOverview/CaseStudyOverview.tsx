import styles from "./CaseStudyOverview.module.css";
import type { CaseStudyOverviewProps } from "./CaseStudyOverview.types.ts";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import ScatterVisual from "../ScatterVisual/ScatterVisual.tsx";
import ProblemRow from "../ProblemRow/ProblemRow.tsx";
import GoalCard from "../GoalCard/GoalCard.tsx";
import { OnePlaceVisual, UsageDataVisual } from "../GoalCard/GoalVisuals.tsx";

// Copy: docs/ocado-technology-platform-documentation.md → "Problems". Icons from Figma (ProblemList 134:38655).
const PROBLEMS = [
    {
        icon: "folder_off",
        title: "Documentation was scattered across dozens of locations.",
        body: "Different file formats, inconsistent structures, and no clear ownership made finding answers a chore.",
    },
    {
        icon: "visibility_off",
        title: "Valuable tribal knowledge existed, but remained invisible.",
        body: "Great guides had been written by developers themselves, yet they were buried so deep that nobody else could find them.",
    },
    {
        icon: "report",
        title: "Content quality was wildly inconsistent.",
        body: "Some pages were severely outdated, while others had never been clear to begin with.",
    },
    {
        icon: "alt_route",
        title: "Developers defaulted to the wrong tools.",
        body: "Not out of stubborn habit, but because nobody had surfaced the better alternatives available to them.",
    },
    {
        icon: "query_stats",
        title: "We had zero visibility into what was actually happening.",
        body: "Without usage analytics, there was no way to know which pages were helping, which were ignored, or what was missing altogether.",
    },
] as const;

/** Overview section content (Figma 134:38557, 135:39900, 134:38661): overview, responsibilities, problems, goal. */
const CaseStudyOverview = ({ responsibilities }: CaseStudyOverviewProps) => (
    <div className={styles.overview}>
        <div className={styles.block}>
            <CaseStudySectionHeader
                variant="overview"
                accent="Project"
                title="overview"
                description={
                    <>
                        A developer platform doesn't fall apart all at once—it accumulates. Ocado Technology's
                        internal platform had grown organically to <strong>50+ tools</strong> used by{" "}
                        <strong>100+ engineering teams</strong>, and documentation simply hadn't kept pace. What
                        started as a nice-to-have had become the dividing line between engineers using the platform
                        effectively or working around it.
                    </>
                }
            />

            <div className={styles.responsibilities}>
                <h3 className={styles.subheading}>My responsibilities</h3>
                <ul className={styles.responsibilityList}>
                    {responsibilities.map((item) => (
                        <li key={item.href}>
                            <a className={styles.responsibilityLink} href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className={styles.block}>
            <CaseStudySectionHeader
                variant="sub"
                title="Problems"
                description="Before we even began formal research, the warning signs were already clear:"
            />
            <div className={styles.problems}>
                <ScatterVisual />
                <ul className={styles.problemList}>
                    {PROBLEMS.map((problem) => (
                        <ProblemRow key={problem.icon} {...problem} />
                    ))}
                </ul>
            </div>
        </div>

        <div className={styles.block}>
            <CaseStudySectionHeader
                variant="sub"
                title="Project goal"
                description="Success meant developers spending less time searching and more time building."
            />
            <div className={styles.goals}>
                <GoalCard
                    visual={<OnePlaceVisual />}
                    audienceIcon="code"
                    audience="Developers"
                    title="One place to look, not a dozen"
                    text="Finding the right documentation should take seconds—not an investigative session across multiple repositories."
                />
                <GoalCard
                    visual={<UsageDataVisual />}
                    audienceIcon="groups"
                    audience="Platform team"
                    title="Visibility over guesswork"
                    text="The platform team needed real behavioral data to see what worked, rather than relying on assumptions."
                />
            </div>
        </div>
    </div>
);

export default CaseStudyOverview;
