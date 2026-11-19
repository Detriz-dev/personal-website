import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

// Give a lazy-loaded page up to ~1s to render the hash target before giving up
const MAX_FRAMES = 60;

/**
 * Scroll handling between pages (BrowserRouter doesn't do it):
 * - new page without a hash → top of the page
 * - new page with a hash (e.g. "/#projects") → that section, once it has rendered
 * Hash changes on the same page are left to the browser (native smooth anchor scrolling).
 */
const ScrollManager = () => {
    const { pathname, hash } = useLocation();
    const previousPathname = useRef<string>(null);

    useEffect(() => {
        const isFirstRender = previousPathname.current === null;
        const pageChanged = previousPathname.current !== pathname;
        previousPathname.current = pathname;
        if (!pageChanged) return;

        if (!hash) {
            if (!isFirstRender) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
        }

        let frame = 0;
        let attempts = 0;
        const scrollToHash = () => {
            const target = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (target) {
                target.scrollIntoView({ behavior: "instant" });
            } else if (attempts++ < MAX_FRAMES) {
                frame = requestAnimationFrame(scrollToHash);
            }
        };
        scrollToHash();
        return () => cancelAnimationFrame(frame);
    }, [pathname, hash]);

    return null;
};

export default ScrollManager;
