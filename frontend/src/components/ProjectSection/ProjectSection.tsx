import SmartHomeKitWork from "../SmartHomeKitWork/SmartHomeKitWork.tsx";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types.ts";

const ProjectSection = ({ theme = "light", className, ...sectionProps }: ProjectSectionProps) => {
    const classes = [styles.projectSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes} aria-label="Projects">
            <SmartHomeKitWork theme={theme} projectHref="https://smart-home-kit.detriz.com/" />
        </section>
    );
};

export default ProjectSection;
