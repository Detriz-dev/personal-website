import styles from "./QiastatDesignSystem.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import DecisionBlock from "../DecisionBlock/DecisionBlock.tsx";
import SvgIllustration from "../case-study/SvgIllustration/SvgIllustration.tsx";
import portfolioSvg from "../../assets/qiastat/ds-portfolio.svg?raw";
import collaborationSvg from "../../assets/qiastat/ds-collaboration.svg?raw";

/** 04 Design system (Figma 185:3371): header + two decisions with illustrations. */
const QiastatDesignSystem = () => (
    <div className={styles.designSystem}>
        <CaseStudySectionHeader variant="phase" number="04" title="Design system" />

        <DecisionBlock
            eyebrow="Decision 01"
            title="Designing for the portfolio, not just the product."
            body={
                <>
                    The RISE project didn't exist in isolation. QIAGEN was building a{" "}
                    <strong>shared design system to span its entire instrument portfolio</strong>, and the patterns
                    developed for RISE fed directly into that system.
                </>
            }
            frame="none"
            visual={<SvgIllustration svg={portfolioSvg} />}
        />

        <DecisionBlock
            eyebrow="Decision 02"
            title="Ongoing collaboration, not a handoff."
            body={
                <>
                    Regular cross-team sessions brought together UX designers working across different instruments to
                    discuss their work, surface patterns worth generalising, and{" "}
                    <strong>define components that could work across devices</strong> rather than just within one
                    product.
                </>
            }
            frame="none"
            reverse
            visual={<SvgIllustration svg={collaborationSvg} />}
        />
    </div>
);

export default QiastatDesignSystem;
