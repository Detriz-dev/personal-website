import { Link } from "react-router";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types.ts";

const Button = (props: ButtonProps) => {
    const { label, variant = "primary", theme = "light", icon, className } = props;

    const classes = [styles.button, styles[variant], styles[theme], className]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            <span className={styles.label}>{label}</span>
            {icon && (
                <span className={`material-symbols-rounded ${styles.icon}`} aria-hidden="true">
                    {icon}
                </span>
            )}
        </>
    );

    if (props.to !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { label: _l, variant: _v, theme: _t, icon: _i, className: _c, ...linkProps } = props;
        return (
            <Link {...linkProps} className={classes}>
                {content}
            </Link>
        );
    }

    if (props.href !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { label: _l, variant: _v, theme: _t, icon: _i, className: _c, openInNewTab, ...anchorProps } = props;
        const newTabProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return (
            <a {...newTabProps} {...anchorProps} className={classes}>
                {content}
            </a>
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { label: _l, variant: _v, theme: _t, icon: _i, className: _c, type = "button", ...buttonProps } = props;
    return (
        <button {...buttonProps} type={type} className={classes}>
            {content}
        </button>
    );
};

export default Button;
