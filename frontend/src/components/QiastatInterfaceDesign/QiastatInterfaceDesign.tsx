import type { ReactNode } from "react";
import styles from "./QiastatInterfaceDesign.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import SvgIllustration from "../case-study/SvgIllustration/SvgIllustration.tsx";
import bottomNavSvg from "../../assets/qiastat/bottom-nav.svg?raw";
import buttonSizesSvg from "../../assets/qiastat/button-sizes.svg?raw";
import modalsSvg from "../../assets/qiastat/modals.svg?raw";
import statusViewSvg from "../../assets/qiastat/status-view.svg?raw";
import scrollButtonsSvg from "../../assets/qiastat/scroll-buttons.svg?raw";
import contextMenuSvg from "../../assets/qiastat/context-menu.svg?raw";
import persistentBarSvg from "../../assets/qiastat/persistent-bar.svg?raw";

type Principle = { title: string; body: ReactNode; svg: string };

// Copy and order from Figma (Principle cards 194:3389); the last card spans the full row
const PRINCIPLES: readonly Principle[] = [
    {
        title: "Bottom navigation for frequent actions",
        body: (
            <>
                Controls that operators use constantly were <strong>moved to the bottom of the screen</strong> — closer
                to the natural resting position of the hand. Less time with the arm raised, less fatigue across a long
                shift.
            </>
        ),
        svg: bottomNavSvg,
    },
    {
        title: "Maximised button sizes",
        body: (
            <>
                All interactive elements were <strong>scaled up</strong> to accommodate glove-impaired touch precision.
                Fewer missed taps, less repeated interaction, less frustration.
            </>
        ),
        svg: buttonSizesSvg,
    },
    {
        title: "Modals instead of dropdowns",
        body: (
            <>
                Dropdown menus were <strong>replaced with modal dialogs</strong> — larger, more forgiving touch targets
                that required less precision and fewer steps. A pattern that looks slightly unconventional on a desktop
                screen works significantly better when your users are wearing gloves.
            </>
        ),
        svg: modalsSvg,
    },
    {
        title: "Generic status bar",
        body: (
            <>
                A dedicated status view gave operators an immediate overview of{" "}
                <strong>all ongoing and completed tests on a single screen</strong>. No navigating into individual run
                details to find out where things stood.
            </>
        ),
        svg: statusViewSvg,
    },
    {
        title: "Buttons instead of scroll",
        body: (
            <>
                Scrolling was replaced with <strong>dedicated navigation buttons</strong>. Predictable, controlled, and
                much more reliable when the input method is a gloved finger rather than a bare hand.
            </>
        ),
        svg: scrollButtonsSvg,
    },
    {
        title: "Context menu without view change",
        body: (
            <>
                A context menu let users access key actions <strong>without leaving the current screen</strong>.
                Staying in context — without losing your place in a workflow — matters when the workflow is
                time-sensitive
            </>
        ),
        svg: contextMenuSvg,
    },
    {
        title: "Persistent status bar",
        body: (
            <>
                System information was moved into a <strong>permanent top bar</strong>, visible at all times —{" "}
                <strong>including when the user was logged out</strong>. The status alerts that were previously easy
                to miss became impossible to overlook.
            </>
        ),
        svg: persistentBarSvg,
    },
];

/** 03 UI design (Figma 181:4625): header + seven numbered principle cards with illustrations. */
const QiastatInterfaceDesign = () => (
    <div className={styles.design}>
        <CaseStudySectionHeader
            variant="phase"
            number="03"
            title="UI design"
            description={
                <>
                    The research findings translated into a <strong>clear set of design principles</strong> for the new
                    interface.
                </>
            }
        />

        <ol className={styles.cards}>
            {PRINCIPLES.map((principle, i) => (
                <li key={principle.title} className={styles.card}>
                    <SvgIllustration svg={principle.svg} className={styles.visual} />
                    <div className={styles.text}>
                        <h3 className={styles.title}>
                            <span className={styles.pin} aria-hidden="true">
                                {i + 1}
                            </span>
                            {principle.title}
                        </h3>
                        <p className={styles.body}>{principle.body}</p>
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

export default QiastatInterfaceDesign;
