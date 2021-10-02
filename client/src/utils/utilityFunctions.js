

const fetchData = (
    url,
    method,
    data
) => {
    let options = {
        method: method || 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }
    if (method === "POST" || method === "PUT" || method === "PATCH") {
        options.body = JSON.stringify(data)
    }

    return fetch("http://localhost:5000/api/v1/" + url, options)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        })

}


export default fetchData