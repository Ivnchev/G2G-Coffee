import { useState, useEffect } from 'react';


const useFetch = ({
    url,
    method,
    data
}) => {

    const [state, setState] = useState(data)

    useEffect(() => {

        fetch("http://localhost:5000/api/v1/" + url, {
            method: method | 'GET',
            body: data,
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                setState(() => (data))
            })
            .catch(err => {
                console.log(err);
            })
    }, [url, method, data])

    return {
        state
    }
}


export default useFetch