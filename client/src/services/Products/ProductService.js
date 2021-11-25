import fetchData from "../../utils/utilityFunctions"

function getProducts(query) {
    if (query) {
        return fetchData(`products?offers=${query}`, 'GET')
    }
    return fetchData('products', 'GET')
}

function postProduct(data) {
    return fetchData('products', 'POST', data)
}

function editProduct(id, data) {
    return fetchData('products/' + id, 'PUT', data)
}

function deleteProduct(id) {
    return fetchData('products/' + id, 'DELETE')
}

function getOneProduct(id) {
    return fetchData('products/' + id, 'GET')
}

const productService = {
    postProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct
}

export default productService