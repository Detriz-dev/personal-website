import SmartHomeKitWork from "../SmartHomeKitWork/SmartHomeKitWork.tsx";
import styles from "./SelectedWorkSection.module.css";
import type { SelectedWorkSectionProps } from "./SelectedWorkSection.types.ts";

const SelectedWorkSection = ({ theme = "light", className, ...sectionProps }: SelectedWorkSectionProps) => {
    const classes = [styles.selectedWorkSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes} aria-label="Selected work">
            <SmartHomeKitWork theme={theme} projectHref="https://smart-home-kit.detriz.com/" />
        </section>
    );
};

export default SelectedWorkSection;
