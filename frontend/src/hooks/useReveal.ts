import { useEffect, type RefObject } from "react";

/**
 * Marks `[data-reveal]` elements inside `containerRef` with `data-revealed` once they scroll into view.
 * The animation itself lives in CSS (fade + 8px rise keyframes on `[data-revealed]`),
 * gated by `prefers-reduced-motion: no-preference`.
 */
const useReveal = (containerRef: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const targets = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
        const reveal = (el: Element) => el.setAttribute("data-revealed", "");

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !("IntersectionObserver" in window)) {
            targets.forEach(reveal);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    reveal(entry.target);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [containerRef]);
};

export default useReveal;
