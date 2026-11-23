import styles from "./QiastatLearnings.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import InsightText from "../InsightText/InsightText.tsx";

/** Closing "What I learned" section (Figma 186:3471): header + three takeaways. */
const QiastatLearnings = () => (
    <div className={styles.learnings}>
        <CaseStudySectionHeader variant="phase" title="What I learned" />
        <ul className={styles.list}>
            <li>
                <InsightText
                    icon="front_hand"
                    headingLevel="h3"
                    title="Physical context doesn't just influence the interface — it shapes it entirely."
                    body={
                        <>
                            Gloves, screen height, shift length, the absence of arm support — these aren't edge cases to
                            accommodate at the end.{" "}
                            <strong>They're the conditions the interface has to be built around from the start.</strong>{" "}
                            Ignore them and you're designing for a user who doesn't exist.
                        </>
                    }
                />
            </li>
            <li>
                <InsightText
                    icon="balance"
                    headingLevel="h3"
                    title="Consistency and usability in a design system are both virtues — and they can pull in opposite directions."
                    body={
                        <>
                            When you're designing components that need to work across multiple instruments, the pressure
                            to keep everything visually consistent is real and legitimate.{" "}
                            <strong>But it's also a trap.</strong> Optimise too hard for a unified look and you risk
                            shipping patterns that are coherent across devices but friction-heavy on any individual one.
                            The balance isn't automatic — it has to be argued for, instrument by instrument.
                        </>
                    }
                />
            </li>
            <li>
                <InsightText
                    icon="science"
                    headingLevel="h3"
                    title="The best validation comes from conditions that match reality."
                    body={
                        <>
                            A lab test on real hardware found things a screen-based prototype test would have missed
                            entirely. <strong>The environment is part of the test.</strong>
                        </>
                    }
                />
            </li>
        </ul>
    </div>
);

export default QiastatLearnings;
