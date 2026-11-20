import { useRef, type ReactNode } from "react";
import styles from "./CaseStudyPage.module.css";
import type { CaseStudySection } from "./CaseStudyPage.types.ts";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import ProcessNav from "../../components/ProcessNav/ProcessNav.tsx";
import CaseStudyHero from "../../components/CaseStudyHero/CaseStudyHero.tsx";
import StatStrip from "../../components/StatStrip/StatStrip.tsx";
import CaseStudyOverview from "../../components/CaseStudyOverview/CaseStudyOverview.tsx";
import CaseStudyDiscovery from "../../components/CaseStudyDiscovery/CaseStudyDiscovery.tsx";
import CaseStudyUserResearch from "../../components/CaseStudyUserResearch/CaseStudyUserResearch.tsx";
import CaseStudyInformationArchitecture from "../../components/CaseStudyInformationArchitecture/CaseStudyInformationArchitecture.tsx";
import CaseStudyInterfaceDesign from "../../components/CaseStudyInterfaceDesign/CaseStudyInterfaceDesign.tsx";
import CaseStudyUsabilityTests from "../../components/CaseStudyUsabilityTests/CaseStudyUsabilityTests.tsx";
import CaseStudyDataAnalysis from "../../components/CaseStudyDataAnalysis/CaseStudyDataAnalysis.tsx";
import CaseStudyLearnings from "../../components/CaseStudyLearnings/CaseStudyLearnings.tsx";
import ContactSection from "../../components/ContactSection/ContactSection.tsx";
import { useTheme } from "../../theme/ThemeContext.tsx";
import { GITHUB_HREF, LINKEDIN_HREF } from "../../links.ts";
import useActiveSection from "../../hooks/useActiveSection.ts";
import useDocumentTitle from "../../hooks/useDocumentTitle.ts";
import useReveal from "../../hooks/useReveal.ts";
import { ROUTES } from "../../routes.ts";

// Labels and anchors from Figma (ProcessNav 134:39838)
const SECTIONS: readonly CaseStudySection[] = [
    { href: "#overview", label: "Overview" },
    { href: "#discovery", number: "01", label: "Discovery" },
    { href: "#user-research", number: "02", label: "User Research" },
    { href: "#information-architecture", number: "03", label: "Information Architecture" },
    { href: "#interface-design", number: "04", label: "UI Design" },
    { href: "#usability-tests", number: "05", label: "Usability Tests" },
    { href: "#data-analysis", number: "06", label: "Data Analysis" },
];

const STATS = [
    { value: "50+", label: "tools on the platform" },
    { value: "100+", label: "engineering teams" },
    { value: "~10", label: "in-depth interviews" },
    { value: "3", label: "platform experts in card sorting" },
    { value: "Ongoing", label: "Continuous usability testing", icon: "cycle" },
] as const;

// Phase content by anchor; phases without an entry render as empty anchors until their step is built
const PHASE_CONTENT: Partial<Record<string, ReactNode>> = {
    "#discovery": <CaseStudyDiscovery />,
    "#user-research": <CaseStudyUserResearch />,
    "#information-architecture": <CaseStudyInformationArchitecture />,
    "#interface-design": <CaseStudyInterfaceDesign />,
    "#usability-tests": <CaseStudyUsabilityTests />,
    "#data-analysis": <CaseStudyDataAnalysis />,
};

// Matches the global `scroll-padding-top` (72px) on <html>; clears the sticky ProcessNav (8px + 50px)
const NAV_OFFSET = 72;

const CaseStudyPage = () => {
    useDocumentTitle("OCADO Technology Platform Documentation — Dawid");
    const activeHref = useActiveSection(SECTIONS, NAV_OFFSET);
    const { theme } = useTheme();
    const mainRef = useRef<HTMLElement>(null);
    useReveal(mainRef);

    return (
        <PageLayout className={styles.page}>
            <ProcessNav
                steps={SECTIONS}
                activeHref={activeHref ?? SECTIONS[0].href}
                backTo={`${ROUTES.home}#projects`}
                backLabel="Back to projects"
            />

            <main ref={mainRef} className={styles.main}>
                <div className={styles.intro} data-reveal>
                    <CaseStudyHero
                        titleAccent="OCADO Technology"
                        title="documentation platform"
                        note={
                            <>
                                <strong>Note on confidentiality:</strong> Due to strict NDA agreements, publication of artifacts is limited.
                            </>
                        }
                    />
                    <StatStrip stats={STATS} />
                </div>

                <section id="overview" aria-label="Project overview" data-reveal>
                    <CaseStudyOverview />
                </section>

                {SECTIONS.slice(1).map((section) => (
                    <section key={section.href} id={section.href.slice(1)} aria-label={section.label} data-reveal>
                        {PHASE_CONTENT[section.href]}
                    </section>
                ))}

                <section id="what-i-learned" aria-label="What I learned" data-reveal>
                    <CaseStudyLearnings />
                </section>
            </main>

            <ContactSection
                className={styles.contact}
                theme={theme}
                linkedinHref={LINKEDIN_HREF}
                githubHref={GITHUB_HREF}
            />
        </PageLayout>
    );
};

export default CaseStudyPage;
