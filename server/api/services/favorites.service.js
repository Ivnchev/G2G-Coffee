const productModel = require('../../models/Product')
const userModel = require('../../models/User')

const favProduct = async (userId, productId) => {
    let user
    try {
        await productModel.findByIdAndUpdate({ _id: productId }, { $push: { favorites: userId } }, { runValidators: true })
        user = await userModel.findByIdAndUpdate({ _id: userId }, { $push: { favorites: productId } }, { runValidators: true })
    } catch (err) {
        throw err
    }

    return user
}

const removefavProduct = async (userId, productId) => {
    let user
    try {
        user = await userModel.findByIdAndUpdate({ _id: userId }, { $push: { favorites: productId } }, { runValidators: true })
    } catch (err) {
        throw err
    }
    return user
}


module.exports = {
    favProduct,
    removefavProduct,
}