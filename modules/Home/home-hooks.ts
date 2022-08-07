/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useEffect } from 'react';

type UseHomeFormReturn = [
    string,
    (newUserName: string) => void,
    boolean
]

export const useHomeForm = (): UseHomeFormReturn => {
    const [username, setUsername] = useState('')
    const haveHola = useMemo(() => {
        return username === "hola";
    }, [username])

    return [username, setUsername, haveHola];
}

type useFetchReturn = [
    any,
    boolean,
    Error | null
]

export const useFetch = (url: string): useFetchReturn => {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            if (url) {
                setLoading(true);
                try {
                    const response = await fetch(url)
                    const rawData = await response.json();
                    if(rawData){
                        setData(rawData);
                    }
                } catch (error) {
                    setError(error as Error)
                } finally {
                    setLoading(false)
                }
              }
        };
        fetchData()
    }, [url])

    return [data, loading, error];
}