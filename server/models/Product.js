
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    ordered: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'order'
        }
    ],
    favorites: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title must be at least 5 characters !'],
        maxLength: [40, 'Title should be maximum 10 characters !']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters !'],
        maxLength: [300, 'Description should be maximum 50 characters !']
    },
    imageURL: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Image should be a valid http url!'],
        default: '../../assets/images/user-logo.png',
    },
    price: {
        type: String,
        required: [true, 'Price is required!'],
        min: [1, 'Price must be at least 1 dollar !'],
        max: [20, 'Price should be maximum 20 dollars !']
    },
    category: {
        type: String,
        default: 'coffee',
        enum: ['coffee', 'package', 'accessory']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('product', schema)