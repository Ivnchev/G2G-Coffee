const productModel = require('../../models/Product')
const userModel = require('../../models/User')

const getAll = async (isAdmin, userId) => {

    return productModel.find({}).sort({ "category": 1 })

    // if (isAdmin) {
    //     return await claimModel.find({})
    //         .populate({ path: 'creator', select: 'username' })
    //         .populate('trackingNumber')
    //         .sort({ 'creator': userId, 'creator': -1 })
    // }
    // return await claimModel.find({ creator: userId })
    //     .populate({ path: 'creator', select: 'username' })
    //     .populate('trackingNumber')
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