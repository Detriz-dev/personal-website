import { useRef, type ReactNode } from "react";
// Same page layout as the Ocado case study
import styles from "../CaseStudyPage/CaseStudyPage.module.css";
import type { CaseStudySection } from "../CaseStudyPage/CaseStudyPage.types.ts";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import ProcessNav from "../../components/ProcessNav/ProcessNav.tsx";
import CaseStudyHero from "../../components/CaseStudyHero/CaseStudyHero.tsx";
import QiastatOverview from "../../components/QiastatOverview/QiastatOverview.tsx";
import QiastatResearch from "../../components/QiastatResearch/QiastatResearch.tsx";
import QiastatInformationArchitecture from "../../components/QiastatInformationArchitecture/QiastatInformationArchitecture.tsx";
import QiastatInterfaceDesign from "../../components/QiastatInterfaceDesign/QiastatInterfaceDesign.tsx";
import QiastatDesignSystem from "../../components/QiastatDesignSystem/QiastatDesignSystem.tsx";
import QiastatUsabilityTests from "../../components/QiastatUsabilityTests/QiastatUsabilityTests.tsx";
import QiastatLearnings from "../../components/QiastatLearnings/QiastatLearnings.tsx";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed.tsx";
import videoThumbnail from "../../assets/qiastat/video-thumbnail.jpg";
import ContactSection from "../../components/ContactSection/ContactSection.tsx";
import { useTheme } from "../../theme/ThemeContext.tsx";
import { GITHUB_HREF, LINKEDIN_HREF } from "../../links.ts";
import useActiveSection from "../../hooks/useActiveSection.ts";
import useDocumentTitle from "../../hooks/useDocumentTitle.ts";
import useReveal from "../../hooks/useReveal.ts";
import { ROUTES } from "../../routes.ts";

// Labels and anchors from Figma (ProcessNav 181:4023)
const SECTIONS: readonly CaseStudySection[] = [
    { href: "#overview", label: "Overview" },
    { href: "#research", number: "01", label: "Research" },
    { href: "#information-architecture", number: "02", label: "Information Architecture" },
    { href: "#ui-design", number: "03", label: "UI Design" },
    { href: "#design-system", number: "04", label: "Design System" },
    { href: "#usability-tests", number: "05", label: "Usability Tests" },
];

// Phase content by anchor
const PHASE_CONTENT: Record<string, ReactNode> = {
    "#research": <QiastatResearch />,
    "#information-architecture": <QiastatInformationArchitecture />,
    "#ui-design": <QiastatInterfaceDesign />,
    "#design-system": <QiastatDesignSystem />,
    "#usability-tests": <QiastatUsabilityTests />,
};

// Matches the global `scroll-padding-top` (72px) on <html>; clears the sticky ProcessNav (8px + 50px)
const NAV_OFFSET = 72;

const QiastatCaseStudyPage = () => {
    useDocumentTitle("QIAstat-Dx Rise — Dawid");
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
                        titleAccent="QIAstat-Dx Rise"
                        notePosition="below"
                        note={
                            <>
                                <strong>Note on confidentiality:</strong> Due to strict NDA agreements, I can’t showcase
                                the user interfaces from this project. Instead, this case study pulls back the curtain on
                                my practical process, research insights, and architectural decisions.
                            </>
                        }
                        aside={
                            <VideoEmbed
                                videoId="0dfB1SiJtPY"
                                start={8}
                                title="Meet your new lab partner, the QIAstat-Dx Rise"
                                thumbnail={videoThumbnail}
                                caption="Meet your new lab partner, the QIAstat-Dx Rise · QIAGEN"
                            />
                        }
                    />
                </div>

                <section id="overview" aria-label="Project overview" data-reveal>
                    <QiastatOverview />
                </section>

                {SECTIONS.slice(1).map((section) => (
                    <section key={section.href} id={section.href.slice(1)} aria-label={section.label} data-reveal>
                        {PHASE_CONTENT[section.href]}
                    </section>
                ))}

                <section id="what-i-learned" aria-label="What I learned" data-reveal>
                    <QiastatLearnings />
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

export default QiastatCaseStudyPage;
