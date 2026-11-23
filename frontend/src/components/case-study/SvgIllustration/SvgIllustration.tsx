import styles from "./SvgIllustration.module.css";

type SvgIllustrationProps = {
    /** SVG markup imported with `?raw` from our own assets (never user content). Colors use `--color-*` tokens. */
    svg: string;
    className?: string;
};

/** Decorative inline SVG that follows the theme and scales to its container width. */
const SvgIllustration = ({ svg, className }: SvgIllustrationProps) => (
    <div
        className={[styles.illustration, className].filter(Boolean).join(" ")}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: svg }}
    />
);

export default SvgIllustration;
