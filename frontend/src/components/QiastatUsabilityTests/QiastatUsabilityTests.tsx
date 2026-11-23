import styles from "./QiastatUsabilityTests.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import InsightCard from "../InsightCard/InsightCard.tsx";
import SvgIllustration from "../case-study/SvgIllustration/SvgIllustration.tsx";
import labSvg from "../../assets/qiastat/lab.svg?raw";
import participantsSvg from "../../assets/qiastat/participants.svg?raw";
import scenarioSvg from "../../assets/qiastat/scenario.svg?raw";

/** 05 Usability tests (Figma 181:4800): header, featured card + two test cards. */
const QiastatUsabilityTests = () => (
    <div className={styles.tests}>
        <CaseStudySectionHeader variant="phase" number="05" title="Usability tests" />

        <ul className={styles.cards}>
            <InsightCard
                variant="featured"
                fit="fluid"
                icon="precision_manufacturing"
                title="Real hardware, real environment."
                body={
                    <>
                        Testing happened in QIAGEN's on-site instrument lab — <strong>on real hardware</strong>, not a
                        simulator or a clickable prototype on a laptop. A usability test on a screen doesn't surface the
                        same issues as one conducted standing at an elevated instrument, gloves on, under the physical
                        conditions operators actually work in.
                    </>
                }
                visual={<SvgIllustration svg={labSvg} />}
            />
            <InsightCard
                fit="fluid"
                icon="badge"
                title="Internal participants."
                body={
                    <>
                        Participants were <strong>internal staff</strong> playing the role of laboratory operators. The
                        project was confidential during development, which ruled out external recruitment — a practical
                        constraint that's common in competitive medical device work.
                    </>
                }
                visual={<SvgIllustration svg={participantsSvg} />}
            />
            <InsightCard
                fit="fluid"
                icon="route"
                title="Representative scenario."
                body={
                    <>
                        The core test scenario was built around a representative task:{" "}
                        <strong>loading a run and monitoring its progress</strong>. The design decisions held up under
                        testing. A few content and interaction gaps surfaced and were addressed before wider rollout.
                    </>
                }
                visual={<SvgIllustration svg={scenarioSvg} />}
            />
        </ul>
    </div>
);

export default QiastatUsabilityTests;
