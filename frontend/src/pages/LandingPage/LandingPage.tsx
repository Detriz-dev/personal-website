import { useState } from "react";
import style from "./LandingPage.module.css";
import TopNav from "../../components/TopNav/TopNav.tsx";
import HeroSection from "../../components/HeroSection/HeroSection.tsx";
import SkillSection from "../../components/SkillSection/SkillSection.tsx";
import type { TopNavLink, TopNavTheme } from "../../components/TopNav/TopNav.types.ts";

// Labels from docs/site-copy.md; icons from Figma (TopNav, node 42:29568)
const NAV_LINKS: TopNavLink[] = [
    { label: "Skills", icon: "home_repair_service", href: "#skills" },
    { label: "Career path", icon: "directions", href: "#career-path" },
    { label: "Selected Work", icon: "folder_copy", href: "#selected-work" },
    { label: "About me", icon: "account_box", href: "#about-me" },
];

const LandingPage = () => {
    const [theme, setTheme] = useState<TopNavTheme>("light");
    const [menuOpen, setMenuOpen] = useState(false);

    return (<div className={`${style.page} ${style[theme]}`}>
        <TopNav
            className={style.nav}
            theme={theme}
            homeHref="#"
            links={NAV_LINKS}
            githubHref="#" // TODO: GitHub profile URL
            linkedinHref="#" // TODO: LinkedIn profile URL
            onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
            menuOpen={menuOpen}
            onMenuToggle={() => setMenuOpen(!menuOpen)}
        />

        <HeroSection className={style.hero} theme={theme} processHref="#skills" />

        <SkillSection id="skills" theme={theme} />
    </div>)}

export default LandingPage;
