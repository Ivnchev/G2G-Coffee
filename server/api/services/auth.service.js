const User = require('../../models/User')
const Card = require('../../models/Card')
const jwt = require('jsonwebtoken')
const { security: { SECRET, HEADER, COOKIE_NAME } } = require('../../config/environment')

const register = async function ({ username, password, email, role, gender, image, card }) {
    let data
    let cardData
    try {
        const user = await User.findOne({ username: username, email: email })
        if (user) throw { message: 'User already exist!', status: 400, custom: true, type: 'error' }
        data = await User.create({ username, password, email, role, gender, image })
        cardData = await Card.create({ ...card, user: data._id })
        await User.updateOne({ _id: data._id }, { $set: { card: cardData } })
    } catch (err) {
        throw err
    }
    const user = {
        _id: data._id,
        username: data.username,
        email: data.email,
        image: data.image,
        role: data.role,
        card: cardData
    }
    const token = jwt.sign(user, SECRET)
    return { user, token }
}

const login = async function ({ username, password }) {
    let data
    try {
        data = await User.findOne({ username })
        if (!data) throw { message: 'Incorrect Username or password!', status: 400, custom: true, type: 'error' }
        const isCorrectPassword = await data.comparePasswords(password)
        if (!isCorrectPassword) throw { message: 'Incorrect Username or password!', status: 400, custom: true, type: 'error' }
    } catch (err) {
        throw err
    }
    const user = {
        _id: data._id,
        username: data.username,
        email: data.email,
        image: data.image,
        role: data.role
    }
    const token = jwt.sign(user, SECRET)
    return { user, token }
}

const logout = async function (req, res) {

    const isLogout = new Promise((resolve, reject) => {
        const token = req.cookies[COOKIE_NAME] || req.headers[HEADER] || null
        if (token) {
            res.clearCookie(COOKIE_NAME)
            return resolve(token)
        }
        return reject(token)
    })
    return isLogout

}

const user = async function (req) {
    if (req.user) {
        return req.user
    }
    return {}
}

module.exports = {
    user,
    register,
    login,
    logout
}