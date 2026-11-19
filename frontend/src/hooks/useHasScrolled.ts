import { useEffect, useState } from "react";

/** True once the page has been scrolled away from the very top. */
const useHasScrolled = () => {
    const [scrolled, setScrolled] = useState(() => window.scrollY > 0);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrolled;
};

export default useHasScrolled;
