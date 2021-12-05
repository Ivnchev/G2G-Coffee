const productModel = require('../../models/Product')
const userModel = require('../../models/User')

const getAll = async (query) => {
    let data
    try {
        if (query.offers === 'top') {
            return productModel.find({ 'category': 'coffee' })
                .sort({ "createdAt": 1 })
                .limit(3)
        }
        if (query.offers === 'daily') {
            return productModel.aggregate([
                { $limit: 3 }
            ])
        }
        if (query.offers === 'accessories') {
            return productModel.find({ 'category': 'accessory' })
                .sort({ "createdAt": 1 })
                .limit(2)
        }
        
        return productModel.find({}).sort({ "category": 1 })
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