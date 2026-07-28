import { useEffect, useState } from "react";

export function usePageReady() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const checkReady = () => {
            if ('fonts' in document) {
                document.fonts.ready.then(() => setIsLoaded(true));
            } else {
                setIsLoaded(true);
            }
        };

        if (document.readyState === 'complete') {
            checkReady();
        } else {
            window.addEventListener('load', checkReady);
            return () => window.removeEventListener('load', checkReady);
        }
    }, []);

    return isLoaded;
}