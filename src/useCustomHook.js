import { useState, useEffect } from 'react';

const UseCustomHook = (URL) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false)
                setData(data)
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
                console.log(error.message)
            })
    }, [URL])
    return { data, isLoading, isError }
}

export default UseCustomHook;
