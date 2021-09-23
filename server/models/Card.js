
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    number: {
        type: mongoose.Types.ObjectId,
        ref: 'shipment'
    },
    number: {
        type: Number,
        required: [true, 'Card number is required!'],
        min: [12, 'Card number must be at least 12 characters !']
    },
    date: {
        type: String,
        required: [true, 'Date is required!'],
        minLength: [5, 'Date must be at least 10 characters !'],
        match: [/^\d{2}\/\d{2}$/g, 'Incorrect date!']
    },
    securityCode: {
        type: Number,
        required: [true, 'Security Code is required!'],
        min: [3, 'Security Code must be 3 characters !']
    }
})



module.exports = mongoose.model('card', schema)