import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                const { sol_keys, validity_checks, ...sol_data } = data;

                const usedData = Object.entries(sol_data).map(([sol, data]) => (
                    {
                        sol: sol,
                        maxTemp: data?.AT.mx,
                        minTemp: data?.AT.mn,
                        windSpeed: data?.HWS.av,
                        windDeg: data?.WD.most_common.compass_degrees,
                        winDegCardinal: data?.WD.most_common.compass_point,
                        date: new Date(data?.First_UTC)
                    }
                ))

                setIsLoading(false)
                setData(usedData);
                console.log(usedData)
            }
            catch (err) {
                console.log(err)
                setError(err)
            }
        }

        fetchData();

    }, [url])

    return { isLoading, data, error }
}

