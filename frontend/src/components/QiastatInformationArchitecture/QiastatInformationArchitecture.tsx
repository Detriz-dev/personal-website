import type { ReactNode } from "react";
import styles from "./QiastatInformationArchitecture.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import Callout from "../Callout/Callout.tsx";
import SvgIllustration from "../case-study/SvgIllustration/SvgIllustration.tsx";
import architectureSvg from "../../assets/qiastat/architecture.svg?raw";

type Zone = { number: string; title: string; body: ReactNode; dynamic?: boolean };

// Copy and order from Figma (Zones 193:3409); numbers match the illustration's zone tags
const ZONES: readonly Zone[] = [
    {
        number: "1",
        title: "Persistent status zone (top).",
        body: (
            <>
                System health and alerts stay <strong>visible at all times</strong>, independent of login state or
                whatever task is currently active.
            </>
        ),
    },
    {
        number: "2",
        title: "Primary action zone (bottom).",
        body: (
            <>
                The <strong>most frequent actions</strong> sit at the screen’s lower edge, closest to the operator’s{" "}
                <strong>natural hand position</strong>.
            </>
        ),
    },
    {
        number: "3",
        title: "In-context detail zone.",
        body: (
            <>
                Ongoing sample and run information is reachable{" "}
                <strong>without navigating away from the current screen</strong> — quick access without a view change.
            </>
        ),
    },
    {
        number: "4",
        title: "Content area (middle).",
        body: (
            <>
                The task-specific workspace that <strong>changes per screen</strong>, framed by the two fixed zones
                above and below it.
            </>
        ),
        dynamic: true,
    },
];

/** 02 Information architecture (Figma 181:4427): header, screen zones illustration, zone list, bridge. */
const QiastatInformationArchitecture = () => (
    <div className={styles.ia}>
        <CaseStudySectionHeader
            variant="phase"
            number="02"
            title="Information architecture"
            description={
                <>
                    Research findings pointed to a structural problem, not just a visual one: the screen needed{" "}
                    <strong>fixed zones that held steady</strong> regardless of what task an operator was performing.
                </>
            }
        />

        <SvgIllustration svg={architectureSvg} />

        <ol className={styles.zones}>
            {ZONES.map((zone) => (
                <li key={zone.number} className={styles.zone}>
                    <span className={[styles.pin, zone.dynamic && styles.pinDynamic].filter(Boolean).join(" ")} aria-hidden="true">
                        {zone.number}
                    </span>
                    <div className={styles.text}>
                        <h3 className={styles.title}>{zone.title}</h3>
                        <p className={styles.body}>{zone.body}</p>
                    </div>
                </li>
            ))}
        </ol>

        <Callout variant="bridge">
            <strong>Three structural zones, fixed; one dynamic.</strong> That layout principle held across every screen
            in the interface — and became the backbone the visual design decisions were built on.
        </Callout>
    </div>
);

export default QiastatInformationArchitecture;
