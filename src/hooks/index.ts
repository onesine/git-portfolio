import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(endpoint: string) {
    /* eslint-disable */
    const [data, setData] = useState<any>(null);
    /* eslint-enable */

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(endpoint)
            .then(({ data }) => setData(data))
            .catch(() => {
                /* eslint-disable */
                console.error("Something is wrong");
                /* eslint-enable */
            })
            .finally(() => {
                setLoading(false);
            });
    }, [endpoint]);

    return [data, loading];
}

export function useOnClickOutside(
    element: HTMLDivElement | null,
    handler: (event?: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            /* eslint-disable */
            // @ts-ignore
            if (!element || element.contains(event.target)) {
                /* eslint-enable */
                return;
            }

            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [element, handler]);
}
