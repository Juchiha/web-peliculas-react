import {useState, useEffect} from 'react';

export default function useFetch(url, option){
    const [loading , setLoading ] = useState(false);
    const [result , setResult ] = useState(null);
    const [error , setError ] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, option);
                const Json = await res.json();
                setLoading(false);
                setResult(Json);
            }catch(err){
                setError(err);
                setLoading(false);
            }
        })();
    }, [option, url]);
    return {loading, result, error};
}