

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

    return new Promise((resolve, reject) => {
        fetch("http://localhost:5000/api/v1/" + url, options)
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