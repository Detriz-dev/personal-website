import { useState } from "react";
import style from "./LandingPage.module.css";
import TopNav from "../../components/TopNav/TopNav.tsx";
import HeroSection from "../../components/HeroSection/HeroSection.tsx";
import SkillSection from "../../components/SkillSection/SkillSection.tsx";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection.tsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.tsx";
import TeachingSection from "../../components/TeachingSection/TeachingSection.tsx";
import ContactSection from "../../components/ContactSection/ContactSection.tsx";
import useDocumentTitle from "../../hooks/useDocumentTitle.ts";
import useActiveSection from "../../hooks/useActiveSection.ts";
import useHasScrolled from "../../hooks/useHasScrolled.ts";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import type { TopNavLink } from "../../components/TopNav/TopNav.types.ts";
import { useTheme } from "../../theme/ThemeContext.tsx";
import { GITHUB_HREF, LINKEDIN_HREF } from "../../links.ts";

// Icons from Figma (TopNav, node 42:29568)
const NAV_LINKS: TopNavLink[] = [
    { label: "Skills", icon: "home_repair_service", href: "#skills" },
    { label: "Experience", icon: "directions", href: "#experience" },
    { label: "Projects", icon: "folder_copy", href: "#projects" },
    { label: "Teaching", icon: "school", href: "#teaching" },
    { label: "Contact me", icon: "account_box", href: "#contact" },
];

// Matches html scroll-padding-top in index.css: a section counts as current once its top passes under the TopNav
const NAV_OFFSET = 72;

const LandingPage = () => {
    useDocumentTitle("Dawid — Product Designer");
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const activeHref = useActiveSection(NAV_LINKS, NAV_OFFSET);
    const navVisible = useHasScrolled();

    return (<PageLayout>
        <TopNav
            theme={theme}
            homeHref="#"
            links={NAV_LINKS}
            activeHref={activeHref}
            githubHref={GITHUB_HREF}
            linkedinHref={LINKEDIN_HREF}
            onThemeToggle={toggleTheme}
            menuOpen={menuOpen && navVisible} // closed while the nav is hidden
            onMenuToggle={() => setMenuOpen(!(menuOpen && navVisible))}
            visible={navVisible}
        />

        <HeroSection className={style.hero} theme={theme} processHref="#skills" />

        <SkillSection id="skills" theme={theme} />

        <ExperienceSection id="experience" className={style.experience} theme={theme} />

        <ProjectSection id="projects" className={style.projects} theme={theme} />

        <TeachingSection id="teaching" theme={theme} />

        <ContactSection
            id="contact"
            theme={theme}
            linkedinHref={LINKEDIN_HREF}
            githubHref={GITHUB_HREF}
        />
    </PageLayout>)}

export default LandingPage;
