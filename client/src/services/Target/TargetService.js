import fetchData from "../../utils/utilityFunctions"

function getTarget() {
    return fetchData('target', 'GET')
}

function postTarget(data) {
    return fetchData('target', 'POST', data)
}

function updateTarget(id, data) {
    return fetchData('target/' + id, 'PUT', data)
}

function deleteTarget(id) {
    return fetchData('target/' + id , 'DELETE')
}

function getOneTarget(id) {
    return fetchData('target/' + id, 'GET')
}

const targetService = {
    getTarget,
    postTarget,
    updateTarget,
    deleteTarget,
    getOneTarget
}

export default targetService