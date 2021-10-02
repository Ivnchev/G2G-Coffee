const router = require('express').Router()
const productsService = require('../services/products.service')
const guards = require('../guards/common')

router.route('/')
    .get(function (req, res, next) {
        productsService.getAll()
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    .post(guards.isLogged, guards.isAdmin, function (req, res, next) {
        productsService.postProduct(req.body)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    
router.route('/:id')
    .get(function (req, res, next) {
        productsService.getOne(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(next)
    })
    .put(guards.isLogged, guards.isAdmin, function (req, res, next) {
        productsService.updateOne(req.params.id, req.body)
            .then(data => {
                res.json(data)
            })
            .catch(next)
    })
    .delete(guards.isLogged, guards.isAdmin, function (req, res, next) {
        productsService.deleteProduct(req.params.id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

module.exports = router