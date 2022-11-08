import {useEffect, useState} from "react";
import axios from "axios";

export function useFetchData (endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(endpoint)
            .then(({data}) => {
                setData(data);
            })
            .catch(({response}) => console.error("Something is wrong"))
            .finally(() => {setLoading(false)})
        ;
    }, [endpoint]);

    return [data, loading];
}

export function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
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
    }, [ref, handler]);
}