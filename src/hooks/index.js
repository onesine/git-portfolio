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
    }, []);

    return [data, loading];
}