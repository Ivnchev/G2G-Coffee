const productModel = require('../../models/Product')
const userModel = require('../../models/User')

const getAll = async (query) => {
    let data
    try {

        const products = {
            'top': () => {
                return productModel.find({ 'category': 'coffee' })
                    .sort({ "createdAt": 1 })
                    .limit(3)
            },
            'daily': () => {
                return productModel.aggregate([
                    { $limit: 3 }
                ])
            },
            'accessories': () => {
                return productModel.find({ 'category': 'accessory' })
                    .sort({ "createdAt": 1 })
                    .limit(2)
            },
            'ascending': () => {
                return productModel.find({}).sort({ "category": 1, "title": 1 })
            },
            'descending': () => {
                return productModel.find({}).sort({ "category": 1, "title": -1 })
            },
            'search': data => {
                return productModel.find({ title: { '$regex': data, $options: 'i' } })
            }
        }

        if (typeof query === 'object' && (query.data !== undefined || query.search !== undefined)) {
            if (query.data) {
                return products[query.data](query.data)
            }
            if (query.search) {
                return products[Object.keys(query)[0]](query.search)
            }
        }

        return productModel.find({}).sort({ "category": 1, "title": 1 })
    } catch (err) {
        throw err
    }
}
const getOne = async (id, userId) => await productModel.findById(id).populate('favorites')

const updateOne = async (id, rowData) => {

    let product

    try {
        product = await productModel.findByIdAndUpdate(id, rowData, { runValidators: true })
    } catch (err) {
        throw err
    }
    return product
}

const postProduct = async (rowData) => {

    let product
    try {
        product = await productModel.create(rowData)
    } catch (err) {
        throw err
    }
    return product
}

const deleteProduct = async (productId) => {
    let users
    let product
    try {
        users = await userModel.updateMany({}, { $pull: { favorites: productId } }, { runValidators: true })
        product = await productModel.findByIdAndRemove(productId)
    } catch (err) {
        throw err
    }

    return product
}

module.exports = {
    getAll,
    getOne,
    updateOne,
    postProduct,
    deleteProduct,
}