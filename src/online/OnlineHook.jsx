import { useEffect, useState } from "react";

export function useOnline() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleIsOnline() {
            setIsOnline(true);
        }

        function handeIsOffline() {
            setIsOnline(false);
        }

        window.addEventListener("online", handleIsOnline);
        window.addEventListener("offline", handeIsOffline);

        return () => {
            window.removeEventListener("online", handleIsOnline);
            window.removeEventListener("offline", handeIsOffline);
        }
    }, []);

    return isOnline;
}