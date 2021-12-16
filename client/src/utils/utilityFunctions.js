

const fetchData = (
    baseUrl,
    method,
    data
) => {
    let baseOptions = {
        method: method || 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }
    const url = baseUrl.includes('http') ? baseUrl : "http://localhost:5000/api/v1/" + baseUrl
    let options = !url.includes('localhost')
        ? { method: 'GET', headers: { 'Content-Type': 'application/json' } }
        : baseOptions
    if (method === "POST" || method === "PUT" || method === "PATCH") {
        options.body = JSON.stringify(data)
    }

    return new Promise((resolve, reject) => {
        fetch(url, options)
            // .then(res => res.json())
            .then(res => {
                const response = res.json()
                response
                    .then(data => {
                        if (res.status >= 400) {
                            reject(data)
                        } else {
                            resolve(data)
                        }
                    })
            })
            .catch(error => {
                reject(error)
            })
    })

}


export default fetchData