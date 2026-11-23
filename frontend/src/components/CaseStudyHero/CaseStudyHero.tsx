import styles from "./CaseStudyHero.module.css";
import type { CaseStudyHeroProps } from "./CaseStudyHero.types.ts";
import Callout from "../Callout/Callout.tsx";

const CaseStudyHero = ({ titleAccent, title, note, aside }: CaseStudyHeroProps) => {
    const text = (
        <>
            {note && <Callout variant="nda">{note}</Callout>}
            <h1 className={styles.title}>
                <span className={styles.accent}>{titleAccent}</span>
                {title && ` ${title}`}
            </h1>
        </>
    );

    return aside ? (
        <header className={`${styles.hero} ${styles.withAside}`}>
            <div className={styles.text}>{text}</div>
            <div className={styles.aside}>{aside}</div>
        </header>
    ) : (
        <header className={styles.hero}>{text}</header>
    );
};

export default CaseStudyHero;
