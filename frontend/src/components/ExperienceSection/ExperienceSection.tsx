import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import TimeLine from "../TimeLine/TimeLine.tsx";
import type { TimeLineItem } from "../TimeLine/TimeLine.types.ts";
import styles from "./ExperienceSection.module.css";
import type { ExperienceSectionProps } from "./ExperienceSection.types.ts";

// Copy from docs/site-copy.md — 10+ Years of Experience > Domain Highlights; icons and line breaks from Figma (66:46392)
const DOMAINS: TimeLineItem[] = [
    { icon: "developer_guide", title: <>Career development<br />platform</>, company: "DOOS.pro" },
    { icon: "currency_exchange", title: <>B2B loan<br />system</>, company: "Santander Bank" },
    { icon: "person_search", title: <>B2B HR<br />platform</>, company: "eWork Group" },
    { icon: "coronavirus", title: <>Medical<br />instrument</>, company: "QIAGEN" },
    { icon: "terminal", title: <>Developer<br />tools</>, company: "OCADO Technology" },
];

// Copy from docs/site-copy.md — 10+ Years of Experience; emphasis as in Figma (66:46398)
const ExperienceSection = ({ theme = "light", className, ...sectionProps }: ExperienceSectionProps) => {
    const classes = [styles.experienceSection, className].filter(Boolean).join(" ");

    return (
        <section {...sectionProps} className={classes}>
            <div className={styles.inner}>
                <SectionHeader
                    theme={theme}
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
