const router = require('express').Router()
const favoritesService = require('../services/favorites.service')

router.route('/')
    .post(function (req, res, next) {
        favoritesService.favProduct(req.params.id, req.user._id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    
router.route('/:id')
    .delete(function (req, res, next) {
        favoritesService.removefavProduct(req.user._id, req.params.id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

module.exports = router