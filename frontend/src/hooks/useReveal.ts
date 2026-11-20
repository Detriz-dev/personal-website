import { useEffect, type RefObject } from "react";

type RevealOptions = {
    /**
     * Minimum gap in ms between consecutive reveals. Elements entering the viewport together
     * (or faster than this) are queued in DOM order; each gets its wait as `--reveal-delay`,
     * for the CSS to use as a transition/animation delay. 0 (default) reveals everything at once.
     */
    stagger?: number;
    /**
     * Longest a newly entering group waits for earlier, still-queued elements, in ms. Keeps content
     * from lagging behind after a fast scroll (e.g. a nav jump) passes many elements.
     * Elements entering together still stagger among themselves. Default 600.
     */
    maxDelay?: number;
};

const byDomOrder = (a: Element, b: Element) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;

/**
 * Marks `[data-reveal]` elements inside `containerRef` with `data-revealed` once they scroll into view.
 * The animation itself lives in CSS, gated by `prefers-reduced-motion: no-preference`.
 */
const useReveal = (containerRef: RefObject<HTMLElement | null>, { stagger = 0, maxDelay = 600 }: RevealOptions = {}) => {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const targets = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
        let nextAt = 0; // earliest time (performance.now) the next queued element may start

        // Elements entering together, in DOM order: wait for the backlog (capped), then one per `stagger`
        const revealGroup = (group: HTMLElement[]) => {
            const now = performance.now();
            const start = Math.min(maxDelay, Math.max(0, nextAt - now));
            group.forEach((el, i) => {
                if (stagger > 0) el.style.setProperty("--reveal-delay", `${Math.round(start + i * stagger)}ms`);
                el.setAttribute("data-revealed", "");
            });
            nextAt = now + start + group.length * stagger;
        };

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !("IntersectionObserver" in window)) {
            targets.forEach((el) => el.setAttribute("data-revealed", ""));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entering = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => entry.target as HTMLElement)
                    .sort(byDomOrder);
                if (entering.length === 0) return;
                entering.forEach((el) => observer.unobserve(el));
                revealGroup(entering);
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [containerRef, stagger, maxDelay]);
};

export default useReveal;
