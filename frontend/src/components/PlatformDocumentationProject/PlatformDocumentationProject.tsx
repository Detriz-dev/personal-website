import Button from "../Button/Button.tsx";
import portalHomeLight from "../../assets/platform-documentation/portal-home-light.png";
import docsPageLight from "../../assets/platform-documentation/docs-page-light.png";
import portalHomeDark from "../../assets/platform-documentation/portal-home-dark.png";
import docsPageDark from "../../assets/platform-documentation/docs-page-dark.png";
import styles from "./PlatformDocumentationProject.module.css";
import type { PlatformDocumentationProjectProps } from "./PlatformDocumentationProject.types.ts";

// Responsibilities from docs/ocado-technology-platform-documentation.md; icons from Figma (119:38327)
const RESPONSIBILITIES = [
    { icon: "rocket_launch", label: "Discovery" },
    { icon: "search", label: "User Research" },
    { icon: "account_tree", label: "Information Architecture" },
    { icon: "web", label: "Interface Design" },
    { icon: "science", label: "Usability Tests" },
    { icon: "monitoring", label: "Data Analysis" },
];

// Screens exported from Figma — light 119:37999 / 119:37856, dark 132:3669 / 132:3722
const SCREENS = {
    portalHome: { light: portalHomeLight, dark: portalHomeDark },
    docsPage: { light: docsPageLight, dark: docsPageDark },
};

const PlatformDocumentationProject = ({
    theme = "light",
    projectHref,
    className,
    ...articleProps
}: PlatformDocumentationProjectProps) => {
    const classes = [styles.platformDocumentationProject, styles[theme], className].filter(Boolean).join(" ");

    return (
        <article {...articleProps} className={classes}>
            <div className={styles.intro}>
                <h3 className={styles.title}>
                    OCADO Technology
                    <br />
                    <span className={styles.accent}>Platform Documentation</span>
                </h3>

                <p className={styles.description}>
                    A developer platform with 50+ tools and 100+ engineering teams—turned from scattered docs into one
                    search-first documentation hub.
                </p>

                <div className={styles.responsibilities}>
                    <h4 className={styles.responsibilitiesHeading}>
                        <span className={`material-symbols-rounded ${styles.headingIcon}`} aria-hidden="true">
                            work
                        </span>
                        My responsibilities
                    </h4>
                    <ul className={styles.list}>
                        {RESPONSIBILITIES.map((item) => (
                            <li key={item.label} className={styles.item}>
                                <span className={styles.itemIcon} aria-hidden="true">
                                    <span className="material-symbols-rounded">{item.icon}</span>
                                </span>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {projectHref && (
                    <Button
                        className={styles.cta}
                        label="View case study"
                        variant="secondary"
                        theme={theme}
                        icon="arrow_right_alt"
                        to={projectHref}
                    />
                )}
            </div>

            <div className={styles.screens} aria-hidden="true">
                <img className={`${styles.screen} ${styles.screenBack}`} src={SCREENS.portalHome[theme]} width={1280} height={755} alt="" />
                <img className={`${styles.screen} ${styles.screenFront}`} src={SCREENS.docsPage[theme]} width={1280} height={751} alt="" />
            </div>
        </article>
    );
};

export default PlatformDocumentationProject;
