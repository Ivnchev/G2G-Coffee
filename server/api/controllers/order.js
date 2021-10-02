const router = require('express').Router()
const orderService = require('../services/order.service')

router.route('/')
    .post(function (req, res, next) {
        orderService.orderProduct(req.params.id, req.user._id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })
    
router.route('/:id')
    .delete(function (req, res, next) {
        orderService.removeOrderProduct(req.user._id, req.params.id)
            .then(data => {
                res.status(200).json(data)
            }).catch(next)
    })

module.exports = router