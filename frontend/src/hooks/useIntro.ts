import { useEffect, useState } from "react";

const STORAGE_KEY = "introPlayed";

const alreadyPlayed = () => {
    try {
        return sessionStorage.getItem(STORAGE_KEY) !== null;
    } catch {
        return false; // storage blocked → play
    }
};

/**
 * True when the hero intro animation should play: once per session, and not on deep links (`#section`).
 * Decided in the state initialiser so the first render already has the right class (no flash).
 */
const useIntro = () => {
    const [intro] = useState(() => !window.location.hash && !alreadyPlayed());

    useEffect(() => {
        if (!intro) return;
        try {
            sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
            // storage blocked: the intro may play again on reload
        }
    }, [intro]);

    return intro;
};

export default useIntro;
