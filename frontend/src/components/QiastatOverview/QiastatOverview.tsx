import styles from "./QiastatOverview.module.css";
import CaseStudySectionHeader from "../CaseStudySectionHeader/CaseStudySectionHeader.tsx";

// Chips from Figma (My responsibilities 181:5260)
const RESPONSIBILITIES = [
    { number: "01", label: "Research" },
    { number: "02", label: "Information Architecture" },
    { number: "03", label: "UI Design" },
    { number: "04", label: "Design System" },
    { number: "05", label: "Usability tests" },
] as const;

/** QIAstat-Dx Rise overview (Figma 181:4056): intro + responsibilities chips. */
const QiastatOverview = () => (
    <div className={styles.overview}>
        <CaseStudySectionHeader
            variant="overview"
            accent="Project"
            title="overview"
            description={
                <>
                    During the COVID-19 pandemic, hospitals needed to run far more diagnostic tests than the original
                    QIAstat-Dx instrument could handle. QIAGEN's response was QIAstat-Dx Rise — a higher-throughput
                    version capable of processing <strong>up to 160 samples per day</strong>. A bigger instrument meant
                    a bigger screen, a more complex workflow, and a fully redesigned touchscreen interface. The brief
                    wasn't to start from zero. It was to{" "}
                    <strong>take what worked in the original UI, fix what didn't, and build something that could scale</strong>{" "}
                    — not just to this instrument, but across QIAGEN's entire device portfolio.
                </>
            }
        />

        <div className={styles.responsibilities}>
            <h3 className={styles.subheading}>My responsibilities</h3>
            <ul className={styles.chips}>
                {RESPONSIBILITIES.map((item) => (
                    <li key={item.number} className={styles.chip}>
                        <span className={styles.number}>{item.number}</span>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default QiastatOverview;
