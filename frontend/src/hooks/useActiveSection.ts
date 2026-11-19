import { useEffect, useState } from "react";

/**
 * Href of the section currently at the top of the viewport.
 * A section counts as current once its top passes under `navOffset` px (match the sticky nav height / scroll-padding-top).
 */
const useActiveSection = (links: readonly { href: string }[], navOffset: number) => {
    const [activeHref, setActiveHref] = useState<string>();

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const sections = links
                .map((link) => ({ href: link.href, el: document.querySelector<HTMLElement>(link.href) }))
                .filter((s): s is { href: string; el: HTMLElement } => s.el !== null);

            // At the very bottom the last section may never reach the top, so select it explicitly
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom && sections.length > 0) {
                setActiveHref(sections[sections.length - 1].href);
                return;
            }

            const current = sections.filter((s) => s.el.getBoundingClientRect().top <= navOffset + 1).pop();
            setActiveHref(current?.href);
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, [links, navOffset]);

    return activeHref;
};

export default useActiveSection;
