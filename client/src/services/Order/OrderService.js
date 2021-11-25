import fetchData from "../../utils/utilityFunctions"


function postOrder(data) {
    return fetchData('orders', 'POST', data)
}

function getOrders(query) {
    if (query) {
        return fetchData(`orders?sells=${query}`, 'GET')
    }
    return fetchData('orders', 'GET')
}

const orderService = {
    postOrder,
    getOrders
}

export default orderService