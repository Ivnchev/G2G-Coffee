import fetchData from "../../utils/utilityFunctions"

function getProducts(query) {
    if (typeof query === 'object') {
        if (query.sort) {
            return fetchData(`products?data=${query.sort}`, 'GET')
        }
        if (query.search && query.search !== '') {
            return fetchData(`products?search=${query.search}`, 'GET')
        }
    }

    if (query && query.search !== '') {
        return fetchData(`products?data=${query}`, 'GET')
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