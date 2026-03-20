import { useEffect, useState} from "react";
export function usePageReady() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        if(document.readyState === 'complete'){
            setIsLoaded(true);
            return;
        }
        const handleLoad = () => {
            setIsLoaded(true);
        }
        window.addEventListener('load', handleLoad)
        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])
    return isLoaded
}