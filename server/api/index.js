const router = require('express').Router()
const userRouter = require('./controllers/users')
const authRouter = require('./controllers/auth')
const productsRouter = require('./controllers/products')
const orderRouter = require('./controllers/order')
const favoritesRouter = require('./controllers/favorites')
const questionRouter = require('./controllers/question')
const targetRouter = require('./controllers/target')
const guards = require('./guards/common')


module.exports.connect = function (path, app) {

    router.use('/auth', authRouter)
    router.use('/users', guards.isLogged, userRouter)
    router.use('/products', productsRouter)
    router.use('/orders', guards.isLogged, orderRouter)
    router.use('/favorites', guards.isLogged, favoritesRouter)
    router.use('/question-and-answers', questionRouter)
    router.use('/target', guards.isLogged, guards.isAdmin, targetRouter)
    
    app.use(path, router)
}