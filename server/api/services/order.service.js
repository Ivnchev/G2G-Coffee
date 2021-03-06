const productModel = require('../../models/Product')
const orderModel = require('../../models/Order')
const userModel = require('../../models/User')


const getOrders = async (userId, query) => {
    let orders
    try {
        if (Object.keys(query).length > 0) {
            return await orderModel.find({}).populate('product')
        }
        orders = await orderModel
            .find({ user: userId })
            .sort({ 'createdAt': -1 })
            .populate('product')
    } catch (err) {
        throw err
    }
    return orders
}


const orderProduct = async (data) => {
    let product
    let order
    try {
        order = await orderModel.create(data)
        product = await productModel.findByIdAndUpdate({ _id: data.product._id }, { $push: { ordered: order } }, { runValidators: true })
        await userModel.findByIdAndUpdate({ _id: data.user._id }, { $push: { ordered: order } }, { runValidators: true })
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
    getOrders,
    orderProduct,
    removeOrderProduct,
}