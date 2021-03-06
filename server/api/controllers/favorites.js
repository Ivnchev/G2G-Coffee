const router = require('express').Router()
const favoritesService = require('../services/favorites.service')

// router.route('/')


router.route('/:id')
    .post(function (req, res, next) {
        favoritesService.favProduct(req.params.id, req.user._id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    .put(function (req, res, next) {
        favoritesService.removefavProduct(req.params.id, req.user._id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

module.exports = router