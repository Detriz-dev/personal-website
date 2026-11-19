import styles from "./Callout.module.css";
import type { CalloutProps, CalloutVariant } from "./Callout.types.ts";

const ICONS: Record<CalloutVariant, string> = {
    nda: "lock",
};

const Callout = ({ variant = "nda", children, className }: CalloutProps) => (
    <aside className={[styles.callout, styles[variant], className].filter(Boolean).join(" ")}>
        <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
            {ICONS[variant]}
        </span>
        <p className={styles.text}>{children}</p>
    </aside>
);

export default Callout;
