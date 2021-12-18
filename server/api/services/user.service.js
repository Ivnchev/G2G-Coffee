const User = require('../../models/User')
const Card = require('../../models/Card')
const bcrypt = require('bcrypt')
const { security: { SALT_ROUNDS, COOKIE_NAME } } = require('../../config/environment')

const getOne = async function (id) {
    try {
        const data = await User.findById(id)
            .populate('card')
            .populate('favorites')
            .populate('ordered')
        return data
    } catch (err) {
        throw err
    }
}


const updateUser = async function ({ username, email, oldPassword, newPassword, cardSecurity, cardNumber, cardExpires }, userId) {
    try {
        const data = await User.findOne({ _id: userId }).populate('card')

        const isCorrectPassword = await data.comparePasswords(oldPassword)
        if (!isCorrectPassword) throw { message: 'Incorrect passwords!', status: 400, custom: true }
        const hash = await bcrypt.genSalt(SALT_ROUNDS)
            .then(salt => bcrypt.hash(newPassword, salt))
            .then(hash => hash)

        await Card.findByIdAndUpdate({ _id: data.card.id }, { cardSecurity, cardNumber, cardExpires }, { runValidators: true })

        return await User.findByIdAndUpdate(
            { _id: data._id },
            { username, email, password: hash },
            { runValidators: true }
        )
    } catch (err) {
        throw err
    }
}

const deleteUser = async function (id) {
    try {
        const data = await User.findByIdAndRemove(id)
        return data
    } catch (err) {
        throw err
    }
}



module.exports = {
    updateUser,
    deleteUser,
    getOne
}