import Button from "../Button/Button.tsx";
import column1Light from "../../assets/smart-home-kit/column-1-light.png";
import column2Light from "../../assets/smart-home-kit/column-2-light.png";
import column3Light from "../../assets/smart-home-kit/column-3-light.png";
import column1Dark from "../../assets/smart-home-kit/column-1-dark.png";
import column2Dark from "../../assets/smart-home-kit/column-2-dark.png";
import column3Dark from "../../assets/smart-home-kit/column-3-dark.png";
import styles from "./SmartHomeKitWork.module.css";
import type { SmartHomeKitWorkProps } from "./SmartHomeKitWork.types.ts";

// Icons from Figma (73:13943)
const DELIVERABLES = [
    { icon: "widgets", label: "Domain model" },
    { icon: "widgets", label: "Design systems (Figma)" },
    { icon: "data_object", label: "UI Components (React)" },
    { icon: "data_object", label: "Documentation" },
    { icon: "data_object", label: "npm packages" },
];

// Tile columns exported from Figma at their natural size (light 73:13868/73:13892/73:13916, dark 76:2489/76:2513/76:2537)
const COLUMNS = [
    { light: column1Light, dark: column1Dark, height: 654 },
    { light: column2Light, dark: column2Dark, height: 675 },
    { light: column3Light, dark: column3Dark, height: 598 },
];

const SmartHomeKitWork = ({ theme = "light", projectHref, className, ...articleProps }: SmartHomeKitWorkProps) => {
    const classes = [styles.smartHomeKitWork, styles[theme], className].filter(Boolean).join(" ");

    return (
        <article {...articleProps} className={classes}>
            <div className={styles.intro}>
                <h3 className={styles.title}>
                    <span className={styles.accent}>Rapid Prototyping kit</span>
                    <br />
                    for Smart Home Apps
                </h3>

                <p className={styles.description}>
                    A domain-driven Figma and React UI kit for rapidly prototyping smart home apps, pre-structured with
                    real-world IoT states and naming conventions so you can skip the setup and start building.
                </p>

                <div className={styles.deliverables}>
                    <h4 className={styles.deliverablesHeading}>
                        <span className={`material-symbols-rounded ${styles.headingIcon}`} aria-hidden="true">
                            package_2
                        </span>
                        Deliverables
                    </h4>
                    <ul className={styles.list}>
                        {DELIVERABLES.map((item) => (
                            <li key={item.label} className={styles.item}>
                                <span className={styles.itemIcon} aria-hidden="true">
                                    <span className="material-symbols-rounded">{item.icon}</span>
                                </span>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <Button
                    className={styles.cta}
                    label="View Project"
                    variant="secondary"
                    theme={theme}
                    icon="arrow_right_alt"
                    href={projectHref}
                    openInNewTab
                />
            </div>

            <div className={styles.columns} aria-hidden="true">
                {COLUMNS.map((column) => (
                    <img
                        key={column.light}
                        className={styles.column}
                        src={column[theme]}
                        width={222}
                        height={column.height}
                        alt=""
                    />
                ))}
            </div>
        </article>
    );
};

export default SmartHomeKitWork;
