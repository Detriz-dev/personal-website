import { useEffect } from "react";

/** Sets the browser tab title while the calling page is mounted. */
const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useDocumentTitle;
