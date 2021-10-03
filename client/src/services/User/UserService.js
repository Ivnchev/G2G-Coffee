import fetchData from "../../utils/utilityFunctions"


function user(id) {
    return fetchData('users/' + id)
}

const userService = {
    user
}

export default userService