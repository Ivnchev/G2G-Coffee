import fetchData from "../../utils/utilityFunctions"


function user() {
    return fetchData('auth/user')
}

function login(data) {
    return fetchData('auth/login', 'POST', data)
}


function register(data) {
    return fetchData('auth/register', 'POST', data)
}

function logout() {
    return fetchData('auth/logout', 'POST')
}

const AuthService = {
    user,
    login,
    register,
    logout
}

export default AuthService