import styles from "./CaseStudyDiscovery.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";
import ArchaeologyStack from "../ArchaeologyStack/ArchaeologyStack.tsx";
import Callout from "../Callout/Callout.tsx";

// Copy: docs/ocado-technology-platform-documentation.md → "Discovery". Icons + band labels from Figma (134:38755).
const LAYERS = [
    {
        icon: "history",
        label: "History",
        title: "Tracing the platform's history",
        body: "Examining how the platform scaled organically across 100+ engineering teams while documentation remained an afterthought.",
    },
    {
        icon: "call_split",
        label: "Fragmentation",
        title: "Mapping the fragmentation (and past attempts)",
        body: "Uncovering why documentation fractured across dozens of tools, and reviewing previous consolidation efforts that had stalled so we wouldn't repeat the same mistakes.",
    },
    {
        icon: "inventory_2",
        label: "Legacy & ownership",
        title: "Auditing legacy content and ownership",
        body: "Cataloging what already existed, identifying who actually maintained it (if anyone), and understanding the workflows engineers already used to write and deploy code.",
    },
    {
        icon: "handshake",
        label: "Stakeholders",
        title: "Aligning stakeholders and constraints",
        body: "Defining what success looked like for platform leadership while mapping real-world boundaries—including engineering bandwidth, security permissions, and long-term maintenance capacity.",
    },
] as const;

/** 01 Discovery (Figma 134:38747): phase header, archaeology stack, bridge to 02. */
const CaseStudyDiscovery = () => (
    <div className={styles.discovery}>
        <CaseStudySectionHeader
            variant="phase"
            number="01"
            title="Discovery"
            description={
                <>
                    Before jumping into user interviews or sketching solutions, we needed to do some{" "}
                    <strong>organizational archaeology</strong>—mapping the existing legacy and understanding how the
                    platform got to this state.
                </>
            }
        />
        <ArchaeologyStack layers={LAYERS} />
        <Callout variant="bridge">
            Discovery gave us a map of the system and its history—but only from the inside out. To understand what
            great documentation looked like inside an engineer's day-to-day workflow, we needed to talk directly to the
            people using it.
        </Callout>
    </div>
);

export default CaseStudyDiscovery;
