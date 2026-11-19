import SmartHomeKitWork from "../SmartHomeKitWork/SmartHomeKitWork.tsx";
import PlatformDocumentationProject from "../PlatformDocumentationProject/PlatformDocumentationProject.tsx";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types.ts";
import { ROUTES } from "../../routes.ts";

const ProjectSection = ({ theme = "light", className, ...sectionProps }: ProjectSectionProps) => {
    const classes = [styles.projectSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes} aria-label="Projects">
            <PlatformDocumentationProject theme={theme} projectHref={ROUTES.platformDocumentation} />
            <SmartHomeKitWork theme={theme} projectHref="https://smart-home-kit.detriz.com/" />
        </section>
    );
};

export default ProjectSection;
