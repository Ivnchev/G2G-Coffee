import fetchData from "../../utils/utilityFunctions"


function user(id) {
    return fetchData('users/' + id)
}

function updateUser(id, data) {
    return fetchData('users/' + id, 'PATCH', data)
}

const userService = {
    user,
    updateUser
}

export default userService