import SmartHomeKitWork from "../SmartHomeKitWork/SmartHomeKitWork.tsx";
import PlatformDocumentationProject from "../PlatformDocumentationProject/PlatformDocumentationProject.tsx";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types.ts";

const ProjectSection = ({ theme = "light", className, ...sectionProps }: ProjectSectionProps) => {
    const classes = [styles.projectSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes} aria-label="Projects">
            <SmartHomeKitWork theme={theme} projectHref="https://smart-home-kit.detriz.com/" />
            {/* projectHref omitted: "View case study" stays hidden until the case study page exists */}
            <PlatformDocumentationProject theme={theme} />
        </section>
    );
};

export default ProjectSection;
