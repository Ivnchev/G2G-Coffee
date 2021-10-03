import fetchData from "../../utils/utilityFunctions"


function postFav(id, data) {
    return fetchData('favorites/' + id, 'POST', data)
}

function deleteFav(id) {
    return fetchData('favorites/' + id, 'PUT')
}


const favService = {
    postFav,
    deleteFav
}

export default favService