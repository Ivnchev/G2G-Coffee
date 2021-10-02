const productModel = require('../../models/Product')
const userModel = require('../../models/User')


const orderProduct = async (productId, userId) => {
    let product
    try {
        product = await productModel.findByIdAndUpdate({ _id: productId }, { $push: { ordered: userId } }, { runValidators: true })
        await userModel.findByIdAndUpdate({ _id: userId }, { $push: { ordered: productId } }, { runValidators: true })
    } catch (err) {
        throw err
    }
    return product
}


const removeOrderProduct = async (userId, productId) => {
    let user
    try {
        user = await userModel.findByIdAndUpdate({ _id: userId }, { $pull: { ordered: productId } }, { runValidators: true })
    } catch (err) {
        throw err
    }

    return user
}

module.exports = {
    orderProduct,
    removeOrderProduct,
}