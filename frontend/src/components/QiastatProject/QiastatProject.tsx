import Button from "../Button/Button.tsx";
import VideoEmbed from "../VideoEmbed/VideoEmbed.tsx";
import videoThumbnail from "../../assets/qiastat/video-thumbnail.jpg";
import styles from "./QiastatProject.module.css";
import type { QiastatProjectProps } from "./QiastatProject.types.ts";

// Icons from Figma (187:3298)
const RESPONSIBILITIES = [
    { icon: "search", label: "Research" },
    { icon: "account_tree", label: "Information Architecture" },
    { icon: "web", label: "UI Design" },
    { icon: "widgets", label: "Design System" },
    { icon: "science", label: "Usability Tests" },
];

const QiastatProject = ({ theme = "light", projectHref, className, ...articleProps }: QiastatProjectProps) => {
    const classes = [styles.qiastatProject, styles[theme], className].filter(Boolean).join(" ");

    return (
        <article {...articleProps} className={classes}>
            <div className={styles.intro} data-reveal="rise">
                <h3 className={styles.title}>
                    QIAGEN
                    <br />
                    <span className={styles.accent}>QIAstat-Dx Rise</span>
                </h3>

                <p className={styles.description}>
                    A high-throughput diagnostic instrument built for the pandemic testing surge, running up to 160
                    samples a day. I redesigned its touchscreen for gloved, standing lab operators and fed its patterns
                    into QIAGEN's portfolio-wide design system.
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

            <div data-reveal="rise">
                <VideoEmbed
                    className={styles.video}
                    videoId="0dfB1SiJtPY"
                    start={8}
                    title="Meet your new lab partner, the QIAstat-Dx Rise"
                    thumbnail={videoThumbnail}
                    caption="Meet your new lab partner, the QIAstat-Dx Rise · QIAGEN"
                />
            </div>
        </article>
    );
};

export default QiastatProject;
