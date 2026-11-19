import { useEffect, useState } from "react";
import portrait from "../../assets/footer/portrait.png";
import styles from "./ContactSection.module.css";
import type { ContactSectionProps } from "./ContactSection.types.ts";

// Copy from docs/site-copy.md — Footer / Contact
const PHONE = "+48 609 984 199";
const EMAIL = "kowalczyk.dawid@gmail.com";

const ContactSection = ({ theme = "light", linkedinHref, githubHref, className, ...contactProps }: ContactSectionProps) => {
    const classes = [styles.section, styles[theme], className].filter(Boolean).join(" ");
    const [copied, setCopied] = useState(false);

    // Reset the "copied" checkmark after a moment
    useEffect(() => {
        if (!copied) return;
        const timeout = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeout);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            // Clipboard unavailable (e.g. insecure context); the address stays visible to copy manually
        }
    };

    return (
        <footer {...contactProps} className={classes}>
            <div className={styles.inner}>
                <div className={styles.portrait}>
                    <img src={portrait} width={210} height={174} alt="Dawid Kowalczyk" />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.headline}>Thanks for stopping by.</h2>
                    <p className={styles.subheadline}>
                        Have a question or just want to chat? Feel free to reach out here:.
                    </p>

                    <ul className={styles.contacts}>
                        <li>
                            <a className={styles.contact} href={`tel:${PHONE.replace(/\s/g, "")}`}>
                                <span className={`material-symbols-rounded ${styles.contactIcon}`} aria-hidden="true">
                                    phone_enabled
                                </span>
                                <span className={styles.label}>{PHONE}</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${styles.contact} ${styles.copy}`}
                                onClick={copyEmail}
                                aria-label={`Copy email address ${EMAIL}`}
                            >
                                <span className={`material-symbols-rounded ${styles.contactIcon}`} aria-hidden="true">
                                    mail
                                </span>
                                <span className={styles.label}>{EMAIL}</span>
                                <span className={`material-symbols-rounded ${styles.copyIcon}`} aria-hidden="true">
                                    {copied ? "check" : "content_copy"}
                                </span>
                            </button>
                            <span className={styles.visuallyHidden} role="status">
                                {copied ? "Email address copied" : ""}
                            </span>
                        </li>
                    </ul>

                    <ul className={styles.socials}>
                        <li>
                            <a className={styles.social} href={linkedinHref} target="_blank" rel="noreferrer">
                                <span className={styles.label}>LinkedIn</span>
                                <span className={`material-symbols-rounded ${styles.socialIcon}`} aria-hidden="true">
                                    arrow_outward
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.social} href={githubHref} target="_blank" rel="noreferrer">
                                <span className={styles.label}>GitHub</span>
                                <span className={`material-symbols-rounded ${styles.socialIcon}`} aria-hidden="true">
                                    arrow_outward
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
