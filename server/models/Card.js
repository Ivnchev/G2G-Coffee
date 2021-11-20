
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    cardNumber: {
        type: Number,
        required: [true, 'Card number is required!'],
        min: [12, 'Card number must be at least 12 characters !']
    },
    cardExpires: {
        type: Date,
        required: [true, 'Date is required!'],
        match: [/\d{4}-\d{2}/, 'Date format is incorrect!'],
        trim: true,
    },
    cardSecurity: {
        type: Number,
        required: [true, 'Security Code is required!'],
        min: [3, 'Security Code must be 3 characters !']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
})



module.exports = mongoose.model('card', schema)