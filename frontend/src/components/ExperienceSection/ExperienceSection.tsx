import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import TimeLine from "../TimeLine/TimeLine.tsx";
import type { TimeLineItem } from "../TimeLine/TimeLine.types.ts";
import styles from "./ExperienceSection.module.css";
import type { ExperienceSectionProps } from "./ExperienceSection.types.ts";

// Icons from Figma (66:46392). Most recent first.
const DOMAINS: TimeLineItem[] = [
    { icon: "terminal", title: "Developer tools", company: "OCADO Technology" },
    { icon: "coronavirus", title: "Medical instrument", company: "QIAGEN" },
    { icon: "person_search", title: "B2B HR platform", company: "eWork Group" },
    { icon: "currency_exchange", title: "B2B loan system", company: "Santander Bank" },
    { icon: "developer_guide", title: "Career development platform", company: "DOOS.pro" },
];

// Emphasis as in Figma (66:46398)
const ExperienceSection = ({ theme = "light", className, ...sectionProps }: ExperienceSectionProps) => {
    const classes = [styles.experienceSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <SectionHeader
                    theme={theme}
                    reveal
                    accent="10+ years"
                    title="of experience"
                    description={
                        <>
                            Working in unfamiliar, high-complexity environments taught me how to{" "}
                            <strong>learn a new domain fast</strong>. Often as the <strong>sole designer</strong>,{" "}
                            <strong>I led the design effort end-to-end</strong>: advocating for user needs,{" "}
                            <strong>championing human-centered design</strong>, and sharing early prototypes to{" "}
                            <strong>respect experts' time</strong>.
                        </>
                    }
                />
                <TimeLine theme={theme} items={DOMAINS} className={styles.timeLine} />
            </div>
        </section>
    );
};

export default ExperienceSection;
