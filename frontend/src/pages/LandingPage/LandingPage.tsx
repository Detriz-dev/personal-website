import { useEffect, useState } from "react";
import style from "./LandingPage.module.css";
import TopNav from "../../components/TopNav/TopNav.tsx";
import HeroSection from "../../components/HeroSection/HeroSection.tsx";
import SkillSection from "../../components/SkillSection/SkillSection.tsx";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection.tsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.tsx";
import TeachingSection from "../../components/TeachingSection/TeachingSection.tsx";
import ContactSection from "../../components/ContactSection/ContactSection.tsx";
import type { TopNavLink, TopNavTheme } from "../../components/TopNav/TopNav.types.ts";

// Labels from docs/site-copy.md; icons from Figma (TopNav, node 42:29568)
const NAV_LINKS: TopNavLink[] = [
    { label: "Skills", icon: "home_repair_service", href: "#skills" },
    { label: "Experience", icon: "directions", href: "#experience" },
    { label: "Projects", icon: "folder_copy", href: "#projects" },
    { label: "Teaching", icon: "school", href: "#teaching" },
    { label: "Contact me", icon: "account_box", href: "#contact" },
];

// Matches html scroll-padding-top in index.css: a section counts as current once its top passes under the TopNav
const NAV_OFFSET = 72;

/** Href of the nav link whose section is currently at the top of the viewport. */
const useActiveSection = (links: TopNavLink[]) => {
    const [activeHref, setActiveHref] = useState<string>();

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const sections = links
                .map((link) => ({ href: link.href, el: document.querySelector<HTMLElement>(link.href) }))
                .filter((s): s is { href: string; el: HTMLElement } => s.el !== null);

            // At the very bottom the last section may never reach the top, so select it explicitly
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom && sections.length > 0) {
                setActiveHref(sections[sections.length - 1].href);
                return;
            }

            const current = sections.filter((s) => s.el.getBoundingClientRect().top <= NAV_OFFSET + 1).pop();
            setActiveHref(current?.href);
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, [links]);

    return activeHref;
};

/** True once the page has been scrolled away from the very top (i.e. past the initial hero view). */
const useHasScrolled = () => {
    const [scrolled, setScrolled] = useState(() => window.scrollY > 0);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrolled;
};

const LandingPage = () => {
    const [theme, setTheme] = useState<TopNavTheme>("dark");
    const [menuOpen, setMenuOpen] = useState(false);
    const activeHref = useActiveSection(NAV_LINKS);
    const navVisible = useHasScrolled();


    return (<div className={`${style.page} ${style[theme]}`}>
        <TopNav
            theme={theme}
            homeHref="#"
            links={NAV_LINKS}
            activeHref={activeHref}
            githubHref="#" // TODO: GitHub profile URL
            linkedinHref="#" // TODO: LinkedIn profile URL
            onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
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
            linkedinHref="#" // TODO: LinkedIn profile URL
            githubHref="#" // TODO: GitHub profile URL
        />
    </div>)}

export default LandingPage;
