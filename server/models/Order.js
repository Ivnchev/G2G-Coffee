
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    estimateTime: {
        type: String,
        enum: ['10', '20', '30', 'NA'],
        required: [true, 'Estimate Time is required!'],
    },
    quantity: {
        type: Number,
        min: [1, 'Incorrect quantity!'],
        max: [10, 'Incorrect quantity!'],
        required: [true, 'Quantity is required!']
    },
    bill: {
        type: Number,
        min: [0, 'Incorrect quantity!'],
        max: [1000, 'Incorrect quantity!'],
        required: [true, 'Bill is required!']
    },
    paid: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('order', schema)