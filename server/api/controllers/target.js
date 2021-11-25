const router = require('express').Router()
const targetService = require('../services/targets.service')

router.route('/')
    .get(function (req, res, next) {
        targetService.getLastTarget()
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    .post(function (req, res, next) {
        targetService.postOne(req.body)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

router.route('/:id')
    .put(function (req, res, next) {
        targetService.postOne(req.params.id, req.body)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

module.exports = router