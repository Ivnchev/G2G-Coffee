import fetchData from "../../utils/utilityFunctions"


function get(lat,lon) {
    return fetchData(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
}


const weatherService = {
    get
}

export default weatherService