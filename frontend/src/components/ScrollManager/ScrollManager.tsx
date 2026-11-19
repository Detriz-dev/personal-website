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
        const previous = previousPathname.current;
        const isFirstRender = previous === null;
        const pageChanged = previous !== pathname;
        previousPathname.current = pathname;
        if (!pageChanged) return;

        if (!hash) {
            if (!isFirstRender) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
        }

        let frame = 0;
        let attempts = 0;
        let done = false;
        let cancelled = false;
        const scrollToHash = () => {
            const target = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (target) {
                target.scrollIntoView({ behavior: "instant" });
                done = true;
                // On a cold load, late web fonts can shift the layout after the jump: re-pin the target
                // once fonts and the page have loaded, unless the user has scrolled since.
                let userScrolled = false;
                const onInput = () => (userScrolled = true);
                const inputs = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
                inputs.forEach((type) => window.addEventListener(type, onInput, { once: true, passive: true }));
                const loaded =
                    document.readyState === "complete"
                        ? Promise.resolve()
                        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
                Promise.all([document.fonts.ready, loaded]).then(() => {
                    inputs.forEach((type) => window.removeEventListener(type, onInput));
                    if (!cancelled && !userScrolled) target.scrollIntoView({ behavior: "instant" });
                });
            } else if (attempts++ < MAX_FRAMES) {
                frame = requestAnimationFrame(scrollToHash);
            }
        };
        scrollToHash();
        return () => {
            cancelled = true;
            cancelAnimationFrame(frame);
            // Cancelled before the target rendered (e.g. StrictMode's double effect run): let the next run retry
            if (!done) previousPathname.current = previous;
        };
    }, [pathname, hash]);

    return null;
};

export default ScrollManager;
