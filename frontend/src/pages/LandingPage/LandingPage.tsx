import { useState } from "react";
import style from "./LandingPage.module.css";
import Button from "../../components/Button/Button.tsx";
import TopNav from "../../components/TopNav/TopNav.tsx";
import QuestionDiagram from "../../components/QuestionDiagram/QuestionDiagram.tsx";
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
            theme={theme}
            homeHref="#"
            links={NAV_LINKS}
            githubHref="#" // TODO: GitHub profile URL
            linkedinHref="#" // TODO: LinkedIn profile URL
            onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
            menuOpen={menuOpen}
            onMenuToggle={() => setMenuOpen(!menuOpen)}
        />

        {/* Copy from docs/site-copy.md — Hero Visual Callouts */}
        <QuestionDiagram
            theme={theme}
            why={{ label: "Why build?", description: "Discovery & validation", icon: "manage_search" }}
            what={{ label: "What to build?", description: "Product strategy & UI", icon: "widgets" }}
            how={{ label: "How to build?", description: "Coded prototypes & specs", icon: "data_object" }}
            coreLabel="Feature"
        />

        <Button
            label={"How i find answer"}
            icon={"south"} />

        <Button
            label={"Selected work"}
            icon={"south"}
            variant="secondary"/>
        <h1 className={style.label}>Landing Page</h1></div>)}

export default LandingPage;
