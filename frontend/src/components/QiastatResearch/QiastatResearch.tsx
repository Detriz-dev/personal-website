import styles from "./QiastatResearch.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import Callout from "../Callout/Callout.tsx";
import InsightText from "../InsightText/InsightText.tsx";
import InsightCard from "../InsightCard/InsightCard.tsx";
import SvgIllustration from "../case-study/SvgIllustration/SvgIllustration.tsx";
import glovesSvg from "../../assets/qiastat/gloves.svg?raw";
import elevatedSvg from "../../assets/qiastat/elevated.svg?raw";
import statusSvg from "../../assets/qiastat/status.svg?raw";

// Icons from Figma (Research goals, 181:4273)
const GOALS = [
    {
        icon: "rule",
        title: "Understand what worked and what didn't in the current QIAstat-Dx interface",
        body: "From the perspective of people using it every day.",
    },
    {
        icon: "biotech",
        title: "Learn how the lab environment and operator workflow actually looked",
        body: "The physical conditions, the routines, the interruptions.",
    },
] as const;

/** 01 Research (Figma 181:4273): phase header, hands-on callout, research goals, findings. */
const QiastatResearch = () => (
    <div className={styles.research}>
        <CaseStudySectionHeader
            variant="phase"
            number="01"
            title="Research"
            description={
                <>
                    To design a better instrument interface, we first needed to{" "}
                    <strong>understand the one that already existed</strong> — what worked, what didn't, and the
                    environment it was being used in.
                </>
            }
        />

        <Callout variant="bridge" icon="back_hand">
            We started by <strong>testing the original instrument ourselves</strong> — gloves on, standing at the
            device, working through real use cases. That hands-on session made the physical constraints concrete
            before the interviews began.
        </Callout>

        <div className={styles.group}>
            <h3 className={styles.label}>
                The formal research followed — interviews with laboratory operators focused on two goals:
            </h3>
            <ul className={styles.goals}>
                {GOALS.map((goal) => (
                    <li key={goal.icon} className={styles.goal}>
                        <InsightText icon={goal.icon} title={goal.title} body={goal.body} iconSurface="card" />
                    </li>
                ))}
            </ul>
        </div>

        <div className={styles.group}>
            <h3 className={styles.label}>Research findings</h3>
            <ul className={styles.findings}>
                <InsightCard
                    variant="featured"
                    fit="fluid"
                    icon="back_hand"
                    title="Working with gloves"
                    body={
                        <>
                            Lab technicians interact with diagnostic instruments wearing protective gloves. That single
                            constraint <strong>rules out a lot of standard touchscreen patterns</strong>. Scrolling is
                            unreliable. Small targets get missed. Dropdowns — which require a precise tap, a scroll,
                            and another precise tap — create friction on every interaction. Users weren't complaining
                            about individual moments of frustration; the friction was{" "}
                            <strong>structural and cumulative</strong> across every shift.
                        </>
                    }
                    visual={<SvgIllustration svg={glovesSvg} />}
                />
                <InsightCard
                    fit="fluid"
                    icon="height"
                    title="Elevated screen position"
                    body={
                        <>
                            The RISE instrument introduced a new physical constraint that didn't exist in the
                            original: a <strong>significantly higher screen position</strong>. Operators now
                            interacted without arm support, standing. Keeping an arm raised for extended periods{" "}
                            <strong>increases fatigue and reduces tap precision</strong> — particularly for repetitive
                            actions performed dozens of times a day. This wasn't a legacy problem carried over from the
                            old UI; it was a new design challenge created by the new hardware.
                        </>
                    }
                    visual={<SvgIllustration svg={elevatedSvg} />}
                />
                <InsightCard
                    fit="fluid"
                    icon="notifications_off"
                    title="System status visibility"
                    body={
                        <>
                            Critical system information — maintenance status, software updates, device alerts — was{" "}
                            <strong>buried in secondary sections</strong> of the interface. Operators could easily miss
                            something important. The problem was worst when approaching the device while logged out:{" "}
                            <strong>no system health information was visible at all</strong>, at exactly the moment
                            when a quick status check matters most.
                        </>
                    }
                    visual={<SvgIllustration svg={statusSvg} />}
                />
            </ul>
        </div>
    </div>
);

export default QiastatResearch;
