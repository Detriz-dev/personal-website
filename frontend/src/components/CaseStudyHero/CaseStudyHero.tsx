import styles from "./CaseStudyHero.module.css";
import type { CaseStudyHeroProps } from "./CaseStudyHero.types.ts";
import Callout from "../Callout/Callout.tsx";

const CaseStudyHero = ({ titleAccent, title, note }: CaseStudyHeroProps) => (
    <header className={styles.hero}>
        <Callout variant="nda">{note}</Callout>
        <h1 className={styles.title}>
            <span className={styles.accent}>{titleAccent}</span> {title}
        </h1>
    </header>
);

export default CaseStudyHero;
