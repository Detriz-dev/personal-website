import styles from "./Callout.module.css";
import type { CalloutProps, CalloutVariant } from "./Callout.types.ts";

const ICONS: Record<CalloutVariant, string> = {
    nda: "lock",
    bridge: "arrow_downward",
};

const Callout = ({ variant = "nda", icon, children, className }: CalloutProps) => (
    <aside className={[styles.callout, styles[variant], className].filter(Boolean).join(" ")}>
        <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
            {icon ?? ICONS[variant]}
        </span>
        <p className={styles.text}>{children}</p>
    </aside>
);

export default Callout;
