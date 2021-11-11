import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [isError, setError] = useState(true)

        useEffect(() => {
            const abortConn = new AbortController();
            setTimeout(()=>{
                fetch(url, { signal:abortConn.signal})
                .then((res) => {
                    if(!res.ok){
                        throw Error('Could not connect to the server')
                    }
                    return res.json()
                })
                .then((data)=>{
                    setData(data)
                    setPending(false)
                    setError(null)
                })
                .catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log('Fetch Aborted')
                    }
                    else{
                        setPending(false)
                        setError(err.message)
                    }
                })
            },1000)
            return (()=> {abortConn.abort()})     
        },[url])
    return {data, isPending, isError}
}
 
export default useFetch;