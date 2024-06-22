"use client"
import { useState, useEffect, useContext } from 'react';
import { API } from '../API';
import { GlobalState } from '@/ContextApi/ContextApi';

const useFetch = (url, token) => {
    const { reload } = useContext(GlobalState)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = new Headers();

                if (token) {
                    const parseToken = JSON.parse(token)
                    headers.append('Authorization', `Bearer ${parseToken}`);
                }
                const response = await fetch(API + url, {
                    method: 'GET',
                    headers: headers,
                });
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, token, reload]);

    return { data, loading, error };
};

export default useFetch;
